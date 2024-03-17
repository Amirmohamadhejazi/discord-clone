/* eslint-disable @next/next/no-img-element */
import { usePathname } from 'next/navigation'
import { RiArrowDownSLine } from 'react-icons/ri'

import { static_data_servers } from '@core/constants/dummy-data/static-data'

import { CategoryChannels, ChannelItem } from './resources/components'

const ServerInternalSidebar = () => {
    const path = usePathname()
    const [, , idServer] = path.split('/')

    const dataSidebar = static_data_servers.find((itemServers) => itemServers.id === idServer)
    return (
        <div className='h-full flex flex-col '>
            <div className='w-full flex items-center justify-between sticky bg-general-gray-50 top-0 h-12 p-3 shadow-md text-white z-10'>
                <span className='text-sm font-semibold'>{dataSidebar?.serverName}</span>

                <RiArrowDownSLine size={21} />
            </div>
            {dataSidebar?.banner && <img src={dataSidebar?.banner} alt='banner' />}
            <div className='flex flex-col gap-2 p-3'>
                {dataSidebar?.channelsContent.map((items, index) =>
                    items.category ? (
                        <CategoryChannels dataChannels={items} key={index} />
                    ) : (
                        items.channels.map((itemsChannels, indexChannels) => (
                            <ChannelItem
                                active={path === itemsChannels.href}
                                href={itemsChannels.href}
                                name={itemsChannels.name}
                                type={itemsChannels.type}
                                key={indexChannels}
                                isPrivate={itemsChannels.isPrivate}
                            />
                        ))
                    )
                )}
            </div>
        </div>
    )
}

export default ServerInternalSidebar
