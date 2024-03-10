import React, { type FC } from 'react'
import { Drawer, type DrawerProps } from '@mantine/core'

const DDrawer: FC<DrawerProps> = ({ onClose, opened, ...rest }) => {
    return (
        <Drawer offset={8} radius='md' opened={opened} onClose={onClose} title='Authentication' {...rest}>
            {/* Drawer content */}
            <span>1 children</span>
        </Drawer>
    )
}

export default DDrawer
