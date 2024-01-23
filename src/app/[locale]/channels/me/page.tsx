import { type Metadata } from 'next'

import HomeTemplate from '@templates/HomeTemplate'

export const metadata: Metadata = {
    title: 'home',
    description: 'home'
}
const home = () => {
    return <HomeTemplate />
}

export default home
