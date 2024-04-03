import React, { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const AddReaction_icon: FC<IIconProps> = ({ size = '18', className }) => {
    return (
        <svg
            className={`icon__1a2d2 ${className}`}
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
                d='M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-9.8 1.17a1 1 0 0 1 1.39.27 3.5 3.5 0 0 0 5.82 0 1 1 0 0 1 1.66 1.12 5.5 5.5 0 0 1-9.14 0 1 1 0 0 1 .27-1.4Z'
                clipRule='evenodd'
                className=''
            ></path>
        </svg>
    )
}

export default AddReaction_icon
