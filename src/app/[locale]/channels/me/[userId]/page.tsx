import { DirectTemplate } from '@templates/DirectTemplate'

const UserDirect = ({ params }: { params: { userId: string } }) => {
    return <DirectTemplate userId={params.userId} />
}

export default UserDirect
