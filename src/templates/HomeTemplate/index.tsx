'use client'
import React, { useState } from 'react'

import { static_data_menu } from './resources'

const HomeTemplate = () => {
    const [tab, setTab] = useState<number | null>(1)

    return (
        <div className='flex flex-col grow h-full '>
            <div className='flex items-center justify-between shadow-md p-[8px]'>
                <div className='h-full flex items-center  gap-7   relative'>
                    <div className='flex items-center gap-3 '>
                        <svg
                            className='linkButtonIcon__2f35b w-6 h-6'
                            aria-hidden='true'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path fill='currentColor' d='M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z' className=''></path>
                            <path
                                fill='currentColor'
                                d='M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z'
                                className=''
                            ></path>
                        </svg>
                        <span className='font-medium text-white'>Friends</span>
                    </div>

                    <div className='flex gap-2 items-center *:rounded-md'>
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
                <div className='flex gap-3 items-center divide-x-1'>
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
                                fill-rule='evenodd'
                                d='M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z'
                                clip-rule='evenodd'
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
                                fill-rule='evenodd'
                                d='M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z'
                                clip-rule='evenodd'
                                className=''
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex flex-1  '>
                <div className='flex-1 p-2  '></div>
                <div className='flex flex-col w-[360px] py-[16px] px-[8px] shadow-md p-2  '>
                    <span className='text-xl font-semibold text-white my-[16mx] px-[8px]'>Active Now</span>
                    <div className='py-[16px]  '>
                        <div className='flex items-center gap-2 bg-[#2b2d31] border border-gray-700 rounded-xl px-1 py-8 animate-pulse'>
                            <div className='p-6 rounded-full bg-gray-900'></div>
                            <span>... .. .</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTemplate
