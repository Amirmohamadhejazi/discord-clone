/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { HiMiniPlusCircle } from 'react-icons/hi2'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { Textarea } from '@mantine/core'

import { Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import { static_data_directs, static_data_social } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

import { DirectUser, EmptyDirect } from './resources/components'

const DirectTemplate = ({ userId }: { userId: string }) => {
    const dataUser = static_data_social.filter((items) => items.useId === userId)[0]

    const dataDirect = static_data_directs.filter((items) => items.personId === userId)[0]
    const [textMessage, setTestMessage] = useState('')

    if (dataUser === undefined) {
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <h1 className='text-lg font-bold'>Dm Not Found!</h1>
            </div>
        )
    }
    const formHandler = (e: TCriticalAnyType) => {
        e.preventDefault()
        if (dataDirect) {
            if (textMessage.trim()) {
                dataDirect.messages.push({
                    sender: 'me',
                    message: textMessage,
                    messageId: `${dataDirect.messages.length + 1}`,
                    date: ''
                })
                setTestMessage('')
            }
        } else {
            static_data_directs.push({
                lastUpdateData: '',
                messages: [
                    {
                        sender: 'me',
                        message: textMessage,
                        messageId: `1`,
                        date: ''
                    }
                ],
                personId: userId
            })
        }
        setTestMessage('')
    }
    return (
        <div className='w-full h-full flex flex-col gap-2 p-1 '>
            <div className='min-h-[48px] flex items-center gap-x-2  shadow-lg px-[12px]'>
                <div className='w-7 h-7 relative'>
                    <img src={dataUser.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                    <div className='absolute -right-1 -bottom-0   '>
                        <div className='w-3 h-3  bg-general-gray-100 flex items-center justify-center rounded-full'>
                            <img
                                src={statusHandler(dataUser.status)}
                                className='w-full h-full mb-1 object-cover'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <span className='text-white font-semibold'>{dataUser.displayName}</span>
            </div>
            <div className='flex flex-col gap-y-2 grow justify-end  overflow-hidden mx-4'>
                {dataDirect?.messages.length > 0 ? (
                    <DirectUser dataDirect={dataDirect} dataUser={dataUser} />
                ) : (
                    <EmptyDirect dataUser={dataUser} />
                )}
            </div>
            <div className='bg-[#383a40] p-2 mx-4 mb-4 rounded-md'>
                <div className='flex justify-between items-start gap-x-2 min-h-[35px] max-h-[240px] overflow-y-auto'>
                    <div className='sticky top-0 flex pt-[2px]'>
                        <HiMiniPlusCircle className='text-general-gray-900  hover:text-general-gray-950 cursor-pointer text-3xl' />
                    </div>
                    <form className='w-full' onSubmit={formHandler}>
                        <Textarea
                            classNames={{
                                root: 'w-full ',
                                input: 'bg-transparent w-full focus:outline-none text-white resize-none placeholder:text-sm placeholder:truncate'
                            }}
                            value={textMessage}
                            onChange={(e) => setTestMessage(e.target.value)}
                            variant='unstyled'
                            autosize
                            // maxRows={1}
                            placeholder={`Message to @${dataUser.username}`}
                        />
                    </form>
                    <div className='sticky top-0  flex items-center gap-x-3 pt-[2px]'>
                        <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                            <Gift_icon />
                        </div>
                        <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                            <Gif_icon />
                        </div>
                        <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                            <Sticker_icon />
                        </div>
                        <RiEmojiStickerFill className='text-2xl hover:text-general-gray-950 duration-300 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DirectTemplate
