import React from 'react'
import CustomTypography from '../custom-typography'

export default function SectionHeader({ title, subtitle }) {
    return (
        <div>
            <CustomTypography variant="largeHeading">{title}</CustomTypography>
            <CustomTypography variant="largeSubheading">
                {subtitle}
            </CustomTypography>
        </div>
    )
}
