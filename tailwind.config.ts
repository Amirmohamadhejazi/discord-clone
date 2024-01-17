/** @type {import('tailwindcss').Config} */

import { tailwindColorPalette } from './src/core/utils/colors/tailwind-color-palette'

const config = {
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
            colors: tailwindColorPalette
        }
    },
    plugins: []
}

export default config
