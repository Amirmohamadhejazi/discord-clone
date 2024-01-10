import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

/**
 * @author GetWrecked99
 * @date 2023-12-10 15:34:26
 * @description Initializes a new QueryClient instance, suitable for managing data fetching, caching, and updates in React applications using tanstack/react-query.
 * This function creates and returns a QueryClient instance that can be utilized for server-side rendering (SSR) and includes prefetching and dehydrating data capabilities.
 * For a detailed guide on integrating this with SSR, visit: https://tanstack.com/query/v5/docs/react/guides/advanced-ssr#prefetching-and-dehydrating-data
 */

const getQueryClient = cache(() => new QueryClient())

export default getQueryClient
