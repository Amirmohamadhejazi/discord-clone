/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useDisclosure } from '@mantine/hooks'

import { Header, MessageContainer } from '@organisms/DirectOrganisms'

import { static_all_users, static_data_direct } from '@core/constants/dummy-data/static-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const DirectTemplate = () => {
    const [IsShowMember, { toggle: toggleShowMember }] = useDisclosure(true)
    const [, idDirect] = usePathname().split('/channels/me/')

    const DirectData: TCriticalAnyType =
        static_data_direct.find((items) => items.directId === idDirect) ||
        static_all_users.find((items) => items.useId === idDirect)
    if (!DirectData) {
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <span className='text-2xl font-bold'>Direct not found</span>
            </div>
        )
    }
    useEffect(() => {
        document.title = `Discord | ${!DirectData.users ? '@' : ''}${DirectData.name}`
    }, [DirectData.name, DirectData.users])
    return (
        <div className='h-full flex flex-col'>
            <Header isGroup={DirectData.users ? true : false} toggleShowMember={toggleShowMember} />
            <MessageContainer isShowMember={IsShowMember} />
        </div>
    )
}

export default DirectTemplate
