import { type FC, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Menu } from '@mantine/core'
import { IconEdit, IconTrash } from '@tabler/icons-react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
const DMenu: FC<TCriticalAnyType> = ({ classNames, children, ...res }) => {
    const [opened, setOpened] = useState(false)
    const handleContextMenu = (e: TCriticalAnyType) => {
        e.preventDefault()
        setOpened(true)
    }

    return (
        <div className='' onContextMenu={(e) => handleContextMenu(e)}>
            <Menu
                position='bottom-end'
                withinPortal={false}
                closeOnEscape={true}
                shadow={'md'}
                offset={9}
                arrowPosition='center'
                classNames={{
                    ...classNames,
                    dropdown: 'z-[1] fixed bg-general-gray border-0 shadow-md'
                }}
                opened={opened}
                onChange={() => setOpened(false)}
                {...res}
            >
                <Menu.Target>{children}</Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        color='white'
                        className='hover:bg-general-blue  hover:text-white'
                        rightSection={<IoIosArrowForward size={20} />}
                    >
                        Add Reaction
                    </Menu.Item>
                    <Menu.Item
                        color='white'
                        className='hover:bg-general-blue hover:text-white'
                        rightSection={<IconEdit size={20} />}
                    >
                        Edit message
                    </Menu.Item>
                    <Menu.Item
                        color='red'
                        className='hover:bg-red-500 hover:text-white'
                        rightSection={<IconTrash size={20} />}
                    >
                        Delete Message
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default DMenu
