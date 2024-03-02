import { type FC } from 'react'
import { Menu, type MenuDropdownProps } from '@mantine/core'

const MenuDropdown: FC<MenuDropdownProps> = ({ children, ...res }) => {
    return <Menu.Dropdown {...res}>{children}</Menu.Dropdown>
}

export default MenuDropdown
