/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { Users_icon, Voice_icon } from '@molecules/icons'
import Text_icon from '@molecules/icons/Text_icon'

import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'

import { type IHeaderProps } from './resources'
const Header: FC<IHeaderProps> = ({ toggleShowMember, channelData }) => {
    const dispatch = useDispatch()

    return (
        <div className='min-h-[48px] flex items-center justify-between shadow-lg px-[12px]  select-none'>
            <div className='flex items-center gap-2'>
                <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
                <div className='flex items-center gap-1'>
                    {channelData.type === 'text' ? (
                        <Text_icon size='22' isPrivate={channelData.isPrivate} />
                    ) : (
                        channelData.type === 'voice' && <Voice_icon size='22' isPrivate={channelData.isPrivate} />
                    )}
                    <span className='text-white font-semibold'>{channelData.name}</span>
                </div>
            </div>
            <div className='cursor-pointer' onClick={toggleShowMember}>
                <Users_icon className='text-white' />
            </div>
        </div>
    )
}

export default Header
