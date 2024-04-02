import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const PlayMusic_icon: FC<IIconProps> = ({ size = '16', className }) => {
    return (
        <svg
            className={`iconPlay__491c5 icon__35cb9 ${className}`}
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
                d='M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z'
                className=''
            ></path>
        </svg>
    )
}

export default PlayMusic_icon
