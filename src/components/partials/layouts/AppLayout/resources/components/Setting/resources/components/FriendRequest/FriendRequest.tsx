import React from 'react'

import { DSwitch } from '@molecules/DSwitch'

const FriendRequest = () => {
    const dataOptions = ['Everyone', 'Friends of Friends', 'Server Members']

    return (
        <>
            <span className=' text-lg text-white font-semibold'>Friend Request</span>

            <div>
                <span className='text-xs text-general-gray-900 font-medium  '>WHO CAN SEND YOU A FRIEND REQUEST</span>
                <div className='flex flex-col divide-y divide-general-border'>
                    {dataOptions.map((items, index) => (
                        <div className='flex items-center justify-between py-3' key={index}>
                            <span className='text-sm'>{items}</span>
                            <DSwitch />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FriendRequest
