import { FaLock } from 'react-icons/fa6'
import { ActionIcon } from '@mantine/core'

// import { data_profile_me } from '@core/constants/dummy-data/servers/static-data-servers'
import { MessageSpoiler } from '@core/utils/common/MessageSpoiler'
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
            <div className='p-2 bg-general-gray rounded-md'>
                <span>another Items</span>
                <div className='flex flex-col gap-2 bg-general-gray-50 p-2 rounded-md mt-3'>
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
                            <ActionIcon className='w-auto bg-[#4e5058] p-2 rounded-md text-sm text-white font-medium'>
                                Edit
                            </ActionIcon>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='border-general-border' />
            <span className='text-lg text-white font-semibold'>Password and authentication</span>
            <div className='flex items-center gap-x-1 text-green-600'>
                <FaLock size={12} />
                <span className='text-sm'>Multi-Factor Authentication enabled</span>
            </div>

            <div className='flex flex-col text-sm gap-y-0.5 '>
                <span className='text-xs font-semibold'>Authenticator App</span>
                <span>
                    Configuring an authenticator app is a good way to add an extra layer of security to your Discord
                    account to make sure that only you have the ability to log in.
                </span>
            </div>
            <div className='flex flex-col text-sm gap-y-0.5 '>
                <span className='text-xs font-semibold'>SMS Backup Authentication</span>
                <span>
                    Add your phone as a backup MFA method in case you lose access to your authenticator app or backup
                    codes.
                </span>
                <span>Your current phone number is: *******8624</span>
            </div>
        </>
    )
}

export default MyAccount
