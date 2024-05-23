import { type NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { DEFAULT_LOCALE, LOCALES } from '@core/configs/i18n'

export default function middleware(request: NextRequest) {
    const intlMiddleware = createMiddleware({
        locales: LOCALES,
        defaultLocale: DEFAULT_LOCALE,
        localePrefix: 'as-needed'
    })

    const response = intlMiddleware(request)
    response.headers.set('x-url', request.nextUrl.pathname)

    const baseUrl = new URL('/', request.url).href

    if (request.url === baseUrl) {
        return NextResponse.redirect(new URL('/channels/me', request.url))
    }

    return response
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|api|images|icons|fonts|favicon.ico).*)']
}
