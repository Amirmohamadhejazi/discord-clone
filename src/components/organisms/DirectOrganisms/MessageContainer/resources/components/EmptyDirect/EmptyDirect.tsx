'use client'
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import {
    wumpus1_gif,
    wumpus2_gif,
    wumpus3_gif,
    wumpus4_gif,
    wumpus5_gif,
    wumpus6_gif,
    wumpus7_gif,
    wumpus8_gif,
    wumpus9_gif,
    wumpus10_gif
} from '@public/images'

const EmptyDirect: FC<{
    dataUser: {
        name: string
        username: string
        avatar: TCriticalAnyType
        useId: string
        status: string
    }
}> = ({ dataUser }) => {
    const images = [
        wumpus1_gif,
        wumpus2_gif,
        wumpus3_gif,
        wumpus4_gif,
        wumpus5_gif,
        wumpus6_gif,
        wumpus7_gif,
        wumpus8_gif,
        wumpus9_gif,
        wumpus10_gif
    ]

    const randomImage = images[Math.floor(Math.random() * images.length)]
    return (
        <div className='flex items-start flex-col gap-y-2 overflow-auto'>
            <div className='w-24 h-24'>
                <img src={dataUser.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
            </div>
            <span className='text-3xl font-semibold'>{dataUser.name}</span>
            <span>{dataUser.username}</span>
            <div className='flex flex-col items-start gap-y-3 mb-3'>
                {/* when this user do not have a direct */}
                <span className='text-sm'>This is the beginning of your direct message history with </span>
                <div className='w-36'>
                    <img src={randomImage.src} className='w-full h-full rounded-full object-cover' alt='image direct' />
                </div>
                <div className='bg-general-blue hover:bg-[#4752c4] duration-300 cursor-pointer text-white font-semibold px-12 py-2 rounded-md text-sm '>
                    Wave to {dataUser.name}
                </div>
            </div>
        </div>
    )
}

export default React.memo(EmptyDirect)
