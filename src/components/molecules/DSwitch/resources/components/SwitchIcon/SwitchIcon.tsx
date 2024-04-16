'use client'
import { type FC } from 'react'

import { type ISwitchIconProps } from './resources'

const SwitchIcon: FC<ISwitchIconProps> = ({ isChecked }) => {
    console.log(isChecked)
    return (
        <svg
            className='duration-700 '
            viewBox='0 0 28 20'
            preserveAspectRatio='xMinYMid meet'
            aria-hidden='true'
            style={{ left: isChecked ? '12px' : '3px' }}
        >
            <rect fill='white' x='4' y='0' height='20' width='20' rx='10'></rect>
            <svg viewBox='0 0 20 20' fill='none' className='duration-700'>
                <path
                    fill={isChecked ? 'rgba(35, 165, 90, 1)' : 'rgba(128, 132, 142, 1)'}
                    d={
                        isChecked
                            ? 'M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z '
                            : 'M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z'
                    }
                ></path>
                <path
                    fill={isChecked ? 'rgba(35, 165, 90, 1)' : 'rgba(128, 132, 142, 1)'}
                    d={
                        isChecked
                            ? 'M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z'
                            : 'M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z'
                    }
                ></path>
            </svg>
        </svg>
    )
}

export default SwitchIcon
