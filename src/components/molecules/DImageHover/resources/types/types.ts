import { type TCriticalAnyType } from '@core/types/common/critical-any'

interface IDataImageProps {
    dataImage: { png: TCriticalAnyType; gif?: TCriticalAnyType }
    activeAnimation?: boolean
}

export type { IDataImageProps }
