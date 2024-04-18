import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Windows_icon: FC<IIconProps> = ({ size = '24' }) => {
    return (
        <svg
            aria-hidden='true'
            className='text-[#2b2d31]'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                d='M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM13.5 20a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-1.5Z'
                className=''
            ></path>
        </svg>
    )
}

export default Windows_icon
