'use client'

import { useState } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { QueryParamProvider } from 'use-query-params'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { type TWrapperWithChildrenType } from '@core/types/common/wrapper-with-children'

const RootProvider = ({ children }: TWrapperWithChildrenType) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000,
                        refetchOnWindowFocus: false,
                        retry: false
                    }
                }
            })
    )

    return (
        <QueryClientProvider client={queryClient}>
            <QueryParamProvider adapter={NextAdapterApp}>
                <MantineProvider>{children}</MantineProvider>
            </QueryParamProvider>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' />
        </QueryClientProvider>
    )
}

export { RootProvider }
