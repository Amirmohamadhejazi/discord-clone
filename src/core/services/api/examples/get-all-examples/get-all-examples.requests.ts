import { axiosRequestHandler } from '@core/services/axios'
import { type TExampleType } from '@core/types/api/example'

import type TParamsType from './params.types'

const getAllExamplesQueryFn = async (params: TParamsType) =>
    await axiosRequestHandler<TExampleType>({ url: '/examples/list', method: 'get', params })

export default getAllExamplesQueryFn
