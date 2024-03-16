import { type Metadata } from 'next'

import { StoreTemplate } from '@templates/StoreTemplate'

export const metadata: Metadata = {
    title: 'Discord'
}
const Store = () => {
    return <StoreTemplate />
}

export default Store
