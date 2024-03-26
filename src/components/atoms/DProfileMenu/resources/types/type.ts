import { type ReactNode } from 'react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IMenuProps {
    classNames?: TCriticalAnyType
    children: ReactNode
    dataProfile: {
        name: string
        username: string
        avatar: TCriticalAnyType
        banner?: TCriticalAnyType
        badges?: TCriticalAnyType
        created?: string
        about?: string
        useId: string
        colors?: string[]
        status: string
        roles?: string[]
    }
    position?:
        | 'bottom-start'
        | 'bottom-end'
        | 'bottom'
        | 'top-start'
        | 'top-end'
        | 'top'
        | 'left-start'
        | 'left-end'
        | 'left'
        | 'right-start'
        | 'right-end'
        | 'right'
}
export type { IMenuProps }
