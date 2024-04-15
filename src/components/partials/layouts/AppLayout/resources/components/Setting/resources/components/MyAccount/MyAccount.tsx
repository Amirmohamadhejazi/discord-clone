/* eslint-disable @next/next/no-img-element */
import { FaLock } from 'react-icons/fa6'
import { ActionIcon, Tooltip } from '@mantine/core'

import { data_profile_me } from '@core/constants/dummy-data/servers/static-data-servers'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { badgeHandler } from '@core/utils/common/badgeHandler/badgeHandler'
import { MessageSpoiler } from '@core/utils/common/MessageSpoiler'

import { avatar_me } from '@public/images'
const MyAccount = () => {
    const userDetail = [
        { title: 'Display Name', value: 'Amirmohamad' },
        { title: 'UserName', value: 'amirmohamad' },
        { title: 'Email', value: 'Amirmohamad@gmail.com', spoiler: true },
        { title: 'PhoneNumber', value: '09901508624', spoiler: true }
    ]
    return (
        <>
            <span className=' text-lg text-white font-semibold'>My Account</span>
            <div className=' bg-general-gray rounded-md overflow-hidden relative'>
                <div className='bg-black pt-20' />

                <div className=' size-24 absolute top-12 left-5 p-1 rounded-full overflow-hidden bg-general-gray'>
                    <img src={avatar_me.src} className='size-full  rounded-full ' alt='' />
                </div>
                <div className='flex w-full pl-32 pr-2  '>
                    <div className='flex justify-between size-full   p-2 '>
                        {/* name */}
                        <div className='flex flex-col gap-1'>
                            <span className='text-lg font-semibold'>Amirmohamad</span>
                            <div className='max-w-40 flex flex-wrap items-center gap-[2px] '>
                                {data_profile_me?.badges?.map((itemsBadge: TCriticalAnyType, index: number) => {
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
                        </div>

                        <ActionIcon classNames={{ root: 'w-auto mt-1' }}>
                            <div className='bg-general-blue cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Edit User Profile</span>
                            </div>
                        </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col gap-2 bg-general-gray-50 p-2 rounded-md mt-3 m-2'>
                    {userDetail.map((itemsUserDetail, index) => (
                        <div className='flex justify-between items-center' key={index}>
                            <div className='flex flex-col text-sm'>
                                <span className='font-semibold'>{itemsUserDetail.title}</span>

                                {itemsUserDetail.spoiler ? (
                                    <MessageSpoiler message={itemsUserDetail.value} type={itemsUserDetail.title} />
                                ) : (
                                    <span>{itemsUserDetail.value}</span>
                                )}
                            </div>
                            <ActionIcon className='w-auto bg-[#4e5058] p-2 rounded-md text-xs text-white font-medium'>
                                Edit
                            </ActionIcon>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='border-general-border' />
            <div className='flex flex-col gap-7'>
                <div className='flex flex-col gap-2'>
                    <span className='text-lg text-white font-semibold'>Password and authentication</span>
                    <div className='flex flex-col gap-2 items-start text-green-600'>
                        <div className='flex items-center gap-x-1'>
                            <FaLock size={12} />
                            <span className='text-sm'>Multi-Factor Authentication enabled</span>
                        </div>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block' }}>
                            <div className='bg-general-blue cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Change Password</span>
                            </div>
                        </ActionIcon>
                    </div>
                </div>

                <div className='flex flex-col text-sm gap-y-0.5 '>
                    <span className='text-xs font-semibold'>Authenticator App</span>
                    <span>
                        Configuring an authenticator app is a good way to add an extra layer of security to your Discord
                        account to make sure that only you have the ability to log in.
                    </span>
                    <div className='flex items-center gap-x-2'>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block' }}>
                            <div className='bg-general-blue cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>View Backup Codes</span>
                            </div>
                        </ActionIcon>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block ' }}>
                            <div className=' border-2 border-[#f23f42]  cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Remove Authenticator App</span>
                            </div>
                        </ActionIcon>
                    </div>
                </div>
                <div className='flex flex-col items-start text-sm gap-y-1 '>
                    <span className='text-xs font-semibold'>SMS Backup Authentication</span>
                    <span>
                        Add your phone as a backup MFA method in case you lose access to your authenticator app or
                        backup codes.
                    </span>
                    <div className='flex items-center gap-x-1'>
                        <span>Your current phone number is:</span>
                        <MessageSpoiler message={'09901508624'} type={'PhoneNumber'} />
                    </div>
                    <ActionIcon classNames={{ root: 'w-auto mt-1 block ' }}>
                        <div className=' border-2 border-[#f23f42]  cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                            <span>Remove Sms Authenticator</span>
                        </div>
                    </ActionIcon>
                </div>

                <div className='flex flex-col items-start text-sm gap-y-1 '>
                    <span className='text-xs font-semibold'>SECURITY KEYS</span>
                    <span>Add an additional layer of protection to your account with a Security Key.</span>

                    <ActionIcon classNames={{ root: 'w-auto mt-1 block' }}>
                        <div className='bg-general-blue cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                            <span>Register a Security Key</span>
                        </div>
                    </ActionIcon>
                </div>

                <div className='flex flex-col items-start text-sm gap-y-1 '>
                    <span className='text-xs font-semibold'>Account Removal</span>
                    <span>Disabling your account means you can recover it at any time after taking this action.</span>

                    <div className='flex items-center gap-1'>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block' }}>
                            <div className='bg-[#f23f42] cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Disable Account</span>
                            </div>
                        </ActionIcon>
                        <ActionIcon classNames={{ root: 'w-auto mt-1 block ' }}>
                            <div className=' border-2 border-[#f23f42]  cursor-pointer text-white font-medium px-3 py-2 rounded-md text-xs whitespace-nowrap'>
                                <span>Delete Account</span>
                            </div>
                        </ActionIcon>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount
