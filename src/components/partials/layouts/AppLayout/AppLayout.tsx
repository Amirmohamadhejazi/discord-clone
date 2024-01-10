import React, { type ReactNode } from 'react'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex h-screen bg-cyan-200 text-white'>
            {/* Sidebar */}
            <div className='w-[72px] bg-[#1e1f22]'></div>

            {/* Main Content */}
            <div className='flex-auto flex '>
                <div className='w-60 bg-[#2b2d31] '></div>
                <div className='flex-auto bg-[#313338]'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout
