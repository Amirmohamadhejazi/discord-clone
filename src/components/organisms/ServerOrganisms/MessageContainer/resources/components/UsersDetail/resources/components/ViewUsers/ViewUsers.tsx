/* eslint-disable @next/next/no-img-element */
'use client'
import React, { type FC } from 'react'
import { Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Owner_icon } from '@molecules/icons'

import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_data_roles_server, static_data_users_servers } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

// import {  } from '@core/constants/dummy-data'
import { type IViewUsersProps } from './resources'

const ViewUsers: FC<IViewUsersProps> = ({ channelData }) => {
    const matchesSm = useMediaQuery('(max-width: 576px)')
    const rolesToFilter = new Set(channelData.roles)

    // Filter users based on roles
    const dataUsersWithPerm =
        channelData.roles.length === 0
            ? static_data_users_servers
            : static_data_users_servers.filter((user) => {
                  return user.roles.some((role: TCriticalAnyType) => rolesToFilter.has(role))
              })

    return (
        <div className='flex flex-col w-full h-full overflow-y-auto p-2 gap-y-1'>
            {static_data_roles_server.map((itemsRole) => {
                const idRole = itemsRole.roleId
                const dataMember = dataUsersWithPerm.filter((itemsRoleMember) => itemsRoleMember.roles[0] === idRole)

                return (
                    <div className={`flex flex-col ${dataMember.length === 0 ? 'hidden' : ''}`} key={itemsRole.roleId}>
                        <span className={`text-xs font-semibold mb-1 `} style={{ color: itemsRole.color }}>
                            {itemsRole.name}
                        </span>

                        {dataMember.map((itemUser) => {
                            return (
                                <DProfileMenu
                                    dataProfile={itemUser}
                                    position={!matchesSm ? 'left-start' : 'top'}
                                    key={itemUser.useId}
                                >
                                    <div className='flex items-center gap-x-2 px-2 py-1 hover:bg-general-gray-200 hover:text-white rounded-md cursor-pointer duration-300'>
                                        <div className='w-8 h-8 relative shrink-0'>
                                            <img
                                                src={itemUser.avatar.src}
                                                className='w-full h-full rounded-full object-cover'
                                                alt=''
                                            />
                                            <div className='absolute -right-1 -bottom-0   '>
                                                <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                                    <img
                                                        src={statusHandler(itemUser?.status)}
                                                        className='w-full h-full mb-1 object-cover'
                                                        alt=''
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='truncate flex items-center gap-x-1'>
                                            <span className='text-sm truncate'>{itemUser.name}</span>

                                            {itemUser.ownerServer && (
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
                                    </div>
                                </DProfileMenu>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ViewUsers
