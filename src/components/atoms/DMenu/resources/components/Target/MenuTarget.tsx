import { type FC } from 'react'
import { Menu, type MenuTargetProps } from '@mantine/core'

const MenuTarget: FC<MenuTargetProps> = ({ children, ...res }) => {
    return <Menu.Target {...res}>{children}</Menu.Target>
}

export default MenuTarget
