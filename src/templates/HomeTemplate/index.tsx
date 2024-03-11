'use client'
import React, { useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { FriendsActivity, FriendsList } from '@organisms/HomeOrganisms'

import { AddDm_icon, Inbox_icon } from '@molecules/icons'
import Help_icon from '@molecules/icons/Help_icon'
import { WumpusNotify } from '@molecules/WumpusNotify'

import { static_data_menu, static_data_social } from '@core/constants/dummy-data'
import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
const HomeTemplate = () => {
    const dispatch = useDispatch()
    const [tab, setTab] = useState<number | null>(1)

    const onlineMembers = static_data_social.filter((itemsMember) => itemsMember.status !== 'offline')
    const dataMembersHandler = (): TCriticalAnyType => {
        switch (tab) {
            case 1:
                return onlineMembers
            case 2:
                return static_data_social
            case 3:
                return []
            case 4:
                return []
            case 5:
                return []
        }
    }
    const dataMembers = dataMembersHandler()

    return (
        <div className='flex flex-col grow h-full'>
            <div className='w-full min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
                <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                    <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                        <ActionIcon classNames={{ root: 'w-auto' }}>
                            <HiMiniBars3 size={22} />
                        </ActionIcon>
                    </div>
                    <div className='flex items-center  gap-3 '>
                        <span className='font-medium text-white '>Friends</span>
                    </div>
                    <div className='flex gap-2 flex-wrap items-center *:rounded-md'>
                        {static_data_menu.map((itemStep) => (
                            <div
                                className={`px-2 py-1 duration-300 text-sm font-semibold cursor-pointer ${
                                    tab === itemStep.id
                                        ? ' bg-general-gray-600 text-white'
                                        : 'hover:bg-general-gray-400 hover:text-general-gray-950'
                                }`}
                                key={itemStep.id}
                                onClick={() => setTab(itemStep.id)}
                            >
                                <span>{itemStep.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-auto justify-end flex gap-3 items-center  divide-x-1'>
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
            <div className='flex flex-1  '>
                <div className='flex-1 mx-2 xl:ml-[30px] xl:mr-[20px] pt-5'>
                    <div className='h-full flex flex-col text-sm gap-y-1 '>
                        {dataMembers?.length > 0 ? (
                            <>
                                <span className='font-semibold  '>
                                    {tab === 1 ? 'online' : tab === 2 ? 'All' : tab === 3 ? 'pending' : 'Blocked'}-{' '}
                                    {dataMembers?.length}
                                </span>
                                <FriendsList friendsData={dataMembers} />
                            </>
                        ) : (
                            <div className='flex flex-col gap-y-2 grow p-1 justify-center items-center   overflow-auto'>
                                <WumpusNotify type={tab} />
                            </div>
                        )}
                    </div>
                </div>
                <FriendsActivity />
            </div>
        </div>
    )
}

export default HomeTemplate
