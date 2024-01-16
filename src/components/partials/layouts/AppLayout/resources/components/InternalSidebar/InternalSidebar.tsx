'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgHashtag } from 'react-icons/cg'
import { FaUserPlus } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { PiLockKeyFill } from 'react-icons/pi'
import { static_data_me } from '.'

import { static_data } from '../Sidebar/resources/constants/static-data'
const InternalSidebar = () => {
    const path = usePathname()
    const sidebarState = path.split('/')
    const dataSidebar = static_data.find((items) => items.id === sidebarState[2])

    return (
        <div className='w-60 h-screen    flex flex-col gap-2 bg-[#2b2d31] text-[#80848e] p-[8px]'>
            {sidebarState[2] === 'me' || sidebarState[2] === 'nitro' || sidebarState[2] === 'shop' ? (
                <div className='flex flex-col px-[4px] py-[6px] gap-2 font-semibold *:py-2'>
                    {static_data_me.map((itemsMe) => (
                        <Link
                            href={`/${itemsMe.href}`}
                            className={`px-[8px] duration-300 ${
                                path === `/${itemsMe.href}`
                                    ? 'bg-[#404249] text-white'
                                    : 'hover:bg-[#35373c] hover:text-[#dbdee1]'
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
                        className='flex items-center justify-between font-bold hover:bg-[#404249] px-[8px] py-[6px] rounded-md cursor-pointer'
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
            {/* <div className='flex grow flex-col px-[10px] '> */}
            <div className='flex items-center justify-between'>
                <span className='text-xs'>Direct Messages</span>
                <span>+</span>
            </div>
            {/* <div className='flex flex-col gap-y-2 max-h-[450px] overflow-auto'>

                </div> */}
            <div className='flex flex-col gap-y-2 grow p-1   overflow-auto'>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((items) => (
                    <div className='flex items-center justify-center gap-x-2' key={items}>
                        <div className='bg-[#313338] p-4 rounded-full ' />
                        <div className='flex-1 h-2/3 bg-[#313338]  rounded-md'></div>
                    </div>
                ))}
            </div>
            <div className='flex gap-2 '>
                <span>seeting</span>
            </div>
            {/* </div> */}
        </div>
    )
}

export default InternalSidebar
