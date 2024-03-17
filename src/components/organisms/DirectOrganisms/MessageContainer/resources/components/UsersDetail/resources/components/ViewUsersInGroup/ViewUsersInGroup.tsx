/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { Tooltip } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

import { Owner_icon } from '@molecules/icons'

import { DProfileMenu } from '@atoms/DProfileMenu'

import { type IViewUsersInGroupProps } from './resources'

const ViewUsersInGroup: FC<IViewUsersInGroupProps> = ({ DirectData }) => {
    const matchesSm = useMediaQuery('(max-width: 576px)')

    return (
        <div className='flex flex-col w-full h-full overflow-y-auto p-2'>
            <h1 className=' font-medium text-xs ml-2'>MEMBERS-{DirectData.users.length}</h1>
            <div className='flex flex-col gap-1'>
                {DirectData.users.map((itemUser) => (
                    <DProfileMenu
                        dataProfile={itemUser}
                        key={itemUser.useId}
                        position={!matchesSm ? 'left-start' : 'top'}
                    >
                        <div className='flex items-center gap-x-2 px-2 py-1 hover:bg-general-gray-200 hover:text-white rounded-md cursor-pointer duration-300'>
                            <img src={itemUser.avatar.src} className='w-8 h-8 rounded-full' alt='' />
                            <span className='text-sm'>{itemUser.name}</span>

                            {itemUser.ownerGroup && (
                                <Tooltip
                                    label={'Group Owner'}
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
                    </DProfileMenu>
                ))}
            </div>
        </div>
    )
}

export default ViewUsersInGroup
