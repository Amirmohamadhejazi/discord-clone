import { type FC } from 'react'
import { BiSearch } from 'react-icons/bi'
import { Input } from '@mantine/core'

import { FriendsList } from '@organisms/HomeOrganisms'

import { WumpusNotify } from '@molecules/WumpusNotify'

import { static_all_users } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type IMeFriendsProps } from './resources'

const MeFriends: FC<IMeFriendsProps> = ({ tabMenu }) => {
    const dataMembersHandler = (): TCriticalAnyType => {
        switch (tabMenu) {
            case 1:
                return static_all_users.filter((items) => !items.me && items.status !== 'offline')
            case 2:
                return static_all_users.filter((items) => !items.me)
            case 3:
                return []
            case 4:
                return []
            case 5:
                return []
        }
    }
    const dataMembers = dataMembersHandler()
    const statusTab = tabMenu === 1 ? 'ONLINE' : tabMenu === 2 ? 'ALL FRIENDS' : tabMenu === 3 ? 'PENDING' : 'BLOCKED'
    return (
        <div className='h-full flex flex-col ml-5 mr-4 '>
            <div className='mt-4'>
                <Input
                    classNames={{
                        input: 'w-full h-30 px-2 text-sm placeholder:text-general-gray-800 text-white font-semibold border-0 bg-general-gray focus:outline-0 rounded-md'
                    }}
                    placeholder='Search'
                    rightSection={<BiSearch size={18} />}
                />
            </div>
            <div className='mt-4 mb-2 grow overflow-auto text-xs'>
                {dataMembers?.length > 0 ? (
                    <>
                        <div className='flex gap-x-1 items-center'>
                            <span className='font-semibold'>{statusTab}</span>
                            <span> -- {dataMembers.length}</span>
                        </div>
                        <div className='mt-2'>
                            <FriendsList friendsData={dataMembers} />
                        </div>
                    </>
                ) : (
                    <div className='flex flex-col h-full overflow-auto'>
                        <div className='grow flex justify-center items-center'>
                            <WumpusNotify type={tabMenu} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MeFriends
