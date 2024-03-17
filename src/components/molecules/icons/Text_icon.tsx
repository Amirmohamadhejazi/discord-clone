import { type FC } from 'react'

import { type IIconProps } from './resources/types/types'

const Text_icon: FC<IIconProps> = ({ size = '24', className, isPrivate = false }) => {
    if (isPrivate) {
        return (
            <svg
                className={`icon_eff5d4 ${className}`}
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
                    d='M16 4h.5v-.5a2.5 2.5 0 0 1 5 0V4h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4-.5V4h-2v-.5a1 1 0 1 1 2 0Z'
                    clipRule='evenodd'
                    className=''
                ></path>
                <path
                    fill='currentColor'
                    d='M12.5 8c.28 0 .5.22.5.5V9c0 .1 0 .2.02.31.03.34-.21.69-.56.69H9.85l-.67 4h4.97l.28-1.68c.06-.34.44-.52.77-.43a3 3 0 0 0 .8.11c.27 0 .47.24.43.5l-.25 1.5H20a1 1 0 1 1 0 2h-4.15l-.86 5.16a1 1 0 0 1-1.98-.32l.8-4.84H8.86l-.86 5.16A1 1 0 0 1 6 20.84L6.82 16H3a1 1 0 1 1 0-2h4.15l.67-4H4a1 1 0 1 1 0-2h4.15l.86-5.16a1 1 0 1 1 1.98.32L10.19 8h2.31Z'
                    className=''
                ></path>
            </svg>
        )
    } else {
        return (
            <svg
                className={`icon_eff5d4 ${className}`}
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
                    d='M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z'
                    clipRule='evenodd'
                    className=''
                ></path>
            </svg>
        )
    }
}

export default Text_icon
