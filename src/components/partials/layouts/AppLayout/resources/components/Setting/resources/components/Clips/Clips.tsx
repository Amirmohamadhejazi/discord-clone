import { DSwitch } from '@molecules/DSwitch'

const Clips = () => {
    return (
        <div className='flex flex-col gap-y-8'>
            <div className='flex items-center gap-x-2'>
                <span className=' text-lg text-white font-semibold'>Clips</span>
                <div className='text-[10px] px-1 py-0.5 bg-general-blue rounded-md'>
                    <span>BETA</span>
                </div>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className='flex items-center justify-between '>
                    <span className='text-sm'>Allow my voice to be recorded in Clips</span>
                    <DSwitch />
                </div>

                <span className='text-sm text-general-gray-900'>
                    By turning on this setting, your voice may be included when someone in the same voice channel uses
                    Clips.
                </span>
            </div>
        </div>
    )
}

export default Clips
