import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IFriendsListProps {
    friendsData: {
        displayName: string
        colors: string[]
        username: string
        created: string
        avatar: TCriticalAnyType
        useId: string
        status: string
        badges: TCriticalAnyType
        social: TCriticalAnyType
        about: string
    }[]
}

export type { IFriendsListProps }
