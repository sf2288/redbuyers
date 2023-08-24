import { APP_NAME, AppRoutes, SEO } from '@/utils/constants'
import CustomImage from './components/custom-image'
import SectionHeader from './components/section-header'
import Steps from './components/steps'
import TestimonialCard from './components/testimonial-card'
import OfferCard from './components/offer-card'
import Footer from './components/footer'

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

const testimonialCardData = [
    {
        star: 3,
        review: 'We felt very fortunate to have Santhosh and the team’s help during a recent "long-distance" commercial property purchase. They kept us very well informed throughout the process and planned everything to perfection. We are very pleased with everything you did for us.',
        username: 'Gurvir Sohal',
        location: 'Toronto',
        avatar: '/avatar.png',
    },
]

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex w-full max-w-5xl items-center justify-between">
                <p className=" flex w-full justify-center">
                    Get an Instant offer <br />
                    and sell your home
                </p>
                <div className="   flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <div className="before:bg-gradient-radial after:bg-gradient-conic after:via-blue-200 before:dark:to-blue-700 relative z-[-1] flex h-[480px] w-[480px] place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:from-sky-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
                        <CustomImage
                            src="/home/hero-image.png"
                            alt={`${APP_NAME}-home-hero-image`}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
            <div className="z-[-1]">
                <CustomImage src="/common/zigzag_line.svg" />
            </div>
            <SectionHeader
                title="Let’s See How it Works"
                subtitle="Here’s how we make it easier to sell your home"
            />

            <SectionHeader
                title={
                    <div>
                        <p>Don’t take our word for it.</p>
                        <p>Take theirs...</p>
                    </div>
                }
                subtitle="Listen to what our customers have to say."
            />
            <br />
            <br />
            <Steps />

            {(testimonialCardData || []).map((i, j) => (
                <TestimonialCard data={i} key={j} />
            ))}
            <OfferCard />
            <Footer />
        </main>
    )
}
