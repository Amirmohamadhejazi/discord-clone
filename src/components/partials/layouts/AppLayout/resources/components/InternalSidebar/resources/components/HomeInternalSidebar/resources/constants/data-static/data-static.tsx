import { NitroBadge_icon, Shop_icon, UserAvatar_icon } from '@molecules/icons'

const data_static = [
    {
        name: 'Friends',
        href: '/channels/me',
        icon: <UserAvatar_icon size='24' />
    },
    {
        name: 'Nitro',
        href: '/store',
        icon: <NitroBadge_icon size='24' />
    },
    {
        name: 'Shop',
        href: '/shop',
        icon: <Shop_icon size='24' />
    }
]

export { data_static }
