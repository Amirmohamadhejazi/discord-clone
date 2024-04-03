/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MdDelete } from 'react-icons/md'
import { RiArrowGoBackFill } from 'react-icons/ri'

import { AddReaction_icon, Edit_icon, Id_icon } from '@molecules/icons'

import { DMenu } from '@atoms/DMenu'
import { DProfileMenu } from '@atoms/DProfileMenu'
import { ImgMessage } from '@atoms/ImgMessage'

// import { static_all_users } from '@core/constants/dummy-data'
import { static_all_users, static_data_users_servers } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { handlerMessage } from '@core/utils/common/handlerMessage'

import { type IMessagesProps } from './resources/types/types'

const MessagesConvertor: FC<IMessagesProps> = ({ messages }) => {
    const path = usePathname()
    const [shiftPressed, setShiftPressed] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event: TCriticalAnyType) => {
            if (event.key === 'Shift') {
                setShiftPressed(true)
            }
        }

        const handleKeyUp = (event: TCriticalAnyType) => {
            if (event.key === 'Shift') {
                setShiftPressed(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }
    }, [])
    console.log(messages)

    return (
        <div className='w-full flex flex-col gap-y-1 my-2 '>
            {messages.map((itemDirect, index) => {
                const regexHome = /^\/channels\/me\/[\w\d]+$/
                const userData: TCriticalAnyType = (
                    regexHome.test(path) ? static_all_users : static_data_users_servers
                ).find((items) => items.useId === itemDirect.sender)

                const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false
                const nextMessage = messages[index + 1]?.sender === messages[index].sender || false

                if (!prevMessage) {
                    return (
                        <div
                            className={`flex items-start gap-x-4 ${
                                !nextMessage ? 'mb-2 ' : ''
                            } relative group bg-black bg-opacity-0 hover:bg-opacity-5 `}
                            key={index}
                        >
                            <div className='bg-black rounded-md p-1 absolute -top-4 right-4 hidden select-none group-hover:sm:flex items-center justify-center gap-x-1.5 '>
                                {shiftPressed && <Id_icon className='cursor-pointer hover:text-white' />}
                                <Edit_icon className='cursor-pointer hover:text-white' />
                                <AddReaction_icon className='cursor-pointer hover:text-white' />

                                {shiftPressed && (
                                    <>
                                        <RiArrowGoBackFill size={16} className='cursor-pointer hover:text-white' />
                                        <MdDelete
                                            className='cursor-pointer text-red-600 '
                                            size={20}
                                            onClick={() => console.log(index)}
                                        />
                                    </>
                                )}
                            </div>
                            <DProfileMenu dataProfile={userData}>
                                <div className='w-10 h-10 mt-2 '>
                                    <img
                                        src={userData?.avatar.src}
                                        className='w-full h-full rounded-full object-cover'
                                        alt=''
                                    />
                                </div>
                            </DProfileMenu>
                            <div className='w-full flex flex-col '>
                                <DMenu type='socialInChat'>
                                    <div className='flex items-center gap-x-2'>
                                        <span className=' font-semibold text-white'>{userData?.name}</span>
                                        <span className='text-[10px] font-medium select-none'>04/13/2023</span>
                                    </div>
                                </DMenu>
                                {/* when single message */}
                                <DMenu type='messageInChannel'>
                                    <div className='flex flex-col gap-1 '>
                                        {itemDirect.img && <ImgMessage img={itemDirect.img.src} />}

                                        {handlerMessage(itemDirect.message)}
                                    </div>
                                </DMenu>
                            </div>
                        </div>
                    )
                }
                if (prevMessage) {
                    /* when another message */
                    return (
                        <DMenu type='messageInChannel' key={index}>
                            <div
                                className={`flex pl-14 ${
                                    nextMessage ? '' : 'mb-2 '
                                } relative group bg-black bg-opacity-0 hover:bg-opacity-5`}
                            >
                                <div className='bg-black rounded-md p-1 absolute select-none -top-4 right-4 hidden group-hover:sm:flex items-center justify-center gap-x-1.5'>
                                    {shiftPressed && <Id_icon className='cursor-pointer hover:text-white' />}
                                    <Edit_icon className='cursor-pointer hover:text-white' />
                                    <AddReaction_icon className='cursor-pointer hover:text-white' />

                                    {shiftPressed && (
                                        <>
                                            <RiArrowGoBackFill size={16} className='cursor-pointer hover:text-white' />
                                            <MdDelete
                                                className='cursor-pointer text-red-600'
                                                size={20}
                                                onClick={() => console.log(index)}
                                            />
                                        </>
                                    )}
                                </div>
                                <div className='flex flex-col gap-1 '>
                                    {itemDirect.img && <ImgMessage img={itemDirect.img.src} />}

                                    {handlerMessage(itemDirect.message)}
                                </div>
                                <div className={`absolute hidden group-hover:block left-2 top-0 select-none`}>
                                    <span className='text-[8px] font-medium'>04/13/2023</span>
                                </div>
                            </div>
                        </DMenu>
                    )
                }
            })}
        </div>
    )
}

export default MessagesConvertor
