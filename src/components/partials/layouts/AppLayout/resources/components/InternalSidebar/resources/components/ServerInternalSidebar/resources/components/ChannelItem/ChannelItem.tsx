// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { type FC, type ReactNode, useEffect } from 'react'
// import Link from 'next/link'
// import { redirect, usePathname } from 'next/navigation'
// import { useRouter } from 'next/navigation'
// import { IoSettingsSharp } from 'react-icons/io5'
// import { ActionIcon } from '@mantine/core'

// import { Invite_icon, Voice_icon } from '@molecules/icons'
// import Text_icon from '@molecules/icons/Text_icon'

// import { type IChannelItemProps } from './resources'

// const ChannelItem: FC<IChannelItemProps> = ({ name, type, active = false, href, isPrivate }) => {
//     const router = useRouter()
//     const redirectHandler = () => {
//         if (href) {
//             router.push(href)
//         }
//     }
//     return (
//         <ActionIcon
//             // href={href}
//             // component={Link}
//             className={`w-full gap-1 ${
//                 active
//                     ? 'bg-[#404249] text-white'
//                     : 'text-general-gray-900 hover:bg-general-gray-500 hover:text-general-gray-900'
//             } flex items-center bg-transparent  duration-100 cursor-pointer rounded-md px-1 py-1.5 group`}
//             onClick={redirectHandler}
//         >
//             {type === 'text' ? (
//                 <Text_icon size='22' isPrivate={isPrivate} />
//             ) : (
//                 type === 'voice' && <Voice_icon size='22' isPrivate={isPrivate} />
//             )}
//             <div className='w-full truncate text-sm '>
//                 <span className='truncate'>{name} </span>
//             </div>
//             <div className='flex opacity-0 group-hover:opacity-100 duration-100 gap-1 '>
//                 <Invite_icon />
//                 <IoSettingsSharp />
//             </div>
//         </ActionIcon>
//     )
// }

// export default ChannelItem

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
        active ? 'bg-red-200 text-white' : 'text-general-gray-900 hover:bg-general-gray-500 hover:text-general-gray-900'
    } flex items-center bg-transparent  duration-100 cursor-pointer rounded-md px-1 py-1.5 group`

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
        </ActionIcon>
    )
}

export default ChannelItem
