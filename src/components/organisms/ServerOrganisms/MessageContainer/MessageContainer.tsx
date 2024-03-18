/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { type FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import { HiMiniPlusCircle } from 'react-icons/hi2'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { Textarea } from '@mantine/core'

import { ArrowSendMessage_icon, Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import { static_data_servers } from '@core/constants/dummy-data/static-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { findFirstTextChannel } from '@core/utils/common/findFirstTextChannel/findFirstTextChannel'

import { DirectUser, EmptyDirect, type IMessageContainerProps } from './resources'
import { UsersDetail } from './resources/components'

const MessageContainer: FC<IMessageContainerProps> = ({ isShowMember, channelData }) => {
    const [textMessage, setTextMessage] = useState('')
    console.log(channelData)

    return (
        <div className='grow flex overflow-y-auto  relative '>
            <div className='flex flex-col grow  '>
                <div className='flex flex-col gap-y-2  grow justify-end  overflow-hidden mx-4'>
                    {/* {DirectData.messages ? (
                        <DirectUser dataDirect={DirectData} />
                    ) : (
                        <EmptyDirect dataUser={DirectData} />
                    )} */}
                    {/* {firstTextChannel.id} */}
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
                                placeholder={`Message to ${channelData.name}`}
                            />
                        </form>
                        <div className='hidden md:flex flex-shrink-0 sticky top-0 items-center gap-x-3 pt-[2px]'>
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
            </div>
            <UsersDetail isShowMember={isShowMember} />
        </div>
    )
}

export default MessageContainer
