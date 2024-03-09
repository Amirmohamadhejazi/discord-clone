import React, { type FC } from 'react'

const Menu_icon: FC<{ size: 'lg' | 'md' }> = ({ size = 'md' }) => {
    const sizeIcon = () => {
        switch (size) {
            case 'lg':
                return '24'
            case 'md':
                return '20'
        }
    }
    return (
        <svg
            className='additionalActionsIcon__33de0'
            aria-hidden='true'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            width={sizeIcon()}
            height={sizeIcon()}
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
                fill='currentColor'
                fillRule='evenodd'
                d='M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
                clip-rule='evenodd'
                className=''
            ></path>
        </svg>
    )
}

export default Menu_icon
