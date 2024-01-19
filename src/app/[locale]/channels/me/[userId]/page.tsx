/* eslint-disable @next/next/no-img-element */
'use client'

import { static_data_social } from '@templates/HomeTemplate/resources/constants/static-data'

import { statusHandler } from '@core/utils/common/statusHandler'

const userDirect = ({ params }: { params: { userId: string } }) => {
    const data = static_data_social.filter((items) => items.useId === params.userId)[0]
    console.log(params.userId)

    return (
        <div className='flex flex-col '>
            <div className='min-h-[48px] flex items-center gap-x-2  shadow-lg px-[12px]'>
                <div className='w-7 h-7 relative'>
                    <img src={data.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                    <div className='absolute -right-1 -bottom-0   '>
                        <div className='w-3 h-3  bg-general-gray-100 flex items-center justify-center rounded-full'>
                            <img src={statusHandler(data.status)} className='w-full h-full mb-1 object-cover' alt='' />
                        </div>
                    </div>
                </div>
                <span className='text-white font-semibold'>{data.displayName}</span>
            </div>
            <span>displayname: {data.displayName}</span>
            <span>username: {data.username}</span>
            <span>userId: {params.userId}</span>
        </div>
    )
}

export default userDirect
