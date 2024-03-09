import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface ICardNitroProps {
    itemsCard: {
        name: string
        title: string
        description: string
        img: TCriticalAnyType
        button?: string
    }
}

export type { ICardNitroProps }
