import { type AxiosError } from 'axios'

import { axiosInterceptor } from '@core/services/axios'

import { type TAxiosRequestConfigType, type TResponseType } from './resources'

/**
 * @author GetWrecked99
 * @date 2023-12-10 15:42:25
 * @description Middleware for standardizing Axios requests and responses:
 * - Ensures uniform response structure (success or error).
 * - Centralizes error handling for consistent application-wide management.
 * - Simplifies request handling by encapsulating Axios logic.
 * - Allows configurable Axios request parameters.
 * - Enhances code maintainability and readability via strong typing.
 * @example const getAllExamplesQueryFn = async (params: TParamsType) => await axiosRequestHandler<TExampleType>({ url: '/examples/list', method: 'get', params })
 */

const axiosRequestHandler = async <TResponse, TError = AxiosError>(
    config: TAxiosRequestConfigType
): TResponseType<TResponse, TError> => {
    try {
        const response = await axiosInterceptor(config)
        return { code: 'success', data: response.data, status: response.status }
    } catch (e) {
        return { code: 'error', error: e as TError }
    }
}

export default axiosRequestHandler
