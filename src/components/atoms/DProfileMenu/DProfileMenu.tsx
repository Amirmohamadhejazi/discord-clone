/* eslint-disable @next/next/no-img-element */
import { type FC, useState } from 'react'
import { Menu } from '@mantine/core'

import { statusHandler } from '@core/utils/common/statusHandler'

import { type IMenuProps } from './resources'
const DProfileMenu: FC<IMenuProps> = ({ classNames, children, dataProfile, position = 'right-start', ...res }) => {
    const [opened, setOpened] = useState(false)
    const { colors = [], displayName, username, avatar, banner, created, about, status } = dataProfile

    return (
        <div className='font-light cursor-pointer'>
            <Menu
                position={position}
                withinPortal={false}
                closeOnEscape={true}
                shadow={'xs'}
                offset={8}
                arrowPosition='center'
                transitionProps={{ transition: 'pop-top-left', duration: 150 }}
                classNames={{
                    ...classNames,
                    dropdown: `z-[1] fixed border-0 p-0  cursor-default`,
                    itemLabel: 'font-light text-xs ',
                    label: 'text-red-300'
                }}
                opened={opened}
                onChange={() => {}}
                onOpen={() => setOpened(true)}
                onClose={() => setOpened(false)}
                {...res}
            >
                <Menu.Target>{children}</Menu.Target>

                <Menu.Dropdown
                    style={{
                        background: `linear-gradient(to bottom, ${colors[0] || 'black'} 30%, ${colors[1] || 'gray'}`
                    }}
                >
                    <div
                        className={`flex  flex-col items-center justify-between w-[290px] ${
                            banner ? 'min-h-[335px]' : 'min-h-[280px]'
                        } max-h-[550px] m-[3px]  rounded-md overflow-hidden`}
                    >
                        <div className={`w-full ${banner ? 'h-[110px]' : 'h-16'}  relative bg-black`}>
                            {banner && <img src={banner.src} alt='avatar' className='w-full h-full object-cover' />}
                            <div className='w-20 h-20 p-1 bg-black bg-opacity-35 absolute -bottom-10 left-5 rounded-full'>
                                <div className='relative'>
                                    <img
                                        src={avatar.src}
                                        alt='avatar'
                                        className='w-full h-full object-cover rounded-full'
                                    />
                                    <div className='w-5 h-5  absolute -right-1 bg-general-gray-100 -bottom-0 rounded-full'>
                                        <img
                                            src={statusHandler(status)}
                                            className='w-full h-full  object-cover  '
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-3 text-white'>
                            <div className='w-full min-h-32 flex flex-col justify-between bg-black bg-opacity-65  rounded-md p-3'>
                                <div className='flex flex-col gap-2 font-semibold '>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>{displayName}</span>
                                        <span className='text-xs'>{username}</span>
                                    </div>
                                    <hr />
                                    <div className='flex flex-col gap-y-1 max-h-32 overflow-auto'>
                                        <div className='flex flex-col text-xs'>
                                            <span className='font-bold'>About me</span>
                                            <div className='flex text-[10px]'>
                                                <span>{about}</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col text-xs'>
                                            <span className='font-bold'>MEMBER SINCE</span>
                                            <span className=' text-[10px]'>{created}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default DProfileMenu
