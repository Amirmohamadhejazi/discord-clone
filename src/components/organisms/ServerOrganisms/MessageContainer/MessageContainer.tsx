'use client'
import { type FC, useState } from 'react'
import { HiMiniPlusCircle } from 'react-icons/hi2'
import { PiWarningCircle } from 'react-icons/pi'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { Textarea } from '@mantine/core'

import { ArrowSendMessage_icon, Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import MessagesConvertor from '@core/utils/common/MessagesConvertor/MessagesConvertor'

import { type IMessageContainerProps } from './resources'
import { UsersDetail } from './resources/components'

const MessageContainer: FC<IMessageContainerProps> = ({ isShowMember, channelData }) => {
    const [textMessage, setTextMessage] = useState('')

    return (
        <div className='grow flex overflow-y-auto  relative '>
            <div className='flex flex-col grow  '>
                <div className='flex flex-col gap-y-2 grow justify-end  overflow-hidden mx-4'>
                    {channelData.messages ? (
                        <MessagesConvertor messages={channelData.messages} />
                    ) : (
                        <div className=' flex items-center gap-x-1 text-xs my-2'>
                            <PiWarningCircle size={17} />
                            <span className='font-semibold'>this channel dont have a message! add message</span>
                        </div>
                    )}
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
            <UsersDetail channelData={channelData} isShowMember={isShowMember} />
        </div>
    )
}

export default MessageContainer
