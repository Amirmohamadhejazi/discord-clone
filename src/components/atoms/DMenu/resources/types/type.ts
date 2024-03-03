import { type ReactNode } from 'react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IMenuProps {
    classNames?: TCriticalAnyType
    children: ReactNode
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
    type?: 'messageInChannel' | 'socialInChat' | 'socialFriend'
}
export type { IMenuProps }
