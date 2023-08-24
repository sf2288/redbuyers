import React from 'react'
import CustomInput from '../custom-input'

export default function OfferCard() {
    return (
        <div className="align-center flex h-[461px] w-[1196px] flex-shrink-0 flex-col justify-center rounded-[50px] bg-[#f2f2f280] pb-[87px] pt-[80px] text-center backdrop-blur-[50px]">
            <p className=" text-[32px] font-bold leading-10">
                Enter you home details and
            </p>
            <h2 className="text-[48px] font-bold leading-10 text-blue">
                Get an instant offer.
            </h2>
            <p className="mb-[64px] mt-2 text-[24px]">Within 24 hours!</p>
            <div className="mx-auto w-full md:w-[775px]">
                <CustomInput />
            </div>
        </div>
    )
}
