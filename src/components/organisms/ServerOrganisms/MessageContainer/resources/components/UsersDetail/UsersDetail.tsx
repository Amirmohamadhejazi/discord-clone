/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { type FC } from 'react'

import { static_data_direct } from '@core/constants/dummy-data/static-data'

import { type IUsersDetailProps, ViewUsersInGroup } from './resources'

const UsersDetail: FC<IUsersDetailProps> = ({ isShowMember }) => {
    // const [, idDirect] = usePathname().split('/channels/me/')

    return (
        <div
            className={`${
                isShowMember ? 'w-full sm:w-[300px] opacity-100' : 'w-0 opacity-0'
            } duration-100 overflow-x-hidden overflow-y-auto bg-general-gray-50 flex-shrink-0 absolute sm:relative h-full sm:h-auto right-0 sm:right-auto`}
        >
            users
            {/* <ViewUsersInGroup DirectData={static_data_direct[0]} /> */}
        </div>
    )
}

export default UsersDetail
