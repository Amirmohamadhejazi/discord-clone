import { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Phone_icon: FC<IIconProps> = ({ size = '24' }) => {
    return (
        <svg
            aria-hidden='true'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            className='text-[#2b2d31]'
            width={size}
            height={size}
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                fill-rule='evenodd'
                d='M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4Zm5 16a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM8 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8Z'
                clip-rule='evenodd'
                className=''
            ></path>
        </svg>
    )
}

export default Phone_icon
