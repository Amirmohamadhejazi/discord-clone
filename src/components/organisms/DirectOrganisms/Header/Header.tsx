/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC } from 'react'
import { usePathname } from 'next/navigation'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { UserProfile_icon, Users_icon } from '@molecules/icons'

import { static_all_users, static_data_direct } from '@core/constants/dummy-data/static-data'
import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { statusHandler } from '@core/utils/common/statusHandler'

import { type IHeaderProps } from './resources'
const Header: FC<IHeaderProps> = ({ toggleShowMember, isGroup }) => {
    const [, idDirect] = usePathname().split('/channels/me/')
    const dispatch = useDispatch()
    const DirectData =
        static_data_direct.find((items) => items.directId === idDirect) ||
        static_all_users.find((items) => items.useId === idDirect)

    return (
        <div className='min-h-[48px] flex items-center justify-between shadow-lg px-[12px]'>
            <div className='flex items-center gap-2'>
                <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
                <div className='w-7 h-7 relative'>
                    <img src={DirectData?.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                    {DirectData?.status && (
                        <div className='absolute -right-1 -bottom-0   '>
                            <div className='w-3 h-3  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                <img
                                    src={statusHandler(DirectData.status)}
                                    className='w-full h-full mb-1 object-cover'
                                    alt=''
                                />
                            </div>
                        </div>
                    )}
                </div>
                <span className='text-white font-semibold'>{DirectData?.name}</span>
            </div>
            <div className='cursor-pointer' onClick={toggleShowMember}>
                {isGroup ? <Users_icon className='text-white' /> : <UserProfile_icon className='text-white' />}
            </div>
        </div>
    )
}

export default Header
