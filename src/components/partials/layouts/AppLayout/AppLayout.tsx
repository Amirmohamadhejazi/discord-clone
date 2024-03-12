'use client'
import { type ReactNode } from 'react'

import { ExternalSidebar, InternalSidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex  h-screen text-general-gray-800'>
            <ExternalSidebar />
            <InternalSidebar />
            <div className='grow h-full bg-general-gray-100'>{children}</div>
        </div>
    )
}

export default AppLayout
