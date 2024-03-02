import { forwardRef } from 'react'
import { createPolymorphicComponent, Menu, type MenuItemProps } from '@mantine/core'

const CustomMenuItem = forwardRef<HTMLButtonElement, MenuItemProps>(({ className, children, ...res }, ref) => {
    return (
        <Menu.Item ref={ref} className={`${className}`} {...res}>
            {children}
        </Menu.Item>
    )
})

CustomMenuItem.displayName = 'MenuItem'

const DMenuItem = createPolymorphicComponent<'button', MenuItemProps>(CustomMenuItem)

export default DMenuItem
