import { SlClose } from 'react-icons/sl'
import { useDispatch } from 'react-redux'

import { closeSettingPage } from '@core/services/stores/Reducer/SettingUserPage/SettingUserPageSlice'

const Setting = () => {
    const dispatch = useDispatch()

    return (
        <div
            className='flex w-full h-full bg-general-gray-100   text-general-gray-900'
            onClick={() => dispatch(closeSettingPage())}
        >
            <div className='w-[350px] bg-general-gray-50 '></div>
            <div className='grow relative'>
                <div className='absolute text-center top-24 right-24 cursor-pointer'>
                    <SlClose size={40} />
                    <span className='text-xl'>esc</span>
                </div>
            </div>
        </div>
    )
}

export default Setting
