'use client'
import React, { type FC, useState } from 'react'
import { Switch, type SwitchProps } from '@mantine/core'

import { SwitchIcon } from './resources'
const DSwitch: FC<SwitchProps> = ({}) => {
    const [checked, setChecked] = useState(Math.random() < 0.5)
    return (
        <Switch
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            classNames={{
                thumb: 'border-0 ',
                track: `cursor-pointer border-0 duration-300 ${checked ? 'bg-[#23a55a]' : 'bg-[#80848e]'}`
            }}
            color='#23a55a'
            size='md'
            thumbIcon={<SwitchIcon isChecked={checked} />}
        />
    )
}

export default DSwitch
