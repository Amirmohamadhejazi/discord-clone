import { type FC, type ReactComponentElement } from 'react'
import {
    type MenuDropdownProps,
    type MenuItemProps,
    type MenuLabelProps,
    type MenuProps,
    type MenuTargetProps
} from '@mantine/core'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

type TAllowedChildrenType =
    | ReactComponentElement<FC<MenuDropdownProps>, MenuDropdownProps>
    | ReactComponentElement<FC<MenuTargetProps>, MenuTargetProps>
    | ReactComponentElement<FC<MenuLabelProps>, MenuLabelProps>
    | ReactComponentElement<FC<MenuItemProps>, MenuItemProps>

interface IMenuProps extends Omit<MenuProps, 'children'> {
    children: TAllowedChildrenType[] | boolean
}

type TMenuType = FC<IMenuProps> & { Target: FC<MenuTargetProps> } & { Dropdown: FC<MenuDropdownProps> } & {
    Label: FC<MenuLabelProps>
} & { Item: FC<MenuItemProps & { component?: TCriticalAnyType; href?: string }> }

export default TMenuType
