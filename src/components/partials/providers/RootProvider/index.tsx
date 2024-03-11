'use client'

import { useState } from 'react'
import NextAdapterApp from 'next-query-params/app'
import { Provider } from 'react-redux'
import { QueryParamProvider } from 'use-query-params'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from '@core/services/stores/Redux/store'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <QueryParamProvider adapter={NextAdapterApp}>
                    <MantineProvider>{children}</MantineProvider>
                </QueryParamProvider>
                {/* <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' /> */}
            </QueryClientProvider>
        </Provider>
    )
}

export { RootProvider }
