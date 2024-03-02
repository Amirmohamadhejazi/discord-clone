import { type FC } from 'react'
import { Menu, type MenuLabelProps } from '@mantine/core'

const MenuLabel: FC<MenuLabelProps> = ({ children, ...res }) => {
    return <Menu.Label {...res}>{children}</Menu.Label>
}

export default MenuLabel
