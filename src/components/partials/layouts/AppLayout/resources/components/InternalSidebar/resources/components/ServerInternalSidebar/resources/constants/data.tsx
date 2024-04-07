import { BiSolidFolderPlus } from 'react-icons/bi'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { IoIosLock } from 'react-icons/io'

import {
    AppDirectory_icon,
    CreateEvent_icon,
    Edit_icon,
    Invite_icon,
    Leave_icon,
    Notification_icon,
    Privacy_icon,
    ServerInsight_icon,
    Setting_icon
} from '@molecules/icons'
import Boost_icon from '@molecules/icons/Boost_icon'

const serverMenuData = [
    { name: 'Server Boost', hr: true, icon: <Boost_icon size='15' />, id: 0 },
    { name: 'Invite People', icon: <Invite_icon size='15' />, color: '#949cf7', id: 1 },
    { name: 'Server Settings', icon: <Setting_icon size='15' />, id: 2 },
    { name: 'Server Insights', icon: <ServerInsight_icon size='15' />, id: 3 },
    { name: 'Create Channel', icon: <BsFillPlusCircleFill size='15' />, id: 4 },
    { name: 'Create Category', icon: <BiSolidFolderPlus size='17' />, id: 5 },
    { name: 'Create Event', icon: <CreateEvent_icon size='15' />, id: 6 },
    { name: 'App Directory', hr: true, icon: <AppDirectory_icon size='15' />, id: 7 },
    { name: 'Show All Channels', id: 8 },
    { name: 'Notification Settings', icon: <Notification_icon size='15' />, id: 9 },
    { name: 'Privacy Settings', hr: true, icon: <Privacy_icon size='15' />, id: 10 },
    { name: 'Edit Server Profile', icon: <Edit_icon size='15' />, id: 11 },
    { name: 'Hide Muted Channels', hr: true, id: 12 },
    { name: 'Security Actions', icon: <IoIosLock size='15' />, color: '#f23f42', id: 0 },
    { name: 'Report Raid', icon: <Privacy_icon size='15' />, color: '#f23f42', id: 0 },
    { name: 'Leave Server', icon: <Leave_icon size='15' />, color: '#f23f42', id: 0 }
]

export { serverMenuData }
