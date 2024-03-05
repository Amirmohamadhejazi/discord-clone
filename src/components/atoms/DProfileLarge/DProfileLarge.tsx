/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { Tooltip } from '@mantine/core'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { badgeHandler } from '@core/utils/common/badgeHandler/badgeHandler'

import { nitroIconImg } from '@public/images'

import { type IProfileLargeProps } from './resources'

const DProfileLarge: FC<IProfileLargeProps> = ({ dataProfile }) => {
    const { colors = [], displayName, username, avatar, banner, created, about, status } = dataProfile

    return (
        <div className={`w-full flex flex-col items-center m-[3px]  rounded-md overflow-hidden group`}>
            <div className={`w-full ${banner ? 'h-[110px]' : 'h-16'}  relative bg-black`}>
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
                <div className='w-20 h-20 p-[3px] bg-black bg-opacity-35 absolute -bottom-9 left-5 rounded-full'>
                    <div
                        className="relative rounded-full overflow-hidden cursor-pointer
                                    before:bg-black before:bg-opacity-0 before:duration-150 before:flex before:items-center before:justify-center hover:before:content-['view\profile']
                                    before:text-[11px] before:text-white before:font-medium hover:before:bg-opacity-60 before:p-2 before:absolute
                                    before:top-0 before:w-full before:h-full"
                    >
                        <img src={avatar.src} alt='avatar' className='w-full h-full object-cover ' />

                        {/* <div className='w-5 h-5  absolute right-1  -bottom-0 rounded-full'>
                                        <img
                                            src={statusHandler(status)}
                                            className='w-full h-full  object-cover  '
                                            alt=''
                                        />
                                    </div> */}
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex flex-col gap-y-2 px-3 mb-3 '>
                <div className=' flex justify-end p-1 mt-2 min-h-[36px] '>
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
                                            <img src={img} className='w-[20px] h-[20px] cursor-pointer  ' alt={name} />
                                        </Tooltip>
                                    )
                                }
                            })}
                        </div>
                    )}
                </div>
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
    )
}

export default DProfileLarge
