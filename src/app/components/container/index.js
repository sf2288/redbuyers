import React from 'react'

export default function Container({ children }) {
    return (
        <div className="max-w-sm-[1920px] mx-auto w-full max-w-[414px] px-4">
            {children}
        </div>
    )
}
