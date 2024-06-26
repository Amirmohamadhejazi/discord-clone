/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { type ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

import { DModal } from '@atoms/DModal'

import { closeMenu } from '@core/services/stores/Reducer/MobileMenu/MobileMenuSlice'
import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'
import { type RootState } from '@core/services/stores/Redux/store'

import { ExternalSidebar, InternalSidebar, Setting } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    const openedMenu = useSelector((state: RootState) => state.MobileMenu.openedMenu)
    const openedSettingPage = useSelector((state: RootState) => state.SettingUserPage.openedSettingPage)
    const dispatch = useDispatch()

    const path = usePathname()
    useEffect(() => {
        dispatch(closeMenu())
    }, [path])
    return (
        <div className='  flex  h-screen text-general-gray-800'>
            <div className={`${openedMenu ? 'block' : 'md:block hidden'}`}>
                <ExternalSidebar />
            </div>
            <div className={`w-full md:w-[230px] h-full  ${openedMenu ? '' : 'hidden md:block'}  `}>
                <InternalSidebar />
            </div>
            {/* <div className='grow h-full bg-general-gray-100'>{children}</div> */}
            <div className={`grow bg-general-gray-100 ${openedMenu ? 'hidden md:block' : 'block'}`}>{children}</div>

            <DModal
                opened={openedSettingPage}
                styles={{ body: { height: '100%' } }}
                fullScreen
                onClose={closeSettingPage}
            >
                <Setting />
            </DModal>
        </div>
    )
}

export default AppLayout
