import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IDirectUserProps {
    dataDirect: {
        directId: string
        avatar: TCriticalAnyType
        type: string
        status: string
        name: string
        username: string
        lastUpdateData: string
        messages: {
            sender: string
            message: string
            messageId: string
            date: string
        }[]
    }
}

export type { IDirectUserProps }
