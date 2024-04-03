/* eslint-disable @next/next/no-img-element */
'use client'
import React, { type FC, useEffect, useRef } from 'react'

// import { DProfileMenu } from '@atoms/DProfileMenu'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import MessagesConvertor from '@core/utils/common/MessagesConvertor/MessagesConvertor'

import { type IDirectUserProps } from './resources'

const DirectUser: FC<IDirectUserProps> = ({ dataDirect }) => {
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
            {messages ? <MessagesConvertor messages={messages} /> : 'ss'}
        </div>
    )
}

export default DirectUser
