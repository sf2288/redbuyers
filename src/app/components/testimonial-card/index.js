import CustomImage from '../custom-image'

export default function TestimonialCard({ data }) {
    return (
        <div className="h-full w-full flex-shrink-0  md:max-w-[860px]">
            <div className="customShadow h-full rounded-[50px] p-[75px]">
                <div className="flex">
                    {[...Array(data?.star).keys()].map((item, index) => (
                        <div
                            key={`${item}-${index}-star`}
                            className="relative h-[50px] w-[50px]"
                        >
                            <CustomImage src="/icons/star.svg" alt="star" />
                        </div>
                    ))}
                </div>
                <p className="my-[30px] text-2xl leading-8 text-gray-900">
                    {data?.review}
                </p>
                <a className="inline-flex items-center">
                    <div className="relative h-[90px] w-[90px] ">
                        <CustomImage
                            alt="testimonial"
                            src="/avatar.png"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col pl-[50px]">
                        <p className="title-font text-[28px] font-medium leading-8 text-blue ">
                            Holden Caulfield
                        </p>
                        <p className="text-2xl leading-8 text-secondary">
                            UI DEVELOPER
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}
