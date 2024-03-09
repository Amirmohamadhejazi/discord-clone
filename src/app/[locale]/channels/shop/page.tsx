import { Inbox_icon, Logo_icon } from '@molecules/icons'
import Help_icon from '@molecules/icons/Help_icon'

const Shop = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full min-h-[48px]  p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
                <div className='flex items-center text-[#f2f3f5] '>
                    <div className='text-xs'>
                        <Logo_icon />
                    </div>
                    <span className='font-semibold'>Shop</span>
                </div>
                <div className='flex items-center gap-x-4'>
                    <div className='hover:text-white cursor-pointer duration-300'>
                        <Inbox_icon />
                    </div>
                    <div className='hover:text-white cursor-pointer duration-300'>
                        <Help_icon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
