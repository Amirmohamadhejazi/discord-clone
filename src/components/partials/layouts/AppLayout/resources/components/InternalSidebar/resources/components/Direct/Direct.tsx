'use client'
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import { static_data_social } from '@core/constants/dummy-data'
import { closeMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { statusHandler } from '@core/utils/common/statusHandler'

import { type IDirectProps } from './resources'

const Direct: FC<IDirectProps> = ({ dataDirect }) => {
    const path = usePathname()
    const dispatch = useDispatch()

    const userDetail = static_data_social.find((items) => items.useId === dataDirect.personId)
    const userDirect = path.split('/')[3] === userDetail?.useId
    return (
        <Link
            href={`/channels/me/${userDetail?.useId}`}
            className={`flex items-center group justify-between text-sm font-semibold duration-300 ${
                userDirect ? 'bg-general-gray-200' : 'hover:bg-general-gray-200 '
            } rounded-md p-1`}
            onClick={() => userDirect && dispatch(closeMenu())}
        >
            <div className='flex items-center gap-x-2'>
                <div className='w-9 h-9 relative'>
                    <img src={userDetail?.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                    <div className='absolute -right-1 -bottom-0   '>
                        <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                            <img
                                src={statusHandler(userDetail?.status)}
                                className='w-full h-full mb-1 object-cover'
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <span>{userDetail?.displayName}</span>
            </div>
            <span className='invisible cursor-pointer group-hover:visible text-xl'>
                <IoClose />
            </span>
        </Link>
    )
}

export default Direct
