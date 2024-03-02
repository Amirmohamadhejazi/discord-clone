/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { type ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    const path = usePathname()
    const [stateTitle, setStateTitle] = useState('')
    useEffect(() => {
        if (document.getElementsByTagName('title')[0]?.text) {
            setStateTitle(document.getElementsByTagName('title')[0]?.text)
        }
    }, [path])

    return (
        <div className='flex min-h-screen text-general-gray-800'>
            {/* Sidebar */}
            <div className='hidden md:block'>
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className='flex-auto flex '>
                <div className='h-full hidden xl:block'>
                    <InternalSidebar />
                </div>
                <div className='flex-auto  bg-general-gray-100'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout
