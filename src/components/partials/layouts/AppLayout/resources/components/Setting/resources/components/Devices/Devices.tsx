import { IoCloseSharp } from 'react-icons/io5'
import { ActionIcon } from '@mantine/core'

import { Phone_icon, Windows_icon } from '@molecules/icons'

const Devices = () => {
    const dataDevices = {
        current: { Title: 'WINDOWS . CHROME', typeDevice: 'Windows', location: 'Eichenau, Bavaria, Germany' },
        other: [
            {
                Title: 'Android . Discord Android',
                typeDevice: 'Phone',
                location: 'Tehran, Tehran, Iran',
                lastDate: '4 hours ago'
            },
            {
                Title: 'Windows . Discord Client',
                typeDevice: 'Windows',
                location: 'Frankfurt am Main, Hesse, Germany',
                lastDate: '10 hours ago'
            },
            {
                Title: 'WINDOWS . CHROME',
                typeDevice: 'Windows',
                location: 'Eichenau, Bavaria, Germany',
                lastDate: '2 days ago'
            },
            {
                Title: 'iOS . Safari',
                typeDevice: 'Phone',
                location: 'New York City, NY, USA',
                lastDate: '1 hour ago'
            },
            {
                Title: 'Windows . Chrome',
                typeDevice: 'Windows',
                location: 'London, England, UK',
                lastDate: '3 hours ago'
            },
            {
                Title: 'Android . Firefox',
                typeDevice: 'Phone',
                location: 'Tokyo, Japan',
                lastDate: '5 hours ago'
            },
            {
                Title: 'macOS . Safari',
                typeDevice: 'Windows',
                location: 'Sydney, Australia',
                lastDate: '12 hours ago'
            },
            {
                Title: 'Linux . Firefox',
                typeDevice: 'Windows',
                location: 'Berlin, Germany',
                lastDate: '1 day ago'
            },
            {
                Title: 'iOS . Discord',
                typeDevice: 'Phone',
                location: 'Los Angeles, CA, USA',
                lastDate: '2 hours ago'
            },
            {
                Title: 'Android . Chrome',
                typeDevice: 'Phone',
                location: 'Paris, France',
                lastDate: '4 hours ago'
            },
            {
                Title: 'Windows . Firefox',
                typeDevice: 'Windows',
                location: 'Toronto, ON, Canada',
                lastDate: '6 hours ago'
            },
            {
                Title: 'macOS . Safari',
                typeDevice: 'Windows',
                location: 'Melbourne, Australia',
                lastDate: '10 hours ago'
            },
            {
                Title: 'Linux . Discord',
                typeDevice: 'Windows',
                location: 'Berlin, Germany',
                lastDate: '1 day ago'
            }
        ]
    }
    const deviceHandler = (deviceName: string) => {
        switch (deviceName) {
            case 'Windows':
                return <Windows_icon />
            case 'Phone':
                return <Phone_icon />
        }
    }
    // Windows_icon or Phone_icon
    return (
        <div className='flex flex-col gap-y-6 select-none'>
            <div className='flex items-center gap-x-2'>
                <span className=' text-lg text-white font-semibold'>Devices</span>
            </div>
            <div className='flex flex-col gap-y-8 text-xs text-general-gray-900'>
                <div className='flex flex-col gap-2'>
                    <span className=''>
                        Here are all the devices that are currently logged in with your Discord account. You can log out
                        of each one individually or all other devices
                    </span>
                    <span className=''>
                        If you see an entry you dont recognize, log out of that device and change your Discord account
                        password immediately.
                    </span>
                </div>

                <div className='flex flex-col gap-10'>
                    {/* current */}
                    <div className='flex flex-col gap-1 '>
                        <span className='font-semibold'>Current Device</span>
                        <div className='flex items-center gap-3'>
                            <div className='bg-[#b5bac1] rounded-full p-2'>
                                {deviceHandler(dataDevices.current.typeDevice)}
                            </div>
                            <div className='flex flex-col'>
                                <span className='font-bold'>{dataDevices.current.Title}</span>
                                <span>{dataDevices.current.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* other */}
                    <div className='flex flex-col gap-1 '>
                        <span className='font-semibold'>Other Device</span>
                        <div className='flex flex-col gap-5 '>
                            {dataDevices.other.map((items, index) => (
                                <div key={index}>
                                    <div className='flex items-center gap-3 '>
                                        <div className='bg-[#b5bac1] rounded-full p-2'>
                                            {deviceHandler(items.typeDevice)}
                                        </div>
                                        <div className='flex items-center justify-between grow'>
                                            <div className='flex flex-col'>
                                                <span className='font-bold'>{items.Title}</span>
                                                <div className='flex items-center gap-x-1'>
                                                    <span>{items.location}</span>
                                                    <span>. {items.lastDate}</span>
                                                </div>
                                            </div>
                                            <IoCloseSharp className='cursor-pointer ' size={19} />
                                        </div>
                                    </div>
                                    {dataDevices.other.length !== index + 1 && (
                                        <hr className='mt-5 border-general-border' />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-start text-sm gap-y-1 '>
                    <span className='text-xs font-semibold'>Log out of all known devices</span>
                    <span>{`You'll have to log back in on all logged out devices.`}</span>

                    <div className='flex items-center gap-1'>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block ' }}>
                            <div className=' border-2 border-[#f23f42]  cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Log Out All Known Devices</span>
                            </div>
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices
