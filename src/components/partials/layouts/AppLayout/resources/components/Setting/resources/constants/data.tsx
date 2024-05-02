import { Leave_icon, NitroBadge_icon } from '@molecules/icons'

import { type TDataSettingSideBar } from '@core/types/common/critical-any'

import { Clips, Devices, FriendRequest, MyAccount, Subscriptions } from '../components'

export const dataSideBar: TDataSettingSideBar = [
    {
        title: 'USER SETTINGS',
        sub: [
            {
                name: 'MyAccount',
                component: <MyAccount />
            },
            {
                name: 'Profiles'
            },
            {
                name: 'Privacy & Safety'
            },
            {
                name: 'Family Center'
            },
            {
                name: 'Authorized Apps'
            },
            {
                name: 'Devices',
                component: <Devices />
            },
            {
                name: 'Connections'
            },
            {
                name: 'Clips',
                component: <Clips />
            },
            {
                name: 'Friend Requests',
                component: <FriendRequest />
            }
        ]
    },
    {
        title: 'Billing Settings',
        sub: [
            {
                name: 'Nitro',
                icon: <NitroBadge_icon className='text-[#af559c]' size='18' />
            },
            {
                name: 'Server Boost'
            },
            {
                name: 'Subscriptions',
                component: <Subscriptions />
            },
            {
                name: 'Gift Inventory'
            },
            {
                name: 'Billing'
            }
        ]
    },
    {
        title: 'App Settings',
        sub: [
            {
                name: 'Appearance'
            },
            {
                name: 'Accessibility'
            },
            {
                name: 'Voice & Video'
            },
            {
                name: 'Chat'
            },
            {
                name: 'Notifications'
            },
            {
                name: 'Keybinds'
            },
            {
                name: 'Language'
            },
            {
                name: 'Streamer Mode'
            },
            {
                name: 'Advanced'
            }
        ]
    },
    {
        title: 'Activity Settings',
        sub: [
            {
                name: 'Activity Privacy'
            }
        ]
    },
    {
        sub: [
            {
                name: "What's New"
            },
            {
                name: 'Merch'
            },
            {
                name: 'HypeSquad'
            }
        ]
    },
    {
        sub: [
            {
                name: 'Log Out',
                icon: <Leave_icon />
            }
        ]
    }
]
