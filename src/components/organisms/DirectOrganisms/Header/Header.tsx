/* eslint-disable @next/next/no-img-element */
'use client'
import { usePathname } from 'next/navigation'
import { HiMiniBars3 } from 'react-icons/hi2'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { static_data_direct } from '@core/constants/dummy-data/static-data'
import { openMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { statusHandler } from '@core/utils/common/statusHandler'
const Header = () => {
    const [, idDirect] = usePathname().split('/channels/me/')
    const dataDirect = static_data_direct.find((items) => items.directId === idDirect)
    const dispatch = useDispatch()

    return (
        <div className='min-h-[48px] flex items-center gap-x-2  shadow-lg px-[12px]'>
            <div className='md:hidden' onClick={() => dispatch(openMenu())}>
                <ActionIcon classNames={{ root: 'w-auto' }}>
                    <HiMiniBars3 size={22} />
                </ActionIcon>
            </div>
            <div className='w-7 h-7 relative'>
                <img src={dataDirect?.avatar.src} className='w-full h-full rounded-full object-cover' alt='' />
                {dataDirect?.status && (
                    <div className='absolute -right-1 -bottom-0   '>
                        <div className='w-3 h-3  bg-general-gray-100 flex items-center justify-center rounded-full'>
                            <img
                                src={statusHandler(dataDirect.status)}
                                className='w-full h-full mb-1 object-cover'
                                alt=''
                            />
                        </div>
                    </div>
                )}
            </div>
            <span className='text-white font-semibold'>{dataDirect?.name}</span>
        </div>
    )
}

export default Header
