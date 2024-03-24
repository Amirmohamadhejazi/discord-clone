/* eslint-disable @next/next/no-img-element */
import { usePathname } from 'next/navigation'
import { IoHeadset, IoMic, IoSettingsSharp } from 'react-icons/io5'
import { RiArrowDownSLine } from 'react-icons/ri'
import { ActionIcon } from '@mantine/core'

// import { useMediaQuery } from '@mantine/hooks'
import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_all_users, static_data_servers } from '@core/constants/dummy-data/static-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { onlineStatus } from '@public/images'

import { CategoryChannels, ChannelItem } from './resources/components'

const ServerInternalSidebar = () => {
    const path = usePathname()
    // const matchesSm = useMediaQuery('(max-width: 576px)')
    const data_profile_me: TCriticalAnyType = static_all_users.find((items) => items.me)

    const [, , idServer] = path.split('/')

    const dataSidebar = static_data_servers.find((itemServers) => itemServers.id === idServer)
    return (
        <div className='h-full flex flex-col '>
            <div className='w-full flex items-center justify-between sticky  select-none bg-general-gray-50 top-0 h-12 p-3 shadow-md text-white z-10'>
                <span className='text-sm font-semibold'>{dataSidebar?.serverName}</span>

                <RiArrowDownSLine size={21} />
            </div>
            <div className='grow  overflow-y-auto'>
                {dataSidebar?.banner && <img src={dataSidebar?.banner} alt='banner' />}
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
                                                    const userData: TCriticalAnyType = static_all_users.find(
                                                        (itemUser) => itemUser.useId === itemsConnect
                                                    )
                                                    return (
                                                        <div className='flex pl-6' key={index}>
                                                            <div className='w-full  '>
                                                                <DProfileMenu
                                                                    // position={!matchesSm ? 'left-start' : ''}
                                                                    dataProfile={userData}
                                                                >
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
                                                            {/*  */}
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
            <div className='flex bg-general-gray-300 group'>
                <div className='w-full flex items-center  px-2 h-14'>
                    <div className='w-9 h-9 relative'>
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
                    <div className='flex flex-col grow justify-center text-sm pl-2'>
                        <span className='truncate'>{data_profile_me.name}</span>
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

export default ServerInternalSidebar
