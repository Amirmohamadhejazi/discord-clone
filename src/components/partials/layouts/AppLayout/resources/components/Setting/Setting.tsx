import { useState } from 'react'
import { SlClose } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'

import { MyAccount } from './resources/components'

const Setting = () => {
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState('MyAccount')
    const dataSideBar = [
        {
            title: 'USER SETTINGS',
            sub: [
                'MyAccount',
                'Profiles',
                'Privacy & Safety',
                'Family Center',
                'Authorized Apps',
                'Devices',
                'Connections',
                'Clips',
                'Friend Requests'
            ]
        },
        {
            title: 'Billing Settings',
            sub: ['Nitro', 'Server Boost', 'Subscriptions', 'Gift Inventory', 'Billing']
        },
        {
            title: 'App Settings',
            sub: [
                'Appearance',
                'Accessibility',
                'Voice & Video',
                'Chat',
                'Notifications',
                'Keybinds',
                'Language',
                'Streamer Mode',
                'Advanced'
            ]
        },
        {
            title: 'Activity Settings',
            sub: ['Activity Privacy']
        },
        {
            sub: [`What's New`, `Merch`, `HypeSquad`]
        },
        {
            sub: [`Log Out`]
        }
    ]

    // const pageHandler = () => {
    //     switch (sideBar) {
    //         case 'MyAccount':
    //             return <MyAccount />
    //         case 'Profiles':
    //             return 'Profiles'
    //         case 'Privacy & Safety':
    //             return 'Privacy & Safety'
    //         case 'Family Center':
    //             return 'Family Center'
    //         case 'Authorized Apps':
    //             return 'Authorized Apps'
    //         case 'Devices':
    //             return 'Devices'
    //         case 'Connections':
    //             return 'Connections'
    //         case 'Clips':
    //             return 'Clips'
    //         case 'Friend Requests':
    //             return 'Friend Requests'

    //         case 'Nitro':
    //             return 'Nitro'
    //         case 'Server Boost':
    //             return 'Server Boost'
    //         case 'Subscriptions':
    //             return 'Subscriptions'
    //         case 'Gift Inventory':
    //             return 'Gift Inventory'
    //         case 'Billing':
    //             return 'Billing'
    //     }
    // }
    return (
        <div className='flex w-full h-full bg-general-gray-100   relative'>
            <div className='w-full h-full flex '>
                <div className='bg-general-gray-50 w-[600px]   pl-72'>
                    <div className='h-full overflow-auto flex flex-col gap-2 p-2 pt-12 *:px-2'>
                        {dataSideBar.map((item, index) => (
                            <>
                                <span className='text-xs font-medium text-general-gray-800'>{item.title}</span>
                                {item.sub.map((itemSub, indexSub) => {
                                    return (
                                        <ActionIcon
                                            onClick={() => setSideBar(itemSub)}
                                            classNames={{
                                                root: `text-left block text-sm duration-200 overflow-hidden ${
                                                    sideBar === itemSub
                                                        ? 'bg-general-gray-200 text-white'
                                                        : 'hover:bg-general-gray-200 text-general-gray-800 hover:text-white '
                                                }`
                                            }}
                                            className='w-full text-left'
                                            key={indexSub}
                                        >
                                            {itemSub}
                                        </ActionIcon>
                                    )
                                })}
                                {dataSideBar.length !== index + 1 && <hr className='border-general-border ' />}
                            </>
                        ))}
                    </div>
                </div>
                <div className='  bg-general-gray-100  pr-72 text-white px-8 '>
                    <div className='flex flex-col pt-12 bg-general-gray-100 gap-y-4 grow relative'>
                        <div
                            className=' absolute top-15 -right-5 cursor-pointer hover:scale-105 duration-200'
                            onClick={() => dispatch(closeSettingPage())}
                        >
                            <SlClose size={35} />
                        </div>
                        {/* {pageHandler()} */}
                        <MyAccount />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
