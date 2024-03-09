import { NitroBadge_icon, Shop_icon, UserAvatar_icon } from '@molecules/icons'

const static_data_menu_me = [
    {
        label: 'Friends',
        href: 'channels/me',
        icon: <UserAvatar_icon />,
        id: 0
    },
    {
        label: 'Nitro',
        href: 'channels/nitro',
        icon: <NitroBadge_icon />,
        id: 1
    },
    {
        label: 'Shop',
        href: 'channels/shop',
        icon: <Shop_icon />,

        id: 2
    }
]

export { static_data_menu_me }
