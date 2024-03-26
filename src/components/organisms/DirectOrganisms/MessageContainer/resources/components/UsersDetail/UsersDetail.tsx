/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { type FC } from 'react'
import { usePathname } from 'next/navigation'

import { static_all_users } from '@core/constants/dummy-data'
import { static_data_direct } from '@core/constants/dummy-data/direct/static-data-direct'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type IUsersDetailProps, ViewUserProfileInDm, ViewUsersInGroup } from './resources'

const UsersDetail: FC<IUsersDetailProps> = ({ isShowMember }) => {
    const [, idDirect] = usePathname().split('/channels/me/')
    const DirectData: TCriticalAnyType =
        static_data_direct.find((items) => items.directId === idDirect) ||
        static_all_users.find((items) => items.useId === idDirect)
    const profileData: TCriticalAnyType = static_all_users.find((items) => items.useId === idDirect)

    return (
        <div
            className={`${
                isShowMember ? 'w-full sm:w-[280px] opacity-100' : 'w-0 opacity-0'
            } duration-100 overflow-x-hidden overflow-y-auto bg-general-gray-50 flex-shrink-0 absolute sm:relative h-full sm:h-auto right-0 sm:right-auto`}
        >
            {DirectData.users ? (
                <ViewUsersInGroup DirectData={DirectData} />
            ) : (
                <ViewUserProfileInDm DataProfile={profileData} />
            )}
        </div>
    )
}

export default UsersDetail
