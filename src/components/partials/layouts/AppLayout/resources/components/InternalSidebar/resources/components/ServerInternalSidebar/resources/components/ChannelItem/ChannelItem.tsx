/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FC, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoSettingsSharp } from 'react-icons/io5'
import { ActionIcon } from '@mantine/core'

import { Invite_icon, Voice_icon } from '@molecules/icons'
import Text_icon from '@molecules/icons/Text_icon'

import { type IChannelItemProps } from './resources'

const ChannelItem: FC<IChannelItemProps> = ({ name, id, href, type, isPrivate }) => {
    const path = usePathname()
    console.log(path, href)

    const LinkHandler = ({ children }: { children: ReactNode }) => {
        if (type === 'text') {
            return (
                <ActionIcon
                    href={href}
                    component={Link}
                    className={`w-full gap-1 ${
                        path === href
                            ? 'bg-[#404249] text-white'
                            : 'text-general-gray-900 hover:bg-general-gray-500 hover:text-general-gray-900'
                    } flex items-center bg-transparent  duration-100 cursor-pointer rounded-md px-1 py-1.5 group`}
                >
                    {children}
                </ActionIcon>
            )
        } else {
            return (
                <div className='w-full gap-1 flex items-center bg-transparent text-general-gray-900 hover:bg-general-gray-500 hover:text-general-gray-900 duration-100 cursor-pointer rounded-md px-1 py-1.5 group'>
                    {children}
                </div>
            )
        }
    }

    return (
        <LinkHandler>
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
        </LinkHandler>
    )
}

export default ChannelItem
