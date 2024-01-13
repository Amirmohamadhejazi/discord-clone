'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

import { static_data } from '@partials/layouts/AppLayout/resources/components/Sidebar/resources/constants/static-data'
const Channels = () => {
    const path = usePathname()
    const idChannel = path.split('/channels/')[1]
    if (static_data.find((items) => items.id === idChannel)) {
        return <div>Channels</div>
    }
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <h1 className='text-2xl font-bold'>Channel Not Found!</h1>
        </div>
    )
}

export default Channels
