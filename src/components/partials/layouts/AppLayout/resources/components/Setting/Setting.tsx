import { useState } from 'react'
import { SlClose } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'
import { type TCriticalAnyType, type TDataSettingSideBar } from '@core/types/common/critical-any'

import { dataSideBar } from './resources'

const Setting = () => {
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState('MyAccount')
    const componentSetting: TCriticalAnyType = dataSideBar
        .map((items) => items.sub)
        .flat(Infinity)
        .find((itemSub: TCriticalAnyType) => itemSub.name === sideBar)

    return (
        <div className='flex w-full h-full bg-general-gray-100'>
            <div className='w-full flex relative'>
                <div className='h-full w-1/2 bg-general-gray-50' />
                <div className='h-full w-1/2 bg-general-gray-100' />

                <div className='flex container h-full absolute top-0 left-1/2 -translate-x-1/2'>
                    <div className='w-[300px] h-full bg-general-gray-50 shrink-0'>
                        <div className='h-full overflow-auto flex flex-col gap-2  pl-20 pr-3  py-14'>
                            {(dataSideBar as TDataSettingSideBar).map((item, index) => (
                                <div className='flex flex-col gap-2' key={index}>
                                    {item.title && (
                                        <span className='text-xs font-medium text-general-gray-800 px-2'>
                                            {item.title}
                                        </span>
                                    )}
                                    {item.sub.map((itemSub, indexSub) => {
                                        return (
                                            <ActionIcon
                                                onClick={() => setSideBar(itemSub.name)}
                                                classNames={{
                                                    root: `text-left block text-sm duration-200 overflow-hidden flex items-center justify-between px-2 ${
                                                        sideBar === itemSub.name
                                                            ? 'bg-general-gray-200 text-white'
                                                            : 'hover:bg-general-gray-200 text-general-gray-800 hover:text-white '
                                                    }`
                                                }}
                                                className='w-full text-left'
                                                key={indexSub}
                                            >
                                                <span>{itemSub.name}</span>
                                                {itemSub.icon}
                                            </ActionIcon>
                                        )
                                    })}
                                    {dataSideBar.length !== index + 1 && <hr className='border-general-border ' />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='grow h-full bg-general-gray-100 text-white pl-14 pr-20 py-14 overflow-y-auto'>
                        <div className='flex flex-col bg-general-gray-100 gap-y-4 grow relative  '>
                            <div
                                className=' absolute top-15 -right-5 cursor-pointer hover:scale-105 duration-200'
                                onClick={() => dispatch(closeSettingPage())}
                            >
                                <SlClose size={35} />
                            </div>

                            {componentSetting?.component && componentSetting.component}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
