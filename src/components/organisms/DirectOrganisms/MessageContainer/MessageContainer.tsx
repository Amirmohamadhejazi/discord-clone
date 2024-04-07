'use client'
import { type FC, useState } from 'react'
import { usePathname } from 'next/navigation'

import { InputChat } from '@molecules/InputChat'

import { static_all_users, static_data_direct } from '@core/constants/dummy-data/direct/static-data-direct'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { DirectUser, EmptyDirect, type IMessageContainerProps } from './resources'
import { UsersDetail } from './resources/components'

const MessageContainer: FC<IMessageContainerProps> = ({ isShowMember }) => {
    const [textMessage, setTextMessage] = useState('')
    const [, idDirect] = usePathname().split('/channels/me/')
    const DirectData: TCriticalAnyType =
        static_data_direct.find((items) => items.directId === idDirect) ||
        static_all_users.find((items) => items.useId === idDirect)
    return (
        <div className='grow flex overflow-y-auto  relative '>
            <div className='flex flex-col grow  '>
                <div className='flex flex-col gap-y-2  grow justify-end  overflow-hidden mx-4'>
                    {DirectData.messages ? (
                        <DirectUser dataDirect={DirectData} />
                    ) : (
                        <EmptyDirect dataUser={DirectData} />
                    )}
                </div>
                <InputChat placeholder={DirectData?.name} setTextMessage={setTextMessage} textMessage={textMessage} />
            </div>
            <UsersDetail isShowMember={isShowMember} />
        </div>
    )
}

export default MessageContainer
