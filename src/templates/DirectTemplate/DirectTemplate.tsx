'use client'
import { usePathname } from 'next/navigation'

import { Header, MessageContainer } from '@organisms/DirectOrganisms'

import { static_data_direct } from '@core/constants/dummy-data/static-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

const DirectTemplate = () => {
    const [, idDirect] = usePathname().split('/channels/me/')
    const dataDirect: TCriticalAnyType = static_data_direct.find((items) => items.directId === idDirect)
    if (!dataDirect) {
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <span>this dm not found!</span>
            </div>
        )
    }
    return (
        <div className='h-full flex flex-col'>
            <Header />
            <MessageContainer />
        </div>
    )
}

export default DirectTemplate
