/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HiMiniPlus } from 'react-icons/hi2'
import { IoHeadset, IoMic, IoSettingsSharp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import { static_all_users } from '@core/constants/dummy-data'
import { static_data_direct } from '@core/constants/dummy-data/static-data'
import { closeMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { onlineStatus } from '@public/images'

import { data_static } from './resources'
import { Directs } from './resources/components/Directs'

const HomeInternalSidebar = () => {
    const dispatch = useDispatch()
    const path = usePathname()
    const data_profile_me: TCriticalAnyType = static_all_users.find((items) => items.me)
    return (
        <div className='h-full flex flex-col'>
            <div className='w-full flex items-center justify-center h-12 p-3 shadow-md'>
                <div className='bg-general-gray w-full  flex items-center rounded-md pl-1 cursor-pointer h-7'>
                    <span className=' text-general-gray-800 text-xs'>Find or start a conversation</span>
                </div>
            </div>
            <div className='flex flex-col p-3'>
                {data_static.map((itemsMenu, indexMenu) => (
                    <Link
                        href={itemsMenu.href}
                        className={`duration-300 flex items-center gap-x-2 p-2 rounded-md ${
                            path === itemsMenu.href && 'bg-general-gray-500 text-white'
                        }`}
                        key={indexMenu}
                        onClick={() => path === `${itemsMenu.href}` && dispatch(closeMenu())}
                    >
                        {itemsMenu.icon}
                        <span className='text-sm'>{itemsMenu.name}</span>
                    </Link>
                ))}
            </div>

            {/* directs */}
            <div className='flex grow overflow-y-auto  min-h-24'>
                <div className='w-full flex flex-col'>
                    <div className='flex items-center justify-between px-[8px]'>
                        <span className='text-xs'>Direct Messages</span>
                        <HiMiniPlus className='text-lg' />
                    </div>

                    <div className='flex flex-col gap-y-2 grow overflow-auto px-[12px] min-h-24'>
                        <>
                            {static_data_direct.length > 0 ? (
                                <div className='flex flex-col gap-y-1'>
                                    {static_data_direct.map((itemDirects: TCriticalAnyType) => (
                                        <Directs dataDirect={itemDirects} key={itemDirects.directId} />
                                    ))}
                                </div>
                            ) : (
                                [0, 1, 2].map((items, index) => (
                                    <div className='flex items-center justify-center gap-x-2' key={index}>
                                        <div className=' bg-general-gray-100 p-4 rounded-full ' />
                                        <div className='flex-1 h-2/3  bg-general-gray-100  rounded-md'>
                                            {index + 23 + items}
                                        </div>
                                    </div>
                                ))
                            )}
                        </>
                    </div>
                </div>
            </div>
            {/* me ac */}
            <div className='flex bg-general-gray-300 group'>
                <div className='w-full flex items-center  px-2 h-14'>
                    <div className='w-9 h-9 relative'>
                        <img
                            src={data_profile_me.avatar.src}
                            className='w-full h-full rounded-full object-cover'
                            alt=''
                        />
                        <div className='absolute -right-1 -bottom-0   '>
                            <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                <img src={onlineStatus.src} className='w-full h-full mb-1 object-cover' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col grow justify-center text-sm pl-2'>
                        <span className='truncate'>{data_profile_me.displayName}</span>
                        <span className='truncate block group-hover:hidden'>online</span>
                        <span className='truncate hidden group-hover:block  '>{data_profile_me.username}</span>
                    </div>
                    <div className='flex items-center justify-center gap-1 text-xl gap-x-2 *:cursor-pointer  '>
                        <IoMic className='hover:text-white duration-300 ' />
                        <IoHeadset className='hover:text-white duration-300 ' />
                        <IoSettingsSharp className='hover:text-white duration-300 ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInternalSidebar
