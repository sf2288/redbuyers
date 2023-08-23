import { APP_NAME } from '@/utils/constants'
import CustomImage from '../custom-image'

export default function Logo({ className = '' }) {
    return (
        <CustomImage
            src="/common/redbuyers-logo.png"
            alt={`${APP_NAME} logo`}
            priority={true}
            className={className}
        />
    )
}
