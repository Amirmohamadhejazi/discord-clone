/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'

import { WumpusNotify } from '@molecules/WumpusNotify'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { doNotDisturbStatus, idleStatus, offlineStatus, onlineStatus } from '@public/images'

import { static_data_menu } from './resources'
import { static_data_social } from './resources/constants/static-data'

const HomeTemplate = () => {
    const [tab, setTab] = useState<number | null>(1)
    const statusHandler = (status?: string | null) => {
        switch (status) {
            case 'online':
                return onlineStatus.src
            case 'offline':
                return offlineStatus.src
            case 'idle':
                return idleStatus.src
            case 'doNotDisturb':
                return doNotDisturbStatus.src
        }
    }
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
        <div className='flex flex-col grow h-full '>
            <div className='w-full whitespace-nowrap flex-wrap  flex items-center justify-between shadow-md p-[4px]'>
                <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                    <div className='flex items-center  gap-3 '>
                        <span className='font-medium text-white '>Friends</span>
                    </div>
                    <div className='flex gap-2 flex-wrap items-center *:rounded-md'>
                        {static_data_menu.map((itemStep) => (
                            <div
                                className={`px-2 py-1 duration-300 text-sm font-semibold cursor-pointer ${
                                    tab === itemStep.id
                                        ? 'bg-[#43444b] text-white'
                                        : 'hover:bg-[#393c41] hover:text-[#dbdee1]'
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
                        <svg
                            x='0'
                            y='0'
                            className='icon__4cb88'
                            aria-hidden='true'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M19 14a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1Z'
                                fill='currentColor'
                                className=''
                            ></path>
                            <path
                                d='M20.76 12.57c.4.3 1.23.13 1.24-.37V12a10 10 0 1 0-18.44 5.36c.12.19.1.44-.04.61l-2.07 2.37A1 1 0 0 0 2.2 22h10c.5-.01.67-.84.37-1.24A3 3 0 0 1 15 16h.5a.5.5 0 0 0 .5-.5V15a3 3 0 0 1 4.76-2.43Z'
                                fill='currentColor'
                                className=''
                            ></path>
                        </svg>
                    </div>
                    <div className='hover:text-white cursor-pointer duration-300'>
                        <svg
                            x='0'
                            y='0'
                            className='icon__4cb88'
                            aria-hidden='true'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z'
                                clipRule='evenodd'
                                className=''
                            ></path>
                        </svg>
                    </div>
                    <div className='hover:text-white cursor-pointer duration-300'>
                        <svg
                            x='0'
                            y='0'
                            className='icon__4cb88'
                            aria-hidden='true'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <circle cx='12' cy='12' r='10' fill='transparent' className=''></circle>
                            <path
                                fill='currentColor'
                                fillRule='evenodd'
                                d='M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z'
                                clipRule='evenodd'
                                className=''
                            ></path>
                        </svg>
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
                                {/* <hr className='border-[#46474e] border-[1.5px]' /> */}
                                {dataMembersHandler().map((itemSocial: TCriticalAnyType) => (
                                    <div className='border-t border-[#3f4147] ' key={itemSocial.useId}>
                                        <div className='flex items-center justify-between hover:bg-[#393c41] px-2 py-2 rounded-lg cursor-pointer duration-300 group'>
                                            <div className='flex items-center gap-x-3'>
                                                <div className='w-9 h-9 relative'>
                                                    <img
                                                        src={itemSocial.avatar.src}
                                                        className='w-full h-full rounded-full object-cover'
                                                        alt=''
                                                    />
                                                    <div className='absolute -right-1 -bottom-0   '>
                                                        <div className='w-4 h-4 bg-[#313338] flex items-center justify-center rounded-full'>
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
                                                        <span className='text-white'>{itemSocial.displayName}</span>
                                                        <span className='hidden group-hover:block '>
                                                            {itemSocial.username}
                                                        </span>
                                                    </div>
                                                    <span className='text-xs'>{itemSocial.status}</span>
                                                </div>
                                            </div>
                                            <div className='flex gap-x-2 text-[#b5bac1] *:hover:text-white'>
                                                <div className='p-2 bg-[#2b2d31] rounded-full'>
                                                    <svg
                                                        className='icon__7215c'
                                                        aria-hidden='true'
                                                        role='img'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='20'
                                                        height='20'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            d='M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z'
                                                            className=''
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className='p-2 bg-[#2b2d31] rounded-full'>
                                                    <svg
                                                        className='icon__7215c'
                                                        aria-hidden='true'
                                                        role='img'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        width='20'
                                                        height='20'
                                                        fill='none'
                                                        viewBox='0 0 24 24'
                                                    >
                                                        <path
                                                            fill='currentColor'
                                                            fillRule='evenodd'
                                                            d='M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
                                                            clipRule='evenodd'
                                                            className=''
                                                        ></path>
                                                    </svg>
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
                        {/* <div className='flex items-center gap-2 bg-[#2b2d31] border border-gray-700 rounded-xl px-1 py-8 animate-pulse'>
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
