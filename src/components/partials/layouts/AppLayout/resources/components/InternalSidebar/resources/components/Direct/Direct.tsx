'use client'
/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoClose } from 'react-icons/io5'

import { static_data_social } from '@templates/HomeTemplate/resources/constants/static-data'

import { statusHandler } from '@core/utils/common/statusHandler'

const Direct: FC<{
    dataDirect: {
        audienceId: string
        lastUpdateData: string
        messages: {
            message: string
            messageId: string
            date: string
        }
    }
}> = ({ dataDirect }) => {
    const path = usePathname()

    const userDetail = static_data_social.find((items) => items.useId === dataDirect.audienceId)
    const userDirect = path.split('/')[3] === userDetail?.useId

    return (
        <Link
            href={`/channels/me/${userDetail?.useId}`}
            className={`flex items-center group justify-between text-sm font-semibold ${
                userDirect ? 'bg-general-gray-200' : 'hover:bg-general-gray-200 '
            } rounded-md p-1`}
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
