import { Leave_icon, NitroBadge_icon } from '@molecules/icons'

import { type TDataSettingSideBar } from '@core/types/common/critical-any'

import { Clips, Devices, FriendRequest, MyAccount } from '../components'

export const dataSideBar: TDataSettingSideBar = [
    {
        title: 'USER SETTINGS',
        sub: [
            {
                name: 'MyAccount',
                component: <MyAccount />
            },
            {
                name: 'Profiles',
                component: '<testComponent/>'
            },
            {
                name: 'Privacy & Safety',
                component: '<testComponent/>'
            },
            {
                name: 'Family Center',
                component: '<testComponent/>'
            },
            {
                name: 'Authorized Apps',
                component: '<testComponent/>'
            },
            {
                name: 'Devices',
                component: <Devices />
            },
            {
                name: 'Connections',
                component: '<testComponent/>'
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
                component: '<testComponent/>',
                icon: <NitroBadge_icon className='text-[#af559c]' size='18' />
            },
            {
                name: 'Server Boost',
                component: '<testComponent/>'
            },
            {
                name: 'Subscriptions',
                component: '<testComponent/>'
            },
            {
                name: 'Gift Inventory',
                component: '<testComponent/>'
            },
            {
                name: 'Billing',
                component: '<testComponent/>'
            }
        ]
    },
    {
        title: 'App Settings',
        sub: [
            {
                name: 'Appearance',
                component: '<testComponent/>'
            },
            {
                name: 'Accessibility',
                component: '<testComponent/>'
            },
            {
                name: 'Voice & Video',
                component: '<testComponent/>'
            },
            {
                name: 'Chat',
                component: '<testComponent/>'
            },
            {
                name: 'Notifications',
                component: '<testComponent/>'
            },
            {
                name: 'Keybinds',
                component: '<testComponent/>'
            },
            {
                name: 'Language',
                component: '<testComponent/>'
            },
            {
                name: 'Streamer Mode',
                component: '<testComponent/>'
            },
            {
                name: 'Advanced',
                component: '<testComponent/>'
            }
        ]
    },
    {
        title: 'Activity Settings',
        sub: [
            {
                name: 'Activity Privacy',
                component: '<testComponent/>'
            }
        ]
    },
    {
        sub: [
            {
                name: "What's New",
                component: '<testComponent/>'
            },
            {
                name: 'Merch',
                component: '<testComponent/>'
            },
            {
                name: 'HypeSquad',
                component: '<testComponent/>'
            }
        ]
    },
    {
        sub: [
            {
                name: 'Log Out',
                component: '<testComponent/>',
                icon: <Leave_icon />
            }
        ]
    }
]
