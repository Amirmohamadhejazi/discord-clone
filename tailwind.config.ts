import type { Config } from 'tailwindcss'

import { tailwindColorPalette } from '@core/utils/colors/tailwind-color-palette'

const config: Config = {
    important: true,
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1440px'
        },
        extend: {
            colors: tailwindColorPalette,
            boxShadow: {
                sm: '-2px 2px 15px -1px rgba(113, 113, 113, 0.12)',
                md: '-2px 2px 20px -1px rgba(113, 113, 113, 0.20)',
                lg: '0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.10)'
            },
            fontFamily: {
                'iran-yekan': ['var(--font-iran-yekan)']
            }
        }
    },
    plugins: []
}

export default config
