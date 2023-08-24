import React from 'react'
import CustomImage from '../custom-image'

export default function CustomInput() {
    return (
        <section>
            <label
                for="search"
                class="sr-only mb-2 text-sm font-medium text-gray-900"
            >
                Search
            </label>
            <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-5 top-[19px] flex h-[44px] w-[44px] items-center pl-3">
                    <CustomImage src="/icons/location.svg" />
                </div>
                <input
                    type="search"
                    id="search"
                    class="block w-full rounded-lg border border-gray-300 bg-white py-[26px]  pl-20 text-lg text-gray-900 outline-none focus:border-sky-blue-700"
                    placeholder="Search"
                    required
                />
                <button
                    type="submit"
                    class="hover:bg-blue-800 focus:ring-blue-300 absolute bottom-2.5 right-2.5 rounded-lg bg-blue p-[22px] text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                    Search
                </button>
            </div>
        </section>
    )
}
