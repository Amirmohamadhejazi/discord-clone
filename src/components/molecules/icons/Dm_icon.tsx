import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Dm_icon: FC<IIconProps> = ({ size = '20' }) => {
    return (
        <svg
            className='icon__7215c'
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
                d='M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z'
                className=''
            ></path>
        </svg>
    )
}

export default Dm_icon
