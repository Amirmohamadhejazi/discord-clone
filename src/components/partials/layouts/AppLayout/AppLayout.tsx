/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { type ReactNode } from 'react'

import { ExternalSidebar, InternalSidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex  h-screen text-general-gray-800'>
            {/* ExternalSidebar */}
            <ExternalSidebar />
            {/* InternalSidebar */}
            <InternalSidebar />

            <div className='grow h-full bg-general-gray-100'>{children}</div>
        </div>
    )
}

export default AppLayout
