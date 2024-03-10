import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Menu_icon: FC<IIconProps> = ({ size = '24' }) => {
    return (
        <svg
            className='additionalActionsIcon__33de0'
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
                d='M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
                clipRule='evenodd'
                className=''
            ></path>
        </svg>
    )
}

export default Menu_icon
