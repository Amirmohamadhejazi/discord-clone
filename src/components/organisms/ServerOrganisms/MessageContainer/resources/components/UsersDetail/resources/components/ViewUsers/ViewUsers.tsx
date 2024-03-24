/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Owner_icon } from '@molecules/icons'

import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_all_users } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

import { type IViewUsersProps } from './resources'

const ViewUsers: FC<IViewUsersProps> = ({ channelData }) => {
    const matchesSm = useMediaQuery('(max-width: 576px)')

    return (
        <div className='flex flex-col w-full h-full overflow-y-auto p-2'>
            <h1 className=' font-medium text-xs ml-2'>MEMBERS-{channelData.users.length}</h1>
            <div className='flex flex-col gap-1'>
                {channelData.users.map((itemsUser) => {
                    const userData: TCriticalAnyType = static_all_users.find(
                        (itemAllUser) => itemAllUser.useId === itemsUser
                    )
                    if (userData) {
                        return (
                            <DProfileMenu
                                dataProfile={userData}
                                key={userData.useId}
                                position={!matchesSm ? 'left-start' : 'top'}
                            >
                                <div className='flex items-center gap-x-2 px-2 py-1 hover:bg-general-gray-200 hover:text-white rounded-md cursor-pointer duration-300'>
                                    <div className='w-8 h-8 relative'>
                                        <img
                                            src={userData.avatar.src}
                                            className='w-full h-full rounded-full object-cover'
                                            alt=''
                                        />
                                        <div className='absolute -right-1 -bottom-0   '>
                                            <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                                <img
                                                    src={statusHandler(userData?.status)}
                                                    className='w-full h-full mb-1 object-cover'
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center'>
                                        <span className='text-sm'>{userData.name}</span>

                                        {userData.ownerServer && (
                                            <Tooltip
                                                label={'Server ownerServer'}
                                                withArrow
                                                multiline
                                                offset={5}
                                                classNames={{ tooltip: 'text-[10px] font-bold ' }}
                                            >
                                                <div>
                                                    <Owner_icon size={'14'} />
                                                </div>
                                            </Tooltip>
                                        )}
                                    </div>
                                    {/* <img src={userData.avatar.src} className='w-8 h-8 rounded-full' alt='' />
                                    <span className='text-sm'>{userData.name}</span>

                                    {userData.ownerServer && (
                                        <Tooltip
                                            label={'Server ownerServer'}
                                            withArrow
                                            multiline
                                            offset={5}
                                            classNames={{ tooltip: 'text-[10px] font-bold ' }}
                                        >
                                            <div>
                                                <Owner_icon size={'14'} />
                                            </div>
                                        </Tooltip>
                                    )} */}
                                </div>
                            </DProfileMenu>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ViewUsers
