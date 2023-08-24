import React from 'react'

export default function CustomTypography({
    variant = 'body',
    children,
    className = '',
    title = '',
}) {
    const getTypographyClasses = () => {
        switch (variant) {
            case 'largeHeading':
                return 'text-center lg:text-5xl text-2xl font-bold'
            case 'heading':
                return 'text-3xl font-bold'
            case 'largeSubheading':
                return 'text-center lg:text-2xl text-base font-normal'
            case 'subheading':
                return 'text-xl font-medium'
            case 'body':
            default:
                return 'text-base font-normal'
        }
    }

    const typographyClasses = getTypographyClasses()

    return (
        <p className={`${typographyClasses} ${className}`} title={title}>
            {children}
        </p>
    )
}
