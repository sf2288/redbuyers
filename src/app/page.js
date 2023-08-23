import { APP_NAME, AppRoutes, SEO } from '@/utils/constants'
import Image from 'next/image'
import CustomImage from './components/custom-image'

const title = `${SEO?.home?.title} | ${APP_NAME}`
const description = SEO?.home?.description
export const metadata = {
    title,
    description,
    keywords: SEO?.home?.keywords,
    openGraph: {
        title,
        description,
        url: AppRoutes.home,
    },
    alternates: {
        canonical: AppRoutes.home,
    },
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex w-full max-w-5xl items-center justify-between">
                <p className=" flex w-full justify-center">
                    Get an Instant offer <br />
                    and sell your home
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <div className="relative z-[-1] flex h-[480px] w-[480px] place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                        <CustomImage
                            src="/home/hero-image.png"
                            alt={`${APP_NAME}-home-hero-image`}
                            priority={true}
                            className="absolute inset-0 h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
