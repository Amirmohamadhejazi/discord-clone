import { type AxiosError, type AxiosRequestConfig, type Method } from 'axios'

interface TAxiosRequestConfigType extends Omit<AxiosRequestConfig, 'url' | 'method'> {
    url: string
    method: Method
}

type TSuccessResponseType<TData> = {
    status: number
    data: TData
    code: 'success'
}

type TErrorResponseType<TError = AxiosError> = {
    code: 'error'
    error: TError
}

type TResponseType<TData, TError> = Promise<TSuccessResponseType<TData> | TErrorResponseType<TError>>

export type { TAxiosRequestConfigType, TResponseType }
