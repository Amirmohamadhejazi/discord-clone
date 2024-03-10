import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface ICustomConsole {
    text: string
    fontSize?: number
    type?: 'manual' | 'error' | 'success' | 'special'
    anotherItems?: TCriticalAnyType
}

export type { ICustomConsole }
