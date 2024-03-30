'use client'
import React from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { Inbox_icon, Logo_icon } from '@molecules/icons'
import Help_icon from '@molecules/icons/Help_icon'

import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='w-full sticky top-0 z-[1] bg-general-gray-100  min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
            <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
                <div className='flex items-center '>
                    <div className='text-white '>
                        <Logo_icon />
                    </div>
                    <span className='font-semibold text-white text-sm'>Shop</span>
                </div>
            </div>
            <div className='justify-end hidden sm:flex gap-3 items-center  divide-x-1'>
                <div className='hover:text-white cursor-pointer duration-300'>
                    <Inbox_icon />
                </div>
                <div className='hover:text-white cursor-pointer duration-300'>
                    <Help_icon />
                </div>
            </div>
        </div>
    )
}

export default Header
