import { type Metadata } from 'next'

import NitroTemplate from '@templates/NitroTemplate'

export const metadata: Metadata = {
    title: 'Nitro',
    description: 'Nitro'
}
const Nitro = () => {
    return <NitroTemplate />
}

export default Nitro
