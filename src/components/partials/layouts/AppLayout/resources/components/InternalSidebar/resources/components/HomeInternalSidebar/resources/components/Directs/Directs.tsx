'use client'
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

import { closeMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { statusHandler } from '@core/utils/common/statusHandler'

import { type IDirectsProps } from './resources'
const Directs: FC<IDirectsProps> = ({ dataDirect }) => {
    const path = usePathname()
    const dispatch = useDispatch()

    const userDirect = path.split('/')[3] === dataDirect.directId
    return (
        <Link
            href={`/channels/me/${dataDirect?.directId}`}
            className={`flex items-center group justify-between text-sm font-semibold duration-300 ${
                userDirect ? 'bg-general-gray-200' : 'hover:bg-general-gray-200 '
            } rounded-md p-1`}
            onClick={() => userDirect && dispatch(closeMenu())}
        >
            <div className='flex items-center gap-x-2'>
                <div className='w-9 h-9 relative'>
                    <img src={dataDirect.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                    {dataDirect?.status && (
                        <div className='absolute -right-1 -bottom-0   '>
                            <div className='w-4 h-4  bg-general-gray-100 flex items-center justify-center rounded-full'>
                                <img
                                    src={statusHandler(dataDirect?.status)}
                                    className='w-full h-full mb-1 object-cover'
                                    alt=''
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className='flex flex-col'>
                    <span className='text-white font-medium'>{dataDirect.name}</span>
                    {dataDirect?.users?.length && (
                        <span className='text-xs font-light'>{dataDirect?.users?.length} Members</span>
                    )}
                </div>
            </div>
            <span className='invisible cursor-pointer group-hover:visible text-xl'>
                <IoClose />
            </span>
        </Link>
    )
}

export default Directs
