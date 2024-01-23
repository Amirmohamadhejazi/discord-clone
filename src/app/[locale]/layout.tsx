import { type ReactNode } from 'react'
import { notFound } from 'next/navigation'

import { RootProvider } from '@partials/providers/RootProvider'

import { inter } from '@core/configs/fonts'
import { LOCALES } from '@core/configs/i18n'

import '@styles/globals.css'

interface IRootLayoutProps {
    children: ReactNode
    params: { locale: string }
}

const RootLayout = ({ children, params: { locale } }: IRootLayoutProps) => {
    if (!LOCALES.includes(locale)) notFound()

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    )
}

export default RootLayout
