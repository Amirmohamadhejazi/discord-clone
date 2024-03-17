'use client'
import { type FC } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { RiArrowDownSLine } from 'react-icons/ri'
import { useDisclosure } from '@mantine/hooks'

import { DCollapse } from '@atoms/DCollapse'

import { type ICategoryChannelsProps } from './resources'
import { ChannelItem } from '../ChannelItem'

const CategoryChannels: FC<ICategoryChannelsProps> = ({ dataChannels }) => {
    const [openedCollapse, { toggle: toggleCollapse }] = useDisclosure(true)

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col select-none'>
                <div className='flex items-center justify-between cursor-pointer ' onClick={toggleCollapse}>
                    <RiArrowDownSLine className={`duration-150 ${openedCollapse ? '' : '-rotate-90'}`} size={18} />
                    <span className='w-full text-xs truncate'>{dataChannels.category.name}</span>

                    <FaPlus size={12} />
                </div>
                <DCollapse opened={openedCollapse}>
                    {dataChannels.channels.map((itemChannels, indexChannel) => (
                        <ChannelItem
                            href={itemChannels.href}
                            type={itemChannels.type}
                            isPrivate={itemChannels.isPrivate}
                            name={itemChannels.name}
                            id={itemChannels.id}
                            key={indexChannel}
                        />
                    ))}
                </DCollapse>
            </div>
        </div>
    )
}

export default CategoryChannels