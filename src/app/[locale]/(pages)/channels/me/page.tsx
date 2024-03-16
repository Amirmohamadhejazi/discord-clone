import { type Metadata } from 'next'

import { MeTemplate } from '@templates/MeTemplate'

export const metadata: Metadata = {
    title: 'Discord | Friends'
}
const Page = () => {
    return (
        <div className='h-full w-full'>
            <MeTemplate />
        </div>
    )
}

export default Page
