import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const OpenLink_icon: FC<IIconProps> = ({ size = '16', className }) => {
    return (
        <svg
            aria-label='Open Link'
            className={`iconExternalMargins_ca8358 icon__35cb9 ${className}`}
            aria-hidden='false'
            role='img'
            width={size}
            height={size}
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                transform='translate(3.000000, 4.000000)'
                d='M16 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H2V4h14v10h-4v2h4c1.1 0 2-.9 2-2V2a2 2 0 0 0-2-2zM9 6l-4 4h3v6h2v-6h3L9 6z'
            ></path>
        </svg>
    )
}

export default OpenLink_icon
