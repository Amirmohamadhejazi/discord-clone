import { type ReactNode } from 'react'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex h-screen bg-cyan-200 text-[#949ba4] select-none'>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className='flex-auto flex '>
                <InternalSidebar />
                <div className='flex-auto bg-[#313338]'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout
