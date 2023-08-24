'use client'
import { AppRoutes, HeaderMenuLinks, MobileMenuLinks } from '@/utils/constants'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import CustomImage from '../custom-image'
import CustomLink from '../custom-link'
import CustomTypography from '../custom-typography'
import Logo from '../logo'
import AuthButtonsComponent from './auth-buttons'

const MobileMenuComponent = dynamic(() => import('./mobile-menu'))

export default function Navbar() {
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
    const pathName = usePathname()

    const renderLinks = useMemo(() => {
        return HeaderMenuLinks && HeaderMenuLinks.length
            ? HeaderMenuLinks.map((item, index) => {
                  const isActive = pathName === item?.url
                  const renderIndicator = (
                      <div
                          className={`h-0.5 w-3 rounded-[1px] group-hover:bg-blue ${
                              isActive ? 'bg-white' : ''
                          }`}
                      />
                  )
                  return item?.url ? (
                      <CustomLink
                          key={`${item?.title}-${index}`}
                          href={item?.url}
                      >
                          <div className="inline-flex flex-col items-center justify-center gap-1">
                              <CustomTypography
                                  className={`!font-medium text-white`}
                              >
                                  {item?.title}
                              </CustomTypography>
                              {renderIndicator}
                          </div>
                      </CustomLink>
                  ) : (
                      <div
                          key={`${item?.title}-${index}`}
                          className="group inline-flex cursor-pointer flex-col items-center justify-center gap-1"
                      >
                          <CustomTypography
                              className={`!font-medium text-white`}
                          >
                              {item?.title}
                          </CustomTypography>

                          {renderIndicator}
                      </div>
                  )
              })
            : null
    }, [pathName])

    return (
        <nav
            className="fixed left-0 right-0 top-0 z-[1000] mx-auto flex h-14 w-full items-center justify-between bg-sky-blue-700 px-5 
        py-3 lg:h-16 lg:px-[30px]"
        >
            <div className="flex w-full flex-row-reverse items-center justify-between gap-3 lg:w-auto  lg:flex-row lg:justify-start">
                <div
                    className="relative h-5 w-[26px] cursor-pointer lg:mt-[12.5px] lg:h-[34px] lg:w-[34px]"
                    onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
                >
                    <CustomImage
                        src="/icons/icon-menu.svg"
                        alt={`hamburg-menu`}
                        priority={true}
                    />
                </div>
                <CustomLink
                    href={AppRoutes.home}
                    className="relative h-[32px] w-[90px] lg:h-[34px] lg:w-[109px]"
                >
                    <Logo className="!object-contain" />
                </CustomLink>
            </div>

            <div className="hidden lg:flex lg:items-start lg:justify-center lg:gap-[30px]">
                {renderLinks}
            </div>

            <AuthButtonsComponent />
            {toggleMobileMenu ? (
                <MobileMenuComponent
                    menuItems={MobileMenuLinks}
                    toggleMobileMenu={toggleMobileMenu}
                    setToggleMobileMenu={setToggleMobileMenu}
                />
            ) : null}
            {/* <div
                className={`inset-0 z-10 h-screen w-full ${
                    toggleMobileMenu ? 'absolute' : 'hidden'
                }`}
                onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
            >
                <div
                    className="border-gray 95 absolute top-[72px] flex w-full flex-col justify-between rounded-b-lg
        border-b py-1 font-medium shadow-md lg:hidden"
                >
                    {renderLinks}
                </div>
            </div> */}
        </nav>
    )
}
