/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoSettingsSharp } from 'react-icons/io5'
import { ActionIcon } from '@mantine/core'

import { Invite_icon, Voice_icon } from '@molecules/icons'
import Text_icon from '@molecules/icons/Text_icon'

import { type IChannelItemProps } from './resources'

const ChannelItem: FC<IChannelItemProps> = ({ name, id, href, type, isPrivate }) => {
    const path = usePathname().split('/channels/')
    console.log(href)

    return (
        <ActionIcon
            href={href || ''}
            component={Link}
            className='w-full gap-1 flex items-center bg-transparent text-general-gray-900 hover:bg-general-gray-500 hover:text-general-gray-900 duration-100 cursor-pointer rounded-md px-1 py-1.5 group'
        >
            {type === 'text' ? (
                <Text_icon size='22' isPrivate={isPrivate} />
            ) : (
                type === 'voice' && <Voice_icon size='22' isPrivate={isPrivate} />
            )}
            <div className='w-full truncate text-sm '>
                <span className='truncate'>{name} </span>
            </div>
            <div className='flex opacity-0 group-hover:opacity-100 duration-100 gap-1 '>
                <Invite_icon />
                <IoSettingsSharp />
            </div>
            {/* <ActionIcon className='bg-transparent'> */}
        </ActionIcon>
    )
}

export default ChannelItem
