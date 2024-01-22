/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { type FC } from 'react'

import { static_data_me } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { avatar_me } from '@public/images'

const DirectUser: FC<{
    dataUser: {
        displayName: string
        username: string
        avatar: TCriticalAnyType
        useId: string
        status: string
    }
    dataDirect: {
        personId: string
        lastUpdateData: string
        messages: {
            message: string
            messageId: string
            date: string
        }[]
    }
}> = ({ dataDirect, dataUser }) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <div className='flex items-center gap-x-3'>
                <div className='w-10 h-10'>
                    <img src={dataUser.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-end gap-x-2'>
                        <span className='font-semibold text-white'>{dataUser.displayName}</span>
                        <span className='text-xs'>01/22/2024</span>
                    </div>
                    <span className='text-white text-sm'>m 1</span>
                </div>
            </div>
            <div className='flex items-center gap-x-3'>
                <div className='w-10 h-10'>
                    <img src={static_data_me.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-end gap-x-2'>
                        <span className='font-semibold text-white'>{static_data_me.displayName}</span>
                        <span className='text-xs'>01/22/2024</span>
                    </div>
                    <span className='text-white text-sm'>m 1</span>
                </div>
            </div>
        </div>
    )
}

export default DirectUser
