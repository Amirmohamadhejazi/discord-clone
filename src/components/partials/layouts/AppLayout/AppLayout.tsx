/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { type ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from '@mantine/hooks'

import { closeMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { type RootState } from '@core/services/stores/Redux/store'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    const openedMenu = useSelector((state: RootState) => state.MobileMenu.openedMenu)
    const dispatch = useDispatch()

    const path = usePathname()
    const [stateTitle, setStateTitle] = useState('')
    useEffect(() => {
        if (document.getElementsByTagName('title')[0]?.text) {
            setStateTitle(document.getElementsByTagName('title')[0]?.text)
        }
    }, [path])
    useEffect(() => {
        dispatch(closeMenu())
    }, [path])
    return (
        <div className='flex  h-screen text-general-gray-800'>
            {/* Sidebar */}
            <div className={`${openedMenu ? 'block' : 'md:block hidden'}`}>
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className='flex-auto flex '>
                <div className={`w-full md:w-auto h-full  ${openedMenu ? 'block' : 'hidden md:block'}`}>
                    <InternalSidebar />
                </div>
                <div className={`flex-auto bg-general-gray-100 ${openedMenu ? 'hidden md:block' : 'block'}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout
