import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IViewUserProfileInDmProps {
    DataProfile: {
        name: string
        username: string
        created: string
        avatar: TCriticalAnyType
        banner?: TCriticalAnyType
        badges: TCriticalAnyType
        colors?: string[]
        status: string
        about: string
        social: TCriticalAnyType
        useId: string
    }
}
export type { IViewUserProfileInDmProps }
