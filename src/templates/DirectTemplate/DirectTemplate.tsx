/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import { Header, MessageContainer } from '@organisms/DirectOrganisms'

import { static_all_users, static_data_direct } from '@core/constants/dummy-data/direct/static-data-direct'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const DirectTemplate = () => {
    const [IsShowMember, { toggle: toggleShowMember, close: closeShowMember }] = useDisclosure(true)
    const [, idDirect] = usePathname().split('/channels/me/')
    const matchesSm = useMediaQuery('(max-width: 576px)')

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

    useEffect(() => {
        if (matchesSm) {
            closeShowMember()
        }
    }, [matchesSm])
    // Regular expression pattern to match ":dynamicText:"

    return (
        <div className='h-full flex flex-col'>
            <Header isGroup={DirectData.users ? true : false} toggleShowMember={toggleShowMember} />
            <MessageContainer isShowMember={IsShowMember} />
        </div>
    )
}

export default DirectTemplate
