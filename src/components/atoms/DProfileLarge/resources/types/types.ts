import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IProfileLargeProps {
    dataProfile: {
        displayName: string
        username: string
        avatar: TCriticalAnyType
        banner?: TCriticalAnyType
        badges?: TCriticalAnyType
        created?: string
        about?: string
        useId: string
        colors?: string[]
        status: string
        social?: { name: string; type: string; link: string }[]
        me?: boolean
    }
}

export type { IProfileLargeProps }
