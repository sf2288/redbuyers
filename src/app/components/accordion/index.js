'use client'
import { useState } from 'react'
import CustomImage from '../custom-image'
import CustomLink from '../custom-link'
import CustomTypography from '../custom-typography'

export default function Accordion({ data, isFooter = false }) {
    const [isExpanded, setIsExpanded] = useState({ 0: true })

    const handleExpand = (index) => {
        setIsExpanded((prev) => ({ ...prev, [index]: !isExpanded[index] }))
    }

    return data && data.length
        ? data.map((item, index) => {
              return (
                  <div
                      key={`${item?.title}-${index}`}
                      className={`${
                          isFooter ? 'flex-row' : 'flex-col'
                      } flex gap-[10px]`}
                  >
                      <div
                          className="flex cursor-pointer items-center justify-between"
                          onClick={() => handleExpand(index)}
                      >
                          <CustomTypography
                              className={`text-xl !font-bold text-blue ${
                                  isFooter ? 'uppercase' : ''
                              }`}
                          >
                              {item?.title}
                          </CustomTypography>
                          <div
                              className={`relative m-2 h-[25px] w-[25px] ${
                                  isFooter ? 'invisible' : 'visible'
                              } ${!isExpanded[index] ? 'rotate-180' : ''}`}
                          >
                              <CustomImage
                                  src="/icons/up-arrow.svg"
                                  alt={`hamburg-menu-close`}
                              />
                          </div>
                      </div>
                      <div
                          className={`${
                              isExpanded[index] ? 'block' : 'hidden'
                          } flex flex-col gap-2`}
                      >
                          {item?.subMenu && item?.subMenu.length
                              ? item?.subMenu.map((sMenu, sMenuIndex) => {
                                    return sMenu?.url ? (
                                        <CustomLink
                                            key={`${item?.title}-${sMenu?.title}-${sMenuIndex}`}
                                            href={sMenu?.url}
                                        >
                                            <CustomTypography
                                                className={`line-clamp-1 text-[18px] !font-medium text-secondary ${sMenu?.className}`}
                                            >
                                                {sMenu?.title}
                                            </CustomTypography>
                                        </CustomLink>
                                    ) : (
                                        <CustomTypography
                                            key={`${item?.title}-${sMenu?.title}-${sMenuIndex}`}
                                            className={`text-[18px] !font-medium text-secondary ${
                                                sMenu?.isAllLocation
                                                    ? '!text-blue !underline'
                                                    : ''
                                            }`}
                                        >
                                            {sMenu?.title}
                                        </CustomTypography>
                                    )
                                })
                              : null}
                      </div>
                  </div>
              )
          })
        : null
}
