import { type ReactNode } from 'react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IMenuProps {
    classNames?: TCriticalAnyType
    children: ReactNode
    type?: 'message' | 'socialInChat' | 'socialFriend'
}
export type { IMenuProps }
