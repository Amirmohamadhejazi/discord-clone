/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaDiscord } from 'react-icons/fa6'

import DImageHover from '@molecules/DImageHover/DImageHover'

import { static_data_servers } from '@core/constants/dummy-data'

const ExternalSidebar = () => {
    const [, rootPosition] = usePathname().split('/channels/')

    return (
        <div className='flex py-2 flex-col items-center w-[65px] h-full bg-general-gray overflow-y-auto'>
            <div className='flex'>
                <Link
                    href={`/channels/me`}
                    className={`hover:rounded-xl size-11 flex items-center justify-center cursor-pointer relative group ${
                        rootPosition === 'me' ? 'rounded-xl bg-general-blue ' : 'rounded-full bg-general-gray-100  '
                    }`}
                >
                    <FaDiscord size={26} className='text-3xl  text-white' />
                    <div
                        className={` w-1 rounded-e-md bg-white absolute  top-1/2 transform -translate-x-1/2 -translate-y-1/2
                                ${
                                    rootPosition === 'me'
                                        ? 'h-3/4 visible -left-2 '
                                        : 'h-2/4 invisible -left-full group-hover:visible group-hover:-left-2'
                                } duration-200 `}
                    />
                </Link>
            </div>
            <div className='w-full flex px-5 my-2'>
                <hr className='w-full border-[1.5px] border-general-border ' />
            </div>

            {static_data_servers.map((itemsExternalSide) => {
                const active = rootPosition ? rootPosition.includes(itemsExternalSide.id) : false

                return (
                    <Link
                        className='relative group'
                        href={`/channels/${itemsExternalSide.id}`}
                        key={itemsExternalSide.id}
                    >
                        <div
                            className={`size-11 hover:rounded-xl overflow-hidden ${
                                active ? 'rounded-xl  ' : 'rounded-full'
                            } relative group`}
                        >
                            <DImageHover
                                activeAnimation={active}
                                dataImage={{ png: itemsExternalSide.icon_image, gif: itemsExternalSide.icon_gif }}
                            />
                        </div>
                        <div
                            className={` w-1 rounded-e-md bg-white absolute  top-1/2 transform -translate-x-1/2 -translate-y-1/2
                                ${
                                    active
                                        ? 'h-3/4 visible -left-2 '
                                        : 'h-2/4 invisible -left-full group-hover:visible group-hover:-left-2'
                                } duration-200 `}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

export default ExternalSidebar
