'use client'
import { AppRoutes } from '@/utils/constants'
import { usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'
import CustomImage from '../custom-image'
import CustomLink from '../custom-link'
import CustomTypography from '../custom-typography'
import Logo from '../logo'

export default function Navbar({ menuLinks = [] }) {
    const [open, setOpen] = useState(false)
    const pathName = usePathname()

    const renderLinks = useMemo(() => {
        return menuLinks && menuLinks.length
            ? menuLinks.map((item, index) => {
                  const isActive = pathName === item?.url
                  return (
                      <CustomLink
                          key={index}
                          href={item?.url}
                          className={`border-primary-white mx-4 py-6 lg:border-0 lg:px-0 lg:py-0 lg:hover:text-indigo-600 ${
                              index < menuLinks.length - 1 ? 'border-b' : ''
                          }`}
                      >
                          <CustomTypography
                              variant="h6"
                              className={`${
                                  isActive
                                      ? 'lg:border-b-2 lg:border-b-indigo-600 lg:!text-indigo-600'
                                      : ''
                              } lg:text-primary text-primary-white border-transparent lg:border-b-2 lg:hover:border-b-indigo-600 lg:hover:text-indigo-600`}
                          >
                              {item?.title}
                          </CustomTypography>
                      </CustomLink>
                  )
              })
            : null
    }, [menuLinks, pathName])

    return (
        <nav className="fixed left-0 right-0 top-0 mx-auto h-16">
            <div className="bg-sky-blue-700 flex w-full items-center justify-between">
                <div className="flex items-center">
                    <div
                        className="relative flex h-[34px] w-[34px] items-center"
                        onClick={() => setOpen(!open)}
                    >
                        <CustomImage
                            src="/common/ion-menu.svg"
                            alt={`hamburg-menu`}
                            priority={true}
                        />
                    </div>
                    <CustomLink
                        href={AppRoutes.home}
                        className="relative h-[30px] w-[105px]"
                    >
                        <Logo />
                    </CustomLink>
                    {/* <div
                    className={`mx-auto hidden w-auto flex-col space-y-4 font-medium lg:mt-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:border-0`}
                >
                    {renderLinks}
                </div> */}
                </div>

                <div class="flex items-start justify-center gap-[30px]">
                    <div class="flex items-center justify-center gap-2.5">
                        <div class="inline-flex flex-col items-center justify-center gap-1">
                            <div class="text-base font-medium text-white">
                                Sell
                            </div>
                            <div class="h-0.5 w-3 rounded-[1px] bg-white"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-2.5">
                        <div class="inline-flex flex-col items-center justify-center gap-1">
                            <div class="text-base font-medium text-white">
                                Buy
                            </div>
                            <div class="h-0.5 w-3 rounded-[1px] bg-blue-700"></div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center gap-2.5">
                        <div class="inline-flex flex-col items-center justify-center gap-1">
                            <div class="text-base font-medium text-white">
                                Contact Us
                            </div>
                            <div class="h-0.5 w-3 rounded-[1px]"></div>
                        </div>
                    </div>
                </div>

                <div class=":visibile invisible flex items-center justify-start gap-5">
                    <div class="flex h-[52px] shrink grow basis-0 items-center justify-between gap-5 py-[5px] pl-[50px] pr-5">
                        <div class="flex items-center justify-center gap-2.5 px-5 py-2.5">
                            <div class="inline-flex flex-col items-center justify-center gap-1">
                                <div class="text-base font-medium text-white">
                                    Log In
                                </div>
                            </div>
                        </div>
                        <div class="inline-flex flex-col items-center justify-center rounded-[10px] border border-blue-700 bg-blue-700 px-5 py-2.5">
                            <div class="text-lg font-medium text-white">
                                Register
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div
                className={`inset-0 z-10 h-screen w-full ${
                    open ? 'absolute' : 'hidden'
                }`}
                onClick={() => setOpen(!open)}
            >
                <div
                    className="border-gray 95 absolute top-[72px] flex w-full flex-col justify-between rounded-b-lg 
        border-b py-1 font-medium shadow-md lg:hidden"
                >
                    {renderLinks}
                </div>
            </div> */}
            </div>
        </nav>
    )
}
