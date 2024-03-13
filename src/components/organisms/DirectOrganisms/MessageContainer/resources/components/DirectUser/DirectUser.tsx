/* eslint-disable @next/next/no-img-element */
'use client'
import React, { type FC, useEffect, useRef } from 'react'

import { DMenu } from '@atoms/DMenu'
import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_all_users } from '@core/constants/dummy-data'
// import { DProfileMenu } from '@atoms/DProfileMenu'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { handlerMessage } from '@core/utils/common/handlerMessage'

import { type IDirectUserProps } from './resources'

const DirectUser: FC<IDirectUserProps> = ({ dataDirect }) => {
    // console.log(dataDirect)
    const { name, username, avatar, messages } = dataDirect
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
                <img src={avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
            </div>
            <span className='text-3xl font-semibold'>{name}</span>
            <span>{username}</span>
            <div className='flex flex-col gap-y-1 my-2 '>
                {messages.map((itemDirect, index) => {
                    const userData: TCriticalAnyType = static_all_users.find(
                        (items) => items.useId === itemDirect.sender
                    )

                    const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false
                    const nextMessage = messages[index + 1]?.sender === messages[index].sender || false

                    if (!prevMessage) {
                        return (
                            <div className={`flex items-start gap-x-4 ${!nextMessage ? 'mb-2 ' : ''} `} key={index}>
                                <DProfileMenu dataProfile={userData}>
                                    <div className='w-10 h-10 mt-2'>
                                        <img
                                            src={userData?.avatar.src}
                                            className='w-full h-full rounded-full object-cover'
                                            alt=''
                                        />
                                    </div>
                                </DProfileMenu>

                                <div className='w-full flex flex-col'>
                                    <DMenu type='socialInChat'>
                                        <div className='flex items-center gap-x-2'>
                                            <span className='font-semibold text-white'>{userData?.displayName}</span>
                                            <span className='text-[10px] font-medium'>04/13/2023</span>
                                        </div>
                                    </DMenu>

                                    <DMenu type='messageInChannel'>
                                        <div>{handlerMessage(itemDirect.message)}</div>
                                    </DMenu>
                                </div>
                            </div>
                        )
                    }
                    if (prevMessage) {
                        return (
                            <DMenu type='messageInChannel' key={index}>
                                <div className={`flex ml-14 ${nextMessage ? '' : 'mb-2 '}`}>
                                    <div>{handlerMessage(itemDirect.message)}</div>
                                </div>
                            </DMenu>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default DirectUser
