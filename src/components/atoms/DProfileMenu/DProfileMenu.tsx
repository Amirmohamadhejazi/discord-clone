/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { type FC, useState } from 'react'
import { Menu, Overlay, TextInput, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { DModal } from '@atoms/DModal'
import { DProfileLarge } from '@atoms/DProfileLarge'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { badgeHandler } from '@core/utils/common/badgeHandler/badgeHandler'

import { nitroIconImg } from '@public/images'

import { type IMenuProps } from './resources'
const DProfileMenu: FC<IMenuProps> = ({ classNames, children, dataProfile, position = 'right-start', ...res }) => {
    const [opened, setOpened] = useState(false)
    const [openedProfileLarge, { open: openProfileLarge, close: closeProfileLarge }] = useDisclosure(false)
    const { colors = [], name, username, avatar, banner, created, about, status } = dataProfile

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
                        background: `linear-gradient(to bottom, ${colors[0] || 'gray'} 30%, ${colors[1] || 'white'}`
                    }}
                >
                    <div
                        className={`flex bg-opacity-40 bg-black flex-col items-center w-[290px]  max-h-[550px] m-[3px]  rounded-md overflow-hidden group`}
                    >
                        <div className={`w-full ${banner ? 'h-[110px]' : 'h-16'}  relative bg-black`}>
                            {banner && (
                                <div className='w-full h-full relative'>
                                    <img src={banner.src} alt='avatar' className='w-full h-full object-cover' />
                                    <div
                                        className={`absolute duration-300 invisible opacity-0 rounded-full bg-black bg-opacity-15
                                        group-hover:opacity-100 group-hover:visible right-2 -top-full group-hover:top-2 px-1`}
                                    >
                                        <img src={nitroIconImg.src} className='w-5 h-5' alt='' />
                                    </div>
                                </div>
                            )}
                            <div
                                className='w-20 h-20 p-[3px] bg-black bg-opacity-35 absolute -bottom-9 left-5 rounded-full'
                                onClick={() => {
                                    openProfileLarge()
                                    setOpened(false)
                                }}
                            >
                                <div
                                    className="relative rounded-full overflow-hidden cursor-pointer
                                    before:bg-black before:bg-opacity-0 before:duration-150 before:flex before:items-center before:justify-center hover:before:content-['view\profile']
                                    before:text-[11px] before:text-white before:font-medium hover:before:bg-opacity-60 before:p-2 before:absolute
                                    before:top-0 before:w-full before:h-full"
                                >
                                    <img src={avatar.src} alt='avatar' className='w-full h-full object-cover ' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex flex-col gap-y-2 px-3 mb-3 '>
                            <div className='flex justify-end p-1 mt-2 min-h-[36px] '>
                                {dataProfile?.badges?.length > 0 && (
                                    <div className='max-w-40 flex flex-wrap justify-end items-center gap-[2px] bg-general-gray-50 rounded-md p-1'>
                                        {dataProfile?.badges?.map((itemsBadge: TCriticalAnyType, index: number) => {
                                            const dataProfile: TCriticalAnyType = badgeHandler(itemsBadge)
                                            if (dataProfile) {
                                                const { name, img } = dataProfile
                                                return (
                                                    <Tooltip
                                                        label={name}
                                                        withArrow
                                                        multiline
                                                        offset={9}
                                                        classNames={{ tooltip: 'text-[10px] font-bold max-w-36   ' }}
                                                        className='bg-general-gray-50'
                                                        key={index}
                                                    >
                                                        <img
                                                            src={img}
                                                            className='w-[20px] h-[20px] cursor-pointer  '
                                                            alt={name}
                                                        />
                                                    </Tooltip>
                                                )
                                            }
                                        })}
                                    </div>
                                )}
                            </div>
                            <div className='w-full min-h-32  flex flex-col justify-between bg-black bg-opacity-65 text-white rounded-md p-3'>
                                <div className='flex flex-col gap-2 font-semibold '>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>{name}</span>
                                        <span className='text-xs'>{username}</span>
                                    </div>
                                    <hr className='border-general-border' />
                                    <div className='flex flex-col gap-y-1 max-h-48  overflow-auto'>
                                        <div className='flex flex-col text-xs'>
                                            <span className='font-medium'>About me</span>
                                            <div className='flex text-[10px]'>
                                                <span>{about}</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col text-xs'>
                                            <span className='font-medium '>MEMBER SINCE</span>
                                            <span className='text-[10px]'>{created}</span>
                                        </div>
                                        <TextInput
                                            classNames={{
                                                input: 'bg-transparent text-white border-transparent px-1 focus:bg-black focus:placeholder-black text-xs placeholder-opacity-0 duration-300',
                                                label: 'text-xs  font-medium'
                                            }}
                                            label='Note'
                                            placeholder='Click to add a note'
                                        />
                                        <TextInput
                                            classNames={{
                                                input: `bg-transparent text-white px-1 border-[2px] text-xs placeholder-opacity-0 duration-300`,
                                                label: 'text-xs  font-medium'
                                            }}
                                            placeholder={`Message to @${username}`}
                                            styles={{ input: { borderColor: colors[1] || 'white' } }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu.Dropdown>
            </Menu>

            <DModal opened={openedProfileLarge} onClose={closeProfileLarge}>
                <DProfileLarge dataProfile={dataProfile} />
            </DModal>
        </div>
    )
}

export default DProfileMenu
