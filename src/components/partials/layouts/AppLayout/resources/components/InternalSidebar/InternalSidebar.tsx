/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgHashtag } from 'react-icons/cg'
import { FaUserPlus } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { IoHeadset, IoMic, IoSettingsSharp } from 'react-icons/io5'
import { PiLockKeyFill } from 'react-icons/pi'
import { static_data_me } from '.'

import { avatarAmirmohamad, onlineStatus } from '@public/images'

import { static_data } from '../Sidebar/resources/constants/static-data'
const InternalSidebar = () => {
    const path = usePathname()
    const sidebarState = path.split('/')
    const dataSidebar = static_data.find((items) => items.id === sidebarState[2])
    const [divHeight, setDivHeight] = useState(0)

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const height = document.getElementById('heightOverflow')?.offsetHeight || 0
            setDivHeight(height)
        }
    }, [])

    return (
        <div className='w-60 h-full flex flex-col gap-2  bg-general-gray-50 text-general-gray-700 '>
            <div className='min-h-[48px] shadow-lg p-[8px]'>
                <div className='bg-general-gray w-full h-full flex items-center rounded-md pl-1'>
                    <span className=' text-general-gray-800 text-xs'>Find or start a conversation</span>
                </div>
            </div>
            <div className='px-[8px] pt-[8px]'>
                {sidebarState[2] === 'me' || sidebarState[2] === 'nitro' || sidebarState[2] === 'shop' ? (
                    <div className='flex flex-col   gap-2 font-semibold *:py-2'>
                        {static_data_me.map((itemsMe) => (
                            <Link
                                href={`/${itemsMe.href}`}
                                className={`px-[8px] duration-300 ${
                                    path === `/${itemsMe.href}`
                                        ? ' bg-general-gray-500 text-white'
                                        : 'hover:bg-general-gray-200 hover:text-general-gray-950'
                                }   rounded-md flex grow`}
                                key={itemsMe.id}
                            >
                                <div className='flex items-center gap-3 '>
                                    {itemsMe.icon}
                                    <span>{itemsMe.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : dataSidebar?.channels ? (
                    dataSidebar?.channels.map((itemsChannel) => (
                        <Link
                            key={itemsChannel.href}
                            href={`/channels/${sidebarState[2]}/${itemsChannel.href}`}
                            className='flex items-center justify-between font-bold hover:bg-general-gray-500 px-[8px] py-[6px] rounded-md cursor-pointer'
                        >
                            <div className='flex items-center gap-1 '>
                                <div className='relative '>
                                    <CgHashtag className='text-2xl' />
                                    <span className='top-0 right-0 absolute z-40'>
                                        <PiLockKeyFill className='text-xs  ' />
                                    </span>
                                </div>
                                <span>{itemsChannel.label}</span>
                            </div>
                            <div className='flex gap-1 '>
                                <FaUserPlus className='hover:text-white' />
                                <IoMdSettings className='hover:text-white' />
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className='w-full h-full flex items-center justify-center'>
                        <h1 className='text-lg font-bold'>Channel Id is Incorrect!</h1>
                    </div>
                )}
            </div>
            <div className='flex items-center justify-between px-[8px]'>
                <span className='text-xs'>Direct Messages</span>
                <span>+</span>
            </div>
            <div
                className='flex flex-col gap-y-2 grow   overflow-auto px-[12px]'
                id='heightOverflow'
                style={{ maxHeight: `${divHeight !== 0 && `${divHeight}px`}` }}
            >
                {divHeight !== 0 &&
                    [0, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(
                        (items, index) => (
                            <div className='flex items-center justify-center gap-x-2' key={index}>
                                <div className=' bg-general-gray-100 p-4 rounded-full ' />
                                <div className='flex-1 h-2/3  bg-general-gray-100  rounded-md'>
                                    {index + 23 + items}
                                </div>
                            </div>
                        )
                    )}
            </div>
            <div className='w-full flex justify-between bg-general-gray-300 p-[8px] group  '>
                <div className='w-9 h-9 relative'>
                    <img src={avatarAmirmohamad.src} className='w-full h-full rounded-full object-cover' alt='' />
                    <div className='absolute -right-1 -bottom-0   '>
                        <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                            <img src={onlineStatus.src} className='w-full h-full mb-1 object-cover' alt='' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col grow justify-center text-sm pl-2'>
                    <span className='truncate'>Amirmohamad</span>
                    <span className='truncate block group-hover:hidden'>online</span>
                    <span className='truncate hidden group-hover:block  '>amirmohamad</span>
                </div>
                <div className='flex items-center justify-center gap-1 text-xl gap-x-2 *:cursor-pointer  '>
                    <IoMic className='hover:text-white duration-300 ' />
                    <IoHeadset className='hover:text-white duration-300 ' />
                    <IoSettingsSharp className='hover:text-white duration-300 ' />
                </div>
            </div>
        </div>
    )
}

export default InternalSidebar
