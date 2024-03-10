import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const ArrowLink_icon: FC<IIconProps> = ({ size = '17' }) => {
    return (
        <svg
            aria-hidden='true'
            role='img'
            width={size}
            height={size}
            className='connectedAccountOpenIcon_df549d right__309a5 cursor-pointer'
            viewBox='0 0 24 24'
        >
            <polygon
                fill='currentColor'
                fillRule='nonzero'
                points='13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
            ></polygon>
        </svg>
    )
}

export default ArrowLink_icon
