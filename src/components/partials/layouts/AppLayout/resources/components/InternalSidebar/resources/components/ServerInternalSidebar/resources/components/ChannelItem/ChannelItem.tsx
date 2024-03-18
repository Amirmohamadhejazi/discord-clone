/* eslint-disable @typescript-eslint/no-unused-vars */

import { type FC, type ReactNode, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IoSettingsSharp } from 'react-icons/io5'
import { ActionIcon, Button } from '@mantine/core'

import { Invite_icon, Voice_icon } from '@molecules/icons'
import Text_icon from '@molecules/icons/Text_icon'

import { type IChannelItemProps } from './resources'

const ChannelItem: FC<IChannelItemProps> = ({ name, type, active = false, href, isPrivate }) => {
    const classNameCustom = `w-full gap-1 ${
        active
            ? 'bg-general-gray-500  text-white'
            : 'text-general-gray-900 hover:bg-general-gray-500  bg-transparent hover:text-general-gray-900'
    } flex items-center  duration-100 cursor-pointer rounded-md px-1 py-1.5 group`

    return (
        <ActionIcon
            renderRoot={({ children }) =>
                href ? (
                    <Link href={href} className={classNameCustom}>
                        {children}
                    </Link>
                ) : (
                    <ActionIcon className={classNameCustom}>{children}</ActionIcon>
                )
            }
        >
            {type === 'text' ? (
                <Text_icon size='19' className='shrink-0' isPrivate={isPrivate} />
            ) : (
                type === 'voice' && <Voice_icon size='19' className='shrink-0' isPrivate={isPrivate} />
            )}
            <div className='w-full truncate text-sm '>
                <span className='truncate'>{name} </span>
            </div>
            <div className={` ${active ? 'flex' : 'hidden group-hover:flex'} duration-100 gap-1 `}>
                <Invite_icon />
                <IoSettingsSharp />
            </div>
        </ActionIcon>
    )
}

export default ChannelItem
