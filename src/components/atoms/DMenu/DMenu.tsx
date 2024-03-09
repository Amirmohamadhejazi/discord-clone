import { type FC, useState } from 'react'
import { FaThreads } from 'react-icons/fa6'
import { FaTrashCan } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { MdModeEdit } from 'react-icons/md'
import { MdOutlineContentCopy } from 'react-icons/md'
import { MdOutlineMarkChatUnread } from 'react-icons/md'
import { PiPushPinFill } from 'react-icons/pi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { RiLinkM } from 'react-icons/ri'
import { RiVoiceprintLine } from 'react-icons/ri'
import { Menu } from '@mantine/core'

import { Id_icon } from '@molecules/icons'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type IMenuProps } from './resources'
const DMenu: FC<IMenuProps> = ({ classNames, children, type = 'message', position = 'bottom-start', ...res }) => {
    const [opened, setOpened] = useState(false)
    const handleContextMenu = (e: TCriticalAnyType) => {
        e.preventDefault()
        setOpened(true)
    }
    const menuItemsHandler = () => {
        switch (type) {
            case 'messageInChannel':
                return (
                    <>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue  hover:text-white'
                            rightSection={<IoIosArrowForward size={16} />}
                        >
                            Add Reaction
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<MdModeEdit size={16} />}
                        >
                            Edit message
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<PiPushPinFill size={16} />}
                        >
                            Pin Message
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<RiArrowGoBackFill size={16} />}
                        >
                            Replay
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<FaThreads size={16} />}
                        >
                            Create Thread
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<MdOutlineContentCopy size={16} />}
                        >
                            Copy Text
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<IoIosArrowForward size={16} />}
                        >
                            Apps
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<MdOutlineMarkChatUnread size={16} />}
                        >
                            Mark Unread
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<RiLinkM size={16} />}
                        >
                            Copy Message Link
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<RiVoiceprintLine size={16} />}
                        >
                            Speak Message
                        </Menu.Item>
                        <Menu.Item
                            color='red'
                            className='hover:bg-red-500 hover:text-white'
                            rightSection={<FaTrashCan size={16} />}
                        >
                            Delete Message
                        </Menu.Item>
                        <hr className='border-general-border my-1' />
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue hover:text-white'
                            rightSection={<Id_icon />}
                        >
                            Copy Message ID
                        </Menu.Item>
                    </>
                )
            case 'socialInChat':
                // -Profile -Mention - - - -
                return (
                    <>
                        <Menu.Item color='white' className='hover:bg-general-blue hover:text-white'>
                            Profile
                        </Menu.Item>
                        <Menu.Item color='white' className='hover:bg-general-blue  hover:text-white'>
                            Mention
                        </Menu.Item>
                        <Menu.Item color='white' className='hover:bg-general-blue  hover:text-white'>
                            Edit Server Profile
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue  hover:text-white'
                            rightSection={<IoIosArrowForward size={16} />}
                        >
                            Apps
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue  hover:text-white'
                            rightSection={<IoIosArrowForward size={16} />}
                        >
                            Roles
                        </Menu.Item>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue  hover:text-white'
                            rightSection={<Id_icon />}
                        >
                            Copy User Id
                        </Menu.Item>
                    </>
                )
            case 'socialFriend':
                // -Profile -Mention - - - -
                return (
                    <>
                        <Menu.Item
                            color='white'
                            className='hover:bg-general-blue  hover:text-white'
                            rightSection={<IoIosArrowForward size={16} />}
                        >
                            Roles
                        </Menu.Item>
                    </>
                )
        }
    }
    return (
        <div className='font-light cursor-pointer' onContextMenu={(e) => handleContextMenu(e)}>
            <Menu
                position={position}
                withinPortal={false}
                closeOnEscape={true}
                shadow={'md'}
                offset={9}
                arrowPosition='center'
                classNames={{
                    ...classNames,
                    dropdown: 'z-[1] fixed bg-general-gray border-0 shadow-md',

                    itemLabel: 'font-light text-xs ',
                    label: 'text-red-300'
                }}
                opened={opened}
                onChange={() => setOpened(false)}
                {...res}
            >
                <Menu.Target>{children}</Menu.Target>
                <Menu.Dropdown>{menuItemsHandler()}</Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default DMenu
