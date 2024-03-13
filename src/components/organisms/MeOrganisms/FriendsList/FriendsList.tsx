/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'
import Link from 'next/link'

import { Dm_icon, Menu_icon } from '@molecules/icons'

import { DMenu } from '@atoms/DMenu'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { statusHandler } from '@core/utils/common/statusHandler'

import { type IFriendsListProps } from './resources'

const FriendsList: FC<IFriendsListProps> = ({ friendsData }) => {
    return (
        <div className='flex flex-col gap-y-1 '>
            {friendsData.map((itemSocial: TCriticalAnyType) => (
                <div className='flex flex-col gap-y-1' key={itemSocial.useId}>
                    <hr className='border-general-border' />
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
                                            <span className='text-white'>{itemSocial.displayName}</span>
                                            <span className='hidden group-hover:block '>{itemSocial.username}</span>
                                        </div>
                                        <span className='text-xs'>{itemSocial.status}</span>
                                    </div>
                                </div>
                            </DMenu>
                        </div>
                        <div className='flex gap-x-2 text-general-gray-900 *:hover:text-white'>
                            <Link href={`me/${itemSocial.useId}`} className='p-2  bg-general-gray-50 rounded-full'>
                                <Dm_icon />
                            </Link>
                            <div className='p-2  bg-general-gray-50 rounded-full'>
                                <Menu_icon size='20' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FriendsList
