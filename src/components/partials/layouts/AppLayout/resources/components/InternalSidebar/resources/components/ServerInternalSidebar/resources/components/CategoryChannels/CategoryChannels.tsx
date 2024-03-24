/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC } from 'react'
import { usePathname } from 'next/navigation'
import { FaPlus } from 'react-icons/fa6'
import { RiArrowDownSLine } from 'react-icons/ri'
import { ActionIcon } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import { DCollapse } from '@atoms/DCollapse'
import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_all_users } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type ICategoryChannelsProps } from './resources'
import { ChannelItem } from '../ChannelItem'

const CategoryChannels: FC<ICategoryChannelsProps> = ({ dataChannels }) => {
    const path = usePathname()
    const [openedCollapse, { toggle: toggleCollapse }] = useDisclosure(true)
    const matchesSm = useMediaQuery('(max-width: 576px)')

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col select-none'>
                <div className='flex items-center justify-between cursor-pointer ' onClick={toggleCollapse}>
                    <RiArrowDownSLine className={`duration-150 ${openedCollapse ? '' : '-rotate-90'}`} size={18} />
                    <span className='w-full text-xs truncate'>{dataChannels.category.name}</span>

                    <FaPlus size={12} />
                </div>
                <DCollapse opened={openedCollapse}>
                    <div className='flex flex-col gap-1'>
                        {dataChannels.channels.map((itemChannels, indexChannel) => (
                            <div key={indexChannel}>
                                <ChannelItem
                                    active={path === itemChannels.href}
                                    href={itemChannels.href}
                                    type={itemChannels.type}
                                    isPrivate={itemChannels.isPrivate}
                                    name={itemChannels.name}
                                />

                                <div className='flex flex-col gap-1'>
                                    {itemChannels.membersConnected &&
                                        itemChannels.membersConnected.map((itemsConnect, index) => {
                                            const userData: TCriticalAnyType = static_all_users.find(
                                                (itemUser) => itemUser.useId === itemsConnect
                                            )
                                            return (
                                                <div className='flex pl-6' key={index}>
                                                    <div className='w-full  '>
                                                        <DProfileMenu
                                                            position={!matchesSm ? 'left-start' : 'top-start'}
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
                                                </div>
                                            )
                                        })}
                                </div>
                            </div>
                        ))}
                    </div>
                </DCollapse>
            </div>
        </div>
    )
}

export default CategoryChannels
