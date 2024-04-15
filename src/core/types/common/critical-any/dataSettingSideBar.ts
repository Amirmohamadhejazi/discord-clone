import type TCriticalAnyType from './critical-any.types'

type TDataSettingSideBar = {
    title?: string
    sub: {
        name: string
        component: TCriticalAnyType
        icon?: TCriticalAnyType
    }[]
}[]
export type { TDataSettingSideBar }
