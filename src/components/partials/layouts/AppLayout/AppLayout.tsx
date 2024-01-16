import { type ReactNode } from 'react'

import { InternalSidebar, Sidebar } from './resources'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex min-h-screen bg-cyan-200 text-[#949ba4] select-none'>
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

// import { type ReactNode } from 'react'

// import { InternalSidebar, Sidebar } from './resources'

// const AppLayout = ({ children }: { children: ReactNode }) => {
//     return (
//         <div className='flex h-screen   text-[#949ba4] select-none'>
//             {/* Sidebar */}
//             {/* <Sidebar /> */}

//             {/* Main Content */}
//             <div className='flex-auto flex '>
//                 <div className='flex flex-col h-full w-[130px] bg-cyan-400 p-1'>
//                     <div className='h-[300px] bg-red-200 p-1'></div>
//                     <div className='flex grow p-1 bg-slate-500 overflow-auto'>
//                         <div className='h-[1000px] bg-black p-1'></div>
//                     </div>
//                     <div className='h-[200px] bg-blue-200 p-1'>seetubg</div>
//                 </div>
//                 {/* <InternalSidebar /> */}
//                 <div className='flex-auto bg-[#313338]'>{children}</div>
//             </div>
//         </div>
//     )
// }

// export default AppLayout
