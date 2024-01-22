/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { type FC } from 'react'

import { static_data_me } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

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
        messages: { sender: string; message: string; messageId: string; date: string }[]
    }
}> = ({ dataDirect, dataUser }) => {
    const { messages } = dataDirect
    return (
        <div className='flex flex-col gap-y-2'>
            {messages.map((itemDirect, index) => {
                const userOrMe = itemDirect.sender === 'me'
                const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false

                if (!prevMessage) {
                    return (
                        <div className='flex items-center gap-x-3' key={itemDirect.messageId}>
                            <div className='w-10 h-10'>
                                <img
                                    src={userOrMe ? static_data_me.avatar.src : dataUser.avatar.src}
                                    className='w-full h-full rounded-full object-cover'
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-end gap-x-2'>
                                    <span className='font-semibold text-white'>
                                        {userOrMe ? static_data_me.displayName : dataUser.displayName}
                                    </span>
                                    <span className='text-xs'>--,--,----</span>
                                </div>
                                <span className='text-white text-sm'>{itemDirect.message}</span>
                            </div>
                        </div>
                    )
                }
                if (prevMessage) {
                    return (
                        <span className='text-white text-sm ml-[52px]' key={itemDirect.messageId}>
                            {itemDirect.message}
                        </span>
                    )
                }
            })}
        </div>
    )
}

export default DirectUser
