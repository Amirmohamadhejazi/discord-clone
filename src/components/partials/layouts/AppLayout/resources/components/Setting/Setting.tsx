import { FaLock } from 'react-icons/fa'
// import { SlClose } from 'react-icons/sl'
// import { useDispatch } from 'react-redux'

// import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'

const Setting = () => {
    // const dispatch = useDispatch()

    return (
        <div className='flex w-full h-full bg-general-gray-100   text-general-gray-900'>
            <div className='w-full h-full flex max-w-[1100px] mx-auto '>
                <div className='w-[250px] bg-general-gray-50 '></div>
                <div className='flex flex-col gap-y-4 grow px-8'>
                    <span className='mt-12 text-lg text-white font-semibold'>My account</span>
                    <div className='p-44 bg-black bg-opacity-60 rounded-xl' />
                    <hr className='border-general-border' />
                    <span className='text-lg text-white font-semibold'>Password and authentication</span>
                    <div className='flex items-center gap-x-1 text-green-600'>
                        <FaLock size={12} />
                        <span className='text-sm'>Multi-Factor Authentication enabled</span>
                    </div>

                    <div className='flex flex-col text-sm gap-y-0.5 '>
                        <span className='text-xs font-semibold'>Authenticator App</span>
                        <span>
                            Configuring an authenticator app is a good way to add an extra layer of security to your
                            Discord account to make sure that only you have the ability to log in.
                        </span>
                    </div>
                    <div className='flex flex-col text-sm gap-y-0.5 '>
                        <span className='text-xs font-semibold'>SMS Backup Authentication</span>
                        <span>
                            Add your phone as a backup MFA method in case you lose access to your authenticator app or
                            backup codes.
                        </span>
                        <span>Your current phone number is: *********xxxx.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
