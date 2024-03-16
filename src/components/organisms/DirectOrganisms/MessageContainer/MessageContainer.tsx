'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { HiMiniPlusCircle } from 'react-icons/hi2'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { Textarea } from '@mantine/core'

import { ArrowSendMessage_icon, Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import { static_all_users, static_data_direct } from '@core/constants/dummy-data/static-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { DirectUser, EmptyDirect } from './resources/components'

const MessageContainer = () => {
    const [textMessage, setTextMessage] = useState('')
    const [, idDirect] = usePathname().split('/channels/me/')
    const DirectData: TCriticalAnyType =
        static_data_direct.find((items) => items.directId === idDirect) ||
        static_all_users.find((items) => items.useId === idDirect)

    return (
        <div className='grow flex flex-col overflow-y-auto'>
            {/* <div className='p-2 flex-grow bg-red-200 overflow-y-auto'>
                <div className='bg-blue-200 h-[1000px] p-1'></div>
            </div> */}
            <div className='flex flex-col gap-y-2  grow justify-end  overflow-hidden mx-4'>
                {DirectData.messages ? <DirectUser dataDirect={DirectData} /> : <EmptyDirect dataUser={DirectData} />}
                {/*  */}
            </div>

            <div className='flex-shrink-0 bg-[#383a40] p-2 mx-4 mb-4 rounded-md'>
                <div className='flex justify-between items-start gap-x-2 min-h-[35px]  max-h-[150px] md:max-h-[240px] overflow-y-auto'>
                    <div className='sticky top-0 flex pt-[2px]'>
                        <HiMiniPlusCircle className='text-general-gray-900  hover:text-general-gray-950 cursor-pointer text-3xl' />
                    </div>
                    <form className='w-full'>
                        <Textarea
                            classNames={{
                                root: 'w-full ',
                                input: 'bg-transparent w-full focus:outline-none text-white resize-none placeholder:text-sm placeholder:truncate'
                            }}
                            value={textMessage}
                            onChange={(e) => setTextMessage(e.target.value)}
                            variant='unstyled'
                            autosize
                            // maxRows={1}
                            placeholder={`Message to @${DirectData?.name}`}
                        />
                    </form>
                    <div className='hidden md:flex sticky top-0 items-center gap-x-3 pt-[2px]'>
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
                    <div className='sticky md:hidden top-0  flex items-center gap-x-3 pt-[2px]'>
                        <div className='flex items-center gap-x-2'>
                            <RiEmojiStickerFill className='text-2xl hover:text-general-gray-950 duration-300 cursor-pointer' />
                            <div className='h-6 w-[1px] bg-general-border rounded-md'> </div>
                            <ArrowSendMessage_icon className='hover:text-general-blue duration-200 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='shrink-0 p-2 w-full h-20 bg-cyan-200'></div> */}
        </div>
    )
}

export default MessageContainer
