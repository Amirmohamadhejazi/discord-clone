import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IViewUsersInGroupProps {
    DirectData: {
        directId: string
        avatar: TCriticalAnyType
        type?: 'group'
        name: string
        lastUpdateData: string
        users: {
            name: string
            colors: string[]
            username: string
            created: string
            avatar: TCriticalAnyType
            useId: string
            status: string
            badges: TCriticalAnyType
            social: TCriticalAnyType
            me: boolean
            about: string
            ownerGroup?: boolean
        }[]
        messages: {
            sender: string
            message: string
            messageId: string
            date: string
        }[]
    }
}
export type { IViewUsersInGroupProps }
