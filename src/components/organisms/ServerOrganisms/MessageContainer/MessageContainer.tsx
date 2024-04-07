'use client'
import { type FC, useEffect, useRef, useState } from 'react'
import { HiHashtag } from 'react-icons/hi'

import { InputChat } from '@molecules/InputChat'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
import MessagesConvertor from '@core/utils/common/MessagesConvertor/MessagesConvertor'

import { type IMessageContainerProps } from './resources'
import { UsersDetail } from './resources/components'

const MessageContainer: FC<IMessageContainerProps> = ({ isShowMember, channelData }) => {
    const [textMessage, setTextMessage] = useState('')
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        // Scroll to the end when the component mounts
        const scrollContainer: TCriticalAnyType = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight
        }
    })

    return (
        <div className='grow flex overflow-y-auto  relative '>
            <div className='flex flex-col grow  '>
                <div className='flex flex-col gap-y-2  grow justify-end  overflow-hidden mx-4'>
                    <div
                        className='flex items-start flex-col gap-y-1 overflow-auto duration-700'
                        ref={scrollContainerRef}
                    >
                        <div className='w-full flex flex-col gap-1 mt-5'>
                            <div className='flex items-center justify-center bg-[#41434a] size-16 rounded-full'>
                                <HiHashtag size={45} className='text-white' />
                            </div>
                            <h1 className='text-xl font-bold text-white'> Welcome to #{channelData.name}!</h1>
                            <h3 className='text-sm mb-2'>This is the start of the #{channelData.name} channel.</h3>
                            {channelData?.messages && <hr className='w-full border-general-border ' />}
                        </div>
                        {channelData?.messages && <MessagesConvertor messages={channelData.messages} />}
                    </div>
                </div>
                <InputChat placeholder={channelData?.name} setTextMessage={setTextMessage} textMessage={textMessage} />
            </div>
            <UsersDetail channelData={channelData} isShowMember={isShowMember} />
        </div>
    )
}

export default MessageContainer
