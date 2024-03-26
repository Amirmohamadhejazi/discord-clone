import { usePathname } from 'next/navigation'

import { HomeInternalSidebar, ServerInternalSidebar } from './resources'

const InternalSidebar = () => {
    const path = usePathname()
    const rootHome = ['/store', '/shop', '/channels/me']

    const isHome = rootHome.includes(path) || path.includes('me')
    return (
        <div className=' h-full bg-general-gray-50 overflow-y-auto'>
            {isHome ? <HomeInternalSidebar /> : <ServerInternalSidebar />}
        </div>
    )
}

export default InternalSidebar
