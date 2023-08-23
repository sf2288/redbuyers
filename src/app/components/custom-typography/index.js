import React from 'react'

export default function CustomTypography({
    variant = 'body',
    children,
    className = '',
    title = '',
}) {
    const getTypographyClasses = () => {
        switch (variant) {
            case 'heading':
                return 'text-3xl font-bold'
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
