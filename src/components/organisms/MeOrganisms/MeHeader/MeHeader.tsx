'use client'
import { type FC } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { AddDm_icon, Inbox_icon, UserAvatar_icon } from '@molecules/icons'
import Help_icon from '@molecules/icons/Help_icon'

import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'

import { type IMeHeaderProps, static_data } from './resources'

const MeHeader: FC<IMeHeaderProps> = ({ tabMenu, setTabMenu }) => {
    const dispatch = useDispatch()

    return (
        <div className='w-full flex items-center justify-between px-2 min-h-14 flex-wrap shadow-md flex-shrink-0'>
            <div className='flex items-center flex-wrap gap-x-2 my-2 sm:my-0'>
                <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
                <div className='flex items-center gap-x-1'>
                    <UserAvatar_icon size='22' />
                    <span className='text-white font-medium text-sm'>friends</span>
                </div>
                <div className='bg-general-border w-0.5 h-full'></div>
                <div className='flex items-center gap-x-3 flex-wrap text-sm'>
                    {static_data.map((items) => (
                        <div
                            className={`rounded-md px-2 py-0.5 duration-300 cursor-pointer ${
                                tabMenu === items.id
                                    ? 'bg-general-gray-600 text-general-gray-950'
                                    : 'hover:bg-general-gray-400 text-'
                            }`}
                            onClick={() => setTabMenu(items.id)}
                            key={items.id}
                        >
                            <span>{items.name}</span>
                        </div>
                    ))}

                    <ActionIcon classNames={{ root: 'w-auto' }} onClick={() => setTabMenu(5)}>
                        <div
                            className={`${
                                tabMenu === 5 ? ' text-green-500' : 'bg-green-700 text-white'
                            } rounded-md px-2 py-1 text-xs`}
                        >
                            <span>Add Friend</span>
                        </div>
                    </ActionIcon>
                </div>
            </div>
            <div className=' justify-end hidden sm:flex gap-3 items-center divide-x-1'>
                <div className='hover:text-white cursor-pointer duration-300'>
                    <AddDm_icon />
                </div>
                <div className='hover:text-white cursor-pointer duration-300'>
                    <Inbox_icon />
                </div>
                <div className='hover:text-white cursor-pointer duration-300'>
                    <Help_icon />
                </div>
            </div>
        </div>
    )
}

export default MeHeader
