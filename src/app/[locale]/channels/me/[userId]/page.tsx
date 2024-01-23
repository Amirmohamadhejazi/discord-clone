import { type Metadata } from 'next'

import { DirectTemplate } from '@templates/DirectTemplate'

export const metadata: Metadata = {
    title: 'Direct',
    description: 'Direct'
}

const UserDirect = ({ params }: { params: { userId: string } }) => {
    return <DirectTemplate userId={params.userId} />
}

export default UserDirect
