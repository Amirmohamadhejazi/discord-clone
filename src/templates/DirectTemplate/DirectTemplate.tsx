/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { HiMiniBars3, HiMiniPlusCircle } from 'react-icons/hi2'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { ActionIcon, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { InternalSidebar, Sidebar } from '@partials/layouts/AppLayout/resources'

import { ArrowSendMessage_icon, Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import { DModal } from '@atoms/DModal'

import { static_data_directs, static_data_social } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

import { DirectUser, EmptyDirect } from './resources/components'

const DirectTemplate = ({ userId }: { userId: string }) => {
    const dataUser = static_data_social.filter((items) => items.useId === userId)[0]
    const [openedDrawer, { open: openDrawer, close: closeDrawer }] = useDisclosure(false)

    const dataDirect = static_data_directs.filter((items) => items.personId === userId)[0]
    const [textMessage, setTextMessage] = useState('')

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
                setTextMessage('')
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
        setTextMessage('')
    }
    return (
        <div className='w-full h-full flex flex-col gap-2 p-1 '>
            <div className='min-h-[48px] flex items-center gap-x-2  shadow-lg px-[12px]'>
                <div className='md:hidden' onClick={openDrawer}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
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
            <div className='flex flex-col gap-y-2  grow justify-end  overflow-hidden mx-4'>
                {dataDirect?.messages.length > 0 ? (
                    <DirectUser dataDirect={dataDirect} dataUser={dataUser} />
                ) : (
                    <EmptyDirect dataUser={dataUser} />
                )}
            </div>
            <div className='bg-[#383a40] p-2 mx-4 mb-4 rounded-md'>
                <div className='flex justify-between items-start gap-x-2 min-h-[35px]  max-h-[150px] md:max-h-[240px] overflow-y-auto'>
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
                            onChange={(e) => setTextMessage(e.target.value)}
                            variant='unstyled'
                            autosize
                            // maxRows={1}
                            placeholder={`Message to @${dataUser.username}`}
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
            <DModal
                className='md:hidden'
                onClose={closeDrawer}
                opened={openedDrawer}
                transitionProps={{ duration: 0 }}
                fullScreen={true}
            >
                <div className='flex  h-screen text-general-gray-800'>
                    {/* Sidebar */}
                    <Sidebar />
                    {/* Main Content */}
                    <div className='flex-auto flex '>
                        <InternalSidebar fullWidth />
                    </div>
                </div>
            </DModal>
        </div>
    )
}

export default DirectTemplate
