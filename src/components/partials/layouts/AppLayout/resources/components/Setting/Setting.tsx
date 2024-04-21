import { useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2'
import { SlClose } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { ActionIcon } from '@mantine/core'

import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'
import { type TCriticalAnyType, type TDataSettingSideBar } from '@core/types/common/critical-any'

import { dataSideBar } from './resources'

const Setting = () => {
    const dispatch = useDispatch()
    const [sideBar, setSideBar] = useState('MyAccount')
    const [sideBarMobile, setSideBarMobile] = useState(false)
    const componentSetting: TCriticalAnyType = dataSideBar
        .map((items) => items.sub)
        .flat(Infinity)
        .find((itemSub: TCriticalAnyType) => itemSub.name === sideBar)

    return (
        <div className='flex w-full h-full bg-general-gray-100'>
            <div className='w-full flex relative'>
                <div className='h-full w-1/2 bg-general-gray-50' />
                <div className='h-full w-1/2 bg-general-gray-100' />

                <div className='flex justify-center size-full absolute top-0 left-1/2 -translate-x-1/2'>
                    <div className='w-1/3  hidden md:flex justify-end h-full overflow-auto'>
                        <div
                            className={`w-full md:w-[200px] h-full overflow-auto flex-col gap-2 pr-3  py-14 bg-general-gray-50 shrink-0 flex`}
                        >
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
                                                    root: `text-left block text-sm duration-200 overflow-hidden flex items-center justify-between px-2 outline-transparent ${
                                                        sideBar === itemSub.name
                                                            ? 'bg-general-gray-200 text-white'
                                                            : 'hover:bg-general-gray-200 text-general-gray-800 hover:text-white transparent'
                                                    }`
                                                }}
                                                className='w-full text-left '
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
                    <div className='w-full md:w-2/3 flex justify-center md:justify-start bg-general-gray-100 h-full overflow-auto'>
                        <div className='md:max-w-[600px] h-full bg-general-gray-100 text-white  px-8 py-5 md:py-14  '>
                            <div className='flex items-center justify-between relative'>
                                <ActionIcon
                                    classNames={{ root: 'w-auto  md:hidden' }}
                                    onClick={() => setSideBarMobile((prev) => !prev)}
                                >
                                    <HiMiniBars3 size={28} />
                                </ActionIcon>
                                <div
                                    className='md:absolute md:top-15 md:-right-5 cursor-pointer hover:scale-105 duration-200'
                                    onClick={() => dispatch(closeSettingPage())}
                                >
                                    <SlClose size={33} />
                                </div>
                            </div>
                            {`${sideBarMobile}`}
                            {componentSetting?.component && componentSetting.component}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
