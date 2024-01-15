/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaDiscord } from 'react-icons/fa'

import { static_data } from './resources/constants/static-data'

const Sidebar = () => {
    const path = usePathname()
    const sidebarState = path.split('/')[2]

    return (
        <div className='w-[72px] flex flex-col items-center justify-start py-5 bg-[#1e1f22]'>
            <div className='flex flex-col gap-2'>
                {static_data.map((items, index) => (
                    <Link
                        className='flex flex-col items-center justify-center'
                        href={`/channels/${items.id}`}
                        key={items.id}
                    >
                        <div className=' cursor-pointer relative group'>
                            <div
                                className={`flex items-center duration-500 justify-center w-[48px] h-[48px] rounded-full hover:rounded-xl overflow-hidden ${
                                    sidebarState === 'me' ? 'bg-[#5865f2]' : ' bg-[#313338]'
                                }`}
                            >
                                {items.icon ? (
                                    <img src={items.icon} alt={items.icon} />
                                ) : (
                                    <FaDiscord className='text-3xl  text-white' />
                                )}
                            </div>
                            <div
                                className={`flex items-center w-[4px] absolute top-0  duration-500 h-full  ${
                                    sidebarState === items.id
                                        ? '*:h-4/5 -left-3'
                                        : ' *:h-1/2 opacity-0 -left-10 group-hover:-left-3  group-hover:opacity-100 '
                                }`}
                            >
                                <div className='h-full w-full bg-white rounded-r-2xl rounded-l-none' />
                            </div>
                        </div>
                        {index === 0 && <hr className='w-10 my-2 border-[#313237] border-[1.8px]' />}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
