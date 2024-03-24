'use client'
import { type FC } from 'react'

import { type IUsersDetailProps, ViewUsers } from './resources'

const UsersDetail: FC<IUsersDetailProps> = ({ isShowMember, channelData }) => {
    // const [, idDirect] = usePathname().split('/channels/me/')

    return (
        <div
            className={`${
                isShowMember ? 'w-full sm:w-[300px] opacity-100' : 'w-0 opacity-0'
            } duration-100 overflow-x-hidden overflow-y-auto bg-general-gray-50 flex-shrink-0 absolute sm:relative h-full sm:h-auto right-0 sm:right-auto select-none`}
        >
            {/* users */}
            <ViewUsers channelData={channelData} />
        </div>
    )
}

export default UsersDetail
