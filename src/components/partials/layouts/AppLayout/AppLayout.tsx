import { type ReactNode } from 'react'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex min-h-screen text-[#949ba4] select-none'>
            {/* Sidebar */}
            <div className='hidden md:block bg-red-200'>
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className='flex-auto flex '>
                <div className='h-full hidden xl:block'>
                    <InternalSidebar />
                </div>
                <div className='flex-auto bg-[#313338]'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout
