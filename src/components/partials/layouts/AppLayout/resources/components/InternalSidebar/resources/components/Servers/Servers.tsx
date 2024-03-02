import { usePathname } from 'next/navigation'
const Servers = () => {
    const path = usePathname()
    return (
        <div className='text-xs sm:text-sm  '>
            <span>Servers</span>
            <div className='flex items-center '>
                <span>id:</span>
                <span className=''>{path.split('/channels/')[1]}</span>
            </div>
        </div>
    )
}

export default Servers
