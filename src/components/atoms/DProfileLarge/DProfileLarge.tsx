/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { ActionIcon, Tooltip } from '@mantine/core'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { badgeHandler } from '@core/utils/common/badgeHandler/badgeHandler'

import { nitroIconImg } from '@public/images'

import { type IProfileLargeProps } from './resources'

const DProfileLarge: FC<IProfileLargeProps> = ({ dataProfile }) => {
    const { colors = [], displayName, username, avatar, banner, created, about, status } = dataProfile

    return (
        <div
            className='h-full p-[3px]'
            style={{
                background: `linear-gradient(to bottom, ${colors[0] || 'gray'} 30%, ${colors[1] || 'white'}`
            }}
        >
            <div className={` bg-opacity-40 bg-black flex flex-col items-center  rounded-md overflow-hidden group`}>
                <div className={` w-full ${banner ? 'h-[190px]' : 'h-24'}  relative bg-black`}>
                    {banner && (
                        <div className='w-full h-full relative'>
                            <img src={banner.src} alt='avatar' className='w-full h-full object-cover' />
                            <div
                                className={`absolute duration-300 invisible opacity-0 rounded-full bg-black bg-opacity-15
                                        group-hover:opacity-100 group-hover:visible right-2 -top-full group-hover:top-2 px-1`}
                            >
                                <img src={nitroIconImg.src} className='w-5 h-5' alt='' />
                            </div>
                        </div>
                    )}
                    <div className='w-full absolute -bottom-11 px-3 flex justify-between items-end'>
                        <div className='flex items-end'>
                            <div className='w-28 h-2w-28 p-[3px] bg-black bg-opacity-35 rounded-full'>
                                <div className='relative rounded-full overflow-hidden'>
                                    <img src={avatar.src} alt='avatar' className='w-full h-full object-cover ' />
                                </div>
                            </div>
                            <div className='flex'>
                                {dataProfile?.badges?.length > 0 && (
                                    <div className='max-w-40 flex flex-wrap justify-end items-center gap-[2px] bg-general-gray-50 rounded-md p-1'>
                                        {dataProfile?.badges?.map((itemsBadge: TCriticalAnyType, index: number) => {
                                            const dataProfile: TCriticalAnyType = badgeHandler(itemsBadge)
                                            if (dataProfile) {
                                                const { name, img } = dataProfile
                                                return (
                                                    <Tooltip
                                                        label={name}
                                                        withArrow
                                                        multiline
                                                        offset={9}
                                                        classNames={{ tooltip: 'text-[10px] font-bold max-w-36   ' }}
                                                        className='bg-general-gray-50'
                                                        key={index}
                                                    >
                                                        <img
                                                            src={img}
                                                            className='w-[20px] h-[20px] cursor-pointer  '
                                                            alt={name}
                                                        />
                                                    </Tooltip>
                                                )
                                            }
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='flex items-center gap-x-2 text-general-gray-800  '>
                            {!dataProfile.me && (
                                <>
                                    <ActionIcon classNames={{ root: 'w-auto' }}>
                                        <div className='bg-success-500 cursor-pointer text-white font-semibold px-4 py-2 rounded-md text-xs whitespace-nowrap'>
                                            <span>Send Message</span>
                                        </div>
                                    </ActionIcon>
                                    <ActionIcon classNames={{ root: 'w-auto' }}>
                                        <svg
                                            className='additionalActionsIcon__33de0'
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
                                                d='M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z'
                                                clip-rule='evenodd'
                                                className=''
                                            ></path>
                                        </svg>
                                    </ActionIcon>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className='h-9 '></div>
                <div className='w-full h-full flex flex-col gap-y-2 px-3 mb-3 mt-6 '>
                    <div className='w-full min-h-32  flex flex-col justify-between bg-black bg-opacity-65 text-white rounded-md p-3'>
                        <div className='flex flex-col gap-2 font-semibold '>
                            <div className='flex flex-col'>
                                <span className='font-bold'>{displayName}</span>
                                <span className='text-xs'>{username}</span>
                            </div>
                            <hr />
                            <div className='flex flex-col gap-y-1 max-h-32 overflow-auto'>
                                <div className='flex flex-col text-xs'>
                                    <span className='font-bold'>About me</span>
                                    <div className='flex text-[10px]'>
                                        <span>{about}</span>
                                    </div>
                                </div>
                                <div className='flex flex-col text-xs'>
                                    <span className='font-bold'>MEMBER SINCE</span>
                                    <span className=' text-[10px]'>{created}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DProfileLarge
