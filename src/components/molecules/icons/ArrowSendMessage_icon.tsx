import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const ArrowSendMessage_icon: FC<IIconProps> = ({ size = '16', className }) => {
    return (
        <svg
            className={`sendIcon__461ff ${className}`}
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
                d='M6.6 10.02 14 11.4a.6.6 0 0 1 0 1.18L6.6 14l-2.94 5.87a1.48 1.48 0 0 0 1.99 1.98l17.03-8.52a1.48 1.48 0 0 0 0-2.64L5.65 2.16a1.48 1.48 0 0 0-1.99 1.98l2.94 5.88Z'
                className=''
            ></path>
        </svg>
    )
}

export default ArrowSendMessage_icon
