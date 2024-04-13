/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { IoCloseSharp, IoWifiOutline } from 'react-icons/io5'
import { IoHeadset, IoMic, IoSettingsSharp } from 'react-icons/io5'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'
import { useClickOutside } from '@mantine/hooks'

import { Call_icon, NoiseSuppression_icon } from '@molecules/icons'

import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_data_servers, static_data_users_servers } from '@core/constants/dummy-data'
import { openSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { onlineStatus } from '@public/images'

import { CategoryChannels, ChannelItem } from './resources/components'
import { serverMenuData } from './resources/constants/data'

const ServerInternalSidebar = () => {
    const path = usePathname()
    const dispatch = useDispatch()
    const [menuServer, setMenuServer] = useState(false)
    const refMenu = useClickOutside(() => setMenuServer(false))

    // const matchesSm = useMediaQuery('(max-width: 576px)')
    const data_profile_me: TCriticalAnyType = static_data_users_servers.find((items) => items.me)

    const [, , idServer] = path.split('/')

    const dataSidebar = static_data_servers.find((itemServers) => itemServers.id === idServer)
    const voiceConnected = dataSidebar?.channelsContent
        .map((items: TCriticalAnyType) => items.channels)
        .flat(Infinity)
        .filter((itemsAll) => itemsAll.membersConnected)
        .find((itemConnected) => itemConnected.membersConnected.includes(data_profile_me.useId))
    return (
        <div className='h-full flex flex-col  '>
            <div className='flex flex-col relative select-none ' ref={refMenu}>
                <div
                    className='w-full flex items-center justify-between  bg-general-gray-50 h-12 p-3 shadow-md text-white z-10 cursor-pointer'
                    onClick={() => setMenuServer((prev) => !prev)}
                >
                    <span className='text-sm font-semibold'>{dataSidebar?.serverName}</span>

                    {menuServer ? <IoCloseSharp size={19} /> : <RiArrowDownSLine size={21} />}
                </div>
                <div
                    className={`absolute left-1/2 transform -translate-x-1/2 p-2 w-full z-[2] duration-150 ${
                        menuServer ? 'top-12 visible opacity-100' : '-top-full invisible opacity-0'
                    }`}
                >
                    <div className='flex flex-col gap-y-1 bg-[#111214] rounded-md p-2'>
                        {serverMenuData.map((items, index) => {
                            return (
                                <div className='w-full flex flex-col' key={index}>
                                    <ActionIcon
                                        className={`w-auto flex items-center justify-between px-1 py-1.5 rounded-sm hover:text-white hover:bg-general-blue cursor-pointer`}
                                        style={{
                                            color: items.color ? items.color : ''
                                        }}
                                    >
                                        <span className='text-xs'>{items.name}</span>
                                        {items.icon}
                                    </ActionIcon>
                                    {items.hr && <hr className='border-general-border' />}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='grow  overflow-y-auto bg-general-gray-50'>
                {dataSidebar?.banner && <img src={dataSidebar?.banner} className='w-full object-cover' alt='banner' />}
                <div className='flex flex-col gap-2 p-3'>
                    {dataSidebar?.channelsContent.map((items, index) =>
                        items.category ? (
                            <CategoryChannels dataChannels={items} key={index} />
                        ) : (
                            items.channels.map((itemsChannels, indexChannels) => (
                                <div key={indexChannels}>
                                    <ChannelItem
                                        active={path === (itemsChannels as TCriticalAnyType).href}
                                        href={(itemsChannels as TCriticalAnyType).href}
                                        name={itemsChannels.name}
                                        type={itemsChannels.type}
                                        key={indexChannels}
                                        isPrivate={itemsChannels.isPrivate}
                                    />

                                    <div className='flex flex-col gap-1'>
                                        {(itemsChannels as TCriticalAnyType).membersConnected &&
                                            (itemsChannels as TCriticalAnyType).membersConnected.map(
                                                (itemsConnect: TCriticalAnyType, index: number) => {
                                                    const userData: TCriticalAnyType = static_data_users_servers.find(
                                                        (itemUser) => itemUser.useId === itemsConnect
                                                    )
                                                    return (
                                                        <div className='flex pl-6' key={index}>
                                                            <div className='w-full  '>
                                                                <DProfileMenu dataProfile={userData}>
                                                                    <ActionIcon className='w-full h-auto justify-start hover:bg-general-gray-500 duration-300'>
                                                                        <div className='flex items-center gap-x-2 p-1 w-full'>
                                                                            <img
                                                                                src={userData?.avatar.src}
                                                                                className='w-6 h-6 rounded-full'
                                                                                alt=''
                                                                            />
                                                                            <span className='text-sm truncate'>
                                                                                {userData?.name}
                                                                            </span>
                                                                        </div>
                                                                    </ActionIcon>
                                                                </DProfileMenu>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            )}
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            </div>
            {/* me ac */}
            <div className=' flex flex-col gap-y-1 py-2 bg-general-gray-300'>
                {voiceConnected && (
                    <>
                        <div className='flex items-center justify-between   px-2'>
                            <div className='grow  flex flex-col truncate'>
                                <div className='flex items-center gap-x-1'>
                                    <IoWifiOutline className='text-green-600 rotate-45' size={23} />
                                    <span className='text-xs font-bold text-green-600'>Voice Connected</span>
                                </div>
                                <span className=' overflow-hidden truncate text-xs'>
                                    {voiceConnected.name} / {dataSidebar?.serverName}
                                </span>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <NoiseSuppression_icon size='18' />
                                <Call_icon size={'22'} />
                            </div>
                        </div>
                        <hr className='border-general-border' />
                    </>
                )}

                <div className='flex group'>
                    <div className='w-full flex items-center  px-2 '>
                        <div className='w-8 h-8 relative'>
                            <img
                                src={data_profile_me.avatar.src}
                                className='w-full h-full rounded-full object-cover'
                                alt='avatar'
                            />
                            <div className='absolute -right-1 -bottom-0   '>
                                <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                    <img src={onlineStatus.src} className='w-full h-full mb-1 object-cover' alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col grow justify-center text-xs   pl-2'>
                            <span className='truncate font-semibold'>{data_profile_me.name}</span>
                            <span className='truncate block group-hover:hidden'>online</span>
                            <span className='truncate hidden group-hover:block  '>{data_profile_me.username}</span>
                        </div>
                        <div className='flex items-center justify-center gap-1 text-xl gap-x-2 *:cursor-pointer  '>
                            <IoMic className='hover:text-white duration-300 ' />
                            <IoHeadset className='hover:text-white duration-300 ' />
                            <IoSettingsSharp
                                className='hover:text-white duration-300 '
                                onClick={() => dispatch(openSettingPage())}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServerInternalSidebar
