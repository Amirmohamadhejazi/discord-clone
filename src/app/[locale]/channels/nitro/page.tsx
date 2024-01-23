/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { type Metadata } from 'next'

import { nitroBg } from '@public/images'

export const metadata: Metadata = {
    title: 'Nitro',
    description: 'Nitro'
}
const Nitro = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
                <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                    <div className='flex items-center  gap-1 '>
                        <div className='text-sm'>
                            <svg
                                className='linkButtonIcon__2f35b'
                                aria-hidden='true'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                width='20'
                                height='20'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path fill='currentColor' d='M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' className=''></path>
                                <path
                                    fill='currentColor'
                                    fillRule='evenodd'
                                    d='M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'
                                    clipRule='evenodd'
                                ></path>
                                <path fill='currentColor' d='M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z'></path>
                            </svg>
                        </div>
                        <span className='font-medium text-white text-sm'>Nitro</span>
                    </div>
                </div>
            </div>

            {/* <div className='p-1' style={{ backgroundImage: `url('${nitroBg.src}')` }}></div> */}
            <div className='bg-general-gray-100 relative'>
                <img src={nitroBg.src} alt='' />
                <div className='absolute '>1</div>
            </div>
        </div>
    )
}

export default Nitro
