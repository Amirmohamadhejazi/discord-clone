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
        <div className='w-16 h-full flex flex-col items-center justify-start py-3  bg-general-gray overflow-y-auto'>
            <div className='flex flex-col gap-2'>
                {static_data.map((items, index) => (
                    <Link
                        className='flex flex-col items-center justify-center'
                        href={`/channels/${items.id}`}
                        key={items.id}
                    >
                        <div className=' cursor-pointer relative group'>
                            <div
                                className={`flex items-center justify-center w-[48px] h-[48px]  overflow-hidden ${
                                    sidebarState === 'me' ? 'bg-general-blue' : '  bg-general-gray-100'
                                } ${sidebarState === items.id ? ' rounded-2xl  ' : 'rounded-full hover:rounded-2xl'}`}
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
                        {index === 0 && <hr className='w-10 my-2 border-general-border border-[1.8px]' />}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
