/* eslint-disable @next/next/no-img-element */
'use client'

import { type FC, useEffect, useRef } from 'react'

import { DMenu } from '@atoms/DMenu'

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

    const scrollContainerRef = useRef(null)
    useEffect(() => {
        // Scroll to the end when the component mounts
        const scrollContainer: TCriticalAnyType = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight
        }
    })

    return (
        <div className='flex items-start flex-col gap-y-1 overflow-auto duration-700' ref={scrollContainerRef}>
            <div className='w-24 h-24 mt-5'>
                <img src={dataUser.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
            </div>
            <span className='text-3xl font-semibold'>{dataUser.displayName}</span>
            <span>{dataUser.username}</span>
            <div className='flex flex-col gap-y-1 my-2 '>
                {messages.map((itemDirect, index) => {
                    const userOrMe = itemDirect.sender === 'me'
                    const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false

                    if (!prevMessage) {
                        return (
                            <div className='flex items-center gap-x-4' key={index}>
                                <DMenu type='socialInChat'>
                                    <div className='w-10 h-10'>
                                        <img
                                            src={userOrMe ? static_data_me.avatar.src : dataUser.avatar.src}
                                            className='w-full h-full rounded-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </DMenu>

                                <div className='w-full flex flex-col'>
                                    <DMenu type='socialInChat'>
                                        <div className='flex items-end gap-x-2'>
                                            <span className='font-semibold text-white'>
                                                {userOrMe ? static_data_me.displayName : dataUser.displayName}
                                            </span>
                                            <span className='text-xs'>--,--,----</span>
                                        </div>
                                    </DMenu>

                                    <DMenu type='message'>
                                        <span className='text-white text-sm'>{itemDirect.message}</span>
                                    </DMenu>
                                </div>
                            </div>
                        )
                    }
                    if (prevMessage) {
                        return (
                            <DMenu type='message' key={index}>
                                <p className='w-full text-white text-sm ml-14  '>{itemDirect.message}</p>
                            </DMenu>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DirectUser
