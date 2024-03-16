import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IDirectsProps {
    dataDirect: {
        directId: string
        name: string
        avatar: TCriticalAnyType
        type: 'dm' | 'group'
        lastUpdateData: string
        status?: string
        member?: number
        users?: {
            name: string
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
        messages: {
            sender: string
            message: string
            messageId: string
            date: string
        }[]
    }
}
export type { IDirectsProps }
