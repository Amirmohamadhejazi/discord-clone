import { usePathname } from 'next/navigation'

import { HomeInternalSidebar, ServerInternalSidebar } from './resources'

const InternalSidebar = () => {
    const path = usePathname()
    const rootHome = ['/store', '/shop', '/channels/me']
    const isHome = rootHome.includes(path)
    return (
        <div className='w-[240px] h-full bg-general-gray-50'>
            {isHome ? <HomeInternalSidebar /> : <ServerInternalSidebar />}
        </div>
    )
}

export default InternalSidebar
