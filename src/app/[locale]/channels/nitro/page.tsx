/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { type Metadata } from 'next'

import { NitroBadge_icon } from '@molecules/icons'

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
                            <NitroBadge_icon />
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
