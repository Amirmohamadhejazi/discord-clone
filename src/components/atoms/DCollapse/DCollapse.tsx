import React, { type FC } from 'react'
import { Collapse } from '@mantine/core'

import { type IDCollapse } from './resources'

const DCollapse: FC<IDCollapse> = ({ opened, children }) => {
    return (
        <Collapse in={opened} transitionDuration={150} transitionTimingFunction='ease-in-out'>
            {children}
        </Collapse>
    )
}

export default DCollapse
