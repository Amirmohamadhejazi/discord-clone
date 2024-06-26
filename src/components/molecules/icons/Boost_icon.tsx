import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Boost_icon: FC<IIconProps> = ({ size = '24', className }) => {
    return (
        <svg className={className} aria-hidden='true' role='img' width={size} height={size} viewBox='0 0 8 12'>
            <path
                d='M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z'
                fill='currentColor'
            ></path>
            <path d='M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z' fill='currentColor'></path>
        </svg>
    )
}

export default Boost_icon
