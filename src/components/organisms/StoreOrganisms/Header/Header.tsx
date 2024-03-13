'use client'
import React from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { NitroBadge_icon } from '@molecules/icons'

import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'

const Header = () => {
    const dispatch = useDispatch()
    return (
        <div className='w-full bg-general-gray-100  min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
            <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                    <ActionIcon classNames={{ root: 'w-auto' }}>
                        <HiMiniBars3 size={22} />
                    </ActionIcon>
                </div>
                <div className='flex items-center  gap-1 '>
                    <div className='text-sm'>
                        <NitroBadge_icon />
                    </div>
                    <span className='font-medium text-white text-sm'>Nitro</span>
                </div>
            </div>
        </div>
    )
}

export default Header
