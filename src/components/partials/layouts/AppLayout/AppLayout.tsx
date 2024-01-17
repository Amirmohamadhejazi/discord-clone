import { type ReactNode } from 'react'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex min-h-screen text-general-gray-800 select-none'>
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
