import { type ReactNode } from 'react'

import type TCriticalAnyType from './critical-any.types'

type TDataSettingSideBar = {
    title?: string
    sub: {
        name: string
        component?: ReactNode
        icon?: TCriticalAnyType
    }[]
}[]
export type { TDataSettingSideBar }
