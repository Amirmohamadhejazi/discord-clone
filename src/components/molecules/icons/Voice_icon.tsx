import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Voice_icon: FC<IIconProps> = ({ size = '24', className, isPrivate = false }) => {
    if (isPrivate) {
        return (
            <svg
                className={`icon_eff5d4 ${className}`}
                aria-hidden='true'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                width={size}
                height={size}
                fill='none'
                viewBox='0 0 24 24'
            >
                <path
                    fill='currentColor'
                    fillRule='evenodd'
                    d='M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z'
                    clipRule='evenodd'
                    className=''
                ></path>
                <path
                    fill='currentColor'
                    d='M11 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-.06a1 1 0 0 1-.74-.32L5.92 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.92l4.28-4.68a1 1 0 0 1 .74-.32H11ZM20.5 12c-.28 0-.5.22-.52.5a7 7 0 0 1-5.13 6.25c-.48.13-.85.55-.85 1.05v.03c0 .6.52 1.06 1.1.92a9 9 0 0 0 6.89-8.25.48.48 0 0 0-.49-.5h-1ZM16.5 12c-.28 0-.5.23-.54.5a3 3 0 0 1-1.33 2.02c-.35.23-.63.6-.63 1.02v.14c0 .63.59 1.1 1.16.83a5 5 0 0 0 2.82-4.01c.02-.28-.2-.5-.48-.5h-1Z'
                    className=''
                ></path>
            </svg>
        )
    } else {
        return (
            <svg
                className={`icon_eff5d4 ${className}`}
                aria-hidden='true'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                width={size}
                height={size}
                fill='none'
                viewBox='0 0 24 24'
            >
                <path
                    fill='currentColor'
                    d='M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z'
                    className=''
                ></path>
                <path
                    fill='currentColor'
                    d='M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z'
                    className=''
                ></path>
            </svg>
        )
    }
}

export default Voice_icon
