import CustomImage from '../custom-image'

const stepsData = [
    {
        title: 'Request for an offer',
        subtitle:
            'Fill in your property details and get an instant preliminary home value.',
    },
    {
        title: 'Schedule an appointment',
        subtitle:
            'Show us your home in-person or virtually and get our offer within 24 hours of the appointment.',
    },
    {
        title: 'Sell your house',
        subtitle:
            'Have complete control over your decision. Either accept our offer or list with us.',
    },
]

export default function Steps() {
    return (
        <ol className="relative  border-l-2  border-dashed border-secondary text-secondary">
            {(stepsData || []).map((item, index) => (
                <li key={`${item?.title}-${index}-star`}>
                    <span className="absolute -left-[18px] flex h-[35px] w-[35px]">
                        <CustomImage src="/icons/checkmark.svg" />
                    </span>
                    <div className="mb-[50px] ml-[50px]">
                        <p className="text-lg uppercase text-secondary">
                            Step {index + 1}
                        </p>
                        <h2 className="mb-[15px] mt-5 text-3xl font-semibold uppercase text-primary">
                            Personal Info
                        </h2>
                        <p className="text-lg text-secondary">
                            Step details here
                        </p>
                    </div>
                </li>
            ))}
        </ol>
    )
}
