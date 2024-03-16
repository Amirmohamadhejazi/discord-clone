import { type Metadata } from 'next'

import { ShopTemplate } from '@templates/ShopTemplate'
export const metadata: Metadata = {
    title: 'Discord'
}
const Shop = () => {
    return <ShopTemplate />
}

export default Shop
