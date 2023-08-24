'use client'
import CustomTypography from '../../custom-typography'

export default function AuthButtonsComponent({ isInMobile = false }) {
    return (
        <div className="hidden gap-5 lg:flex lg:items-center lg:justify-start">
            <div className="flex h-[52px] shrink grow basis-0 items-center justify-between gap-5 py-[5px] pl-[50px] pr-5">
                <div className="flex items-center justify-center gap-2.5 px-5 py-2.5">
                    <CustomTypography
                        className={`!font-medium ${
                            isInMobile ? 'text-primary' : 'text-white'
                        }`}
                    >
                        Log In
                    </CustomTypography>
                </div>
                <div className="flex h-[42px] items-center justify-start rounded-[10px] border border-blue bg-blue px-5 py-2.5">
                    <div className="text-lg font-medium text-white">
                        <CustomTypography
                            className={`text-lg !font-medium text-white`}
                        >
                            Register
                        </CustomTypography>
                    </div>
                </div>
            </div>
        </div>
    )
}
