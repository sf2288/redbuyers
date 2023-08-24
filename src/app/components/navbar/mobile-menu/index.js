'use client'
// import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Accordion from '../../accordion'
import CustomImage from '../../custom-image'
import CustomTypography from '../../custom-typography'
import AuthButtonsComponent from '../auth-buttons'

export default function MobileMenuComponent({
    menuItems,
    toggleMobileMenu,
    setToggleMobileMenu,
}) {
    console.log(
        '🚀 ~ file: index.js:12 ~ MobileMenuComponent ~ toggleMobileMenu:',
        toggleMobileMenu
    )
    // const pathName = usePathname()

    const renderLinks = useMemo(() => {
        return <Accordion data={menuItems} />
    }, [menuItems])

    return (
        <div className="fixed inset-0 z-[1001] h-full w-full bg-white px-[18px] pb-[10px] pt-[30px]">
            <div className="flex h-full flex-col gap-[22px]">
                <div className="relative flex w-full items-center justify-between">
                    <CustomTypography className={`text-[18px] !font-bold`}>
                        Menu
                    </CustomTypography>
                    <div
                        className="absolute right-0 cursor-pointer border border-transparent hover:rounded-full hover:border hover:shadow"
                        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                    >
                        <div className="relative m-2 h-[25px] w-[25px]">
                            <CustomImage
                                src="/icons/icon-close.svg"
                                alt={`hamburg-menu-close`}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 overflow-auto">
                    {renderLinks}
                </div>

                <AuthButtonsComponent isInMobile={toggleMobileMenu} />
            </div>
        </div>
    )
}
