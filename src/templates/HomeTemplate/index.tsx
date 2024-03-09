/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import Link from 'next/link'

import { AddDm_icon, Dm_icon, Inbox_icon, Menu_icon } from '@molecules/icons'
import Help_icon from '@molecules/icons/Help_icon'
import { WumpusNotify } from '@molecules/WumpusNotify'

import { DMenu } from '@atoms/DMenu'

import { static_data_menu, static_data_social } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

const HomeTemplate = () => {
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

    return (
        <div className='flex flex-col grow h-full'>
            <div className='w-full min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
                <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
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
                        {dataMembersHandler()?.length > 0 ? (
                            <>
                                <span className='font-semibold'>
                                    {tab === 1 ? 'online' : tab === 2 ? 'All' : tab === 3 ? 'pending' : 'Blocked'}-{' '}
                                    {dataMembersHandler()?.length}
                                </span>
                                {dataMembersHandler().map((itemSocial: TCriticalAnyType) => (
                                    <div className='border-t border-general-border ' key={itemSocial.useId}>
                                        <div className='flex items-center justify-between hover:bg-general-gray-400 px-2 py-2 rounded-lg cursor-pointer duration-300 group'>
                                            <div className='grow'>
                                                <DMenu type='socialFriend'>
                                                    <div className='flex  items-center gap-x-3 '>
                                                        <div className='w-9 h-9 relative'>
                                                            <img
                                                                src={itemSocial.avatar.src}
                                                                className='w-full h-full rounded-full object-cover'
                                                                alt=''
                                                            />
                                                            <div className='absolute -right-1 -bottom-0   '>
                                                                <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                                                    <img
                                                                        src={statusHandler(itemSocial.status)}
                                                                        className='w-full h-full mb-1 object-cover'
                                                                        alt=''
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col justify-between'>
                                                            <div className='flex gap-x-2'>
                                                                <span className='text-white'>
                                                                    {itemSocial.displayName}
                                                                </span>
                                                                <span className='hidden group-hover:block '>
                                                                    {itemSocial.username}
                                                                </span>
                                                            </div>
                                                            <span className='text-xs'>{itemSocial.status}</span>
                                                        </div>
                                                    </div>
                                                </DMenu>
                                            </div>
                                            <div className='flex gap-x-2 text-general-gray-900 *:hover:text-white'>
                                                <Link
                                                    href={`me/${itemSocial.useId}`}
                                                    className='p-2  bg-general-gray-50 rounded-full'
                                                >
                                                    <Dm_icon />
                                                </Link>
                                                <div className='p-2  bg-general-gray-50 rounded-full'>
                                                    <Menu_icon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className='flex flex-col gap-y-2 grow p-1 justify-center items-center   overflow-auto'>
                                <WumpusNotify type={tab} />
                            </div>
                        )}
                    </div>
                </div>
                <div className=' flex-col w-[360px] py-[16px] px-[8px] shadow-md p-2 hidden xl:flex'>
                    <span className='text-xl font-semibold text-white my-[16mx] px-[8px]'>Active Now</span>
                    <div className='py-8 '>
                        <div className='flex flex-col gap-y-2 text-sm text-center'>
                            <span className='text-white font-bold'>It's quiet for now...</span>
                            <span>
                                When a friend starts an activity—like playing a game or hanging out on voice—we’ll show
                                it here!
                            </span>
                        </div>
                        {/* <div className='flex items-center gap-2  bg-general-gray-50 border border-gray-700 rounded-xl px-1 py-8 animate-pulse'>
                            <div className='p-6 rounded-full bg-gray-900'></div>
                            <span>... .. .</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTemplate
