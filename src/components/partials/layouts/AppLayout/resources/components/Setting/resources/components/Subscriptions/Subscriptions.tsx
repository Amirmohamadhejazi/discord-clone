const Subscriptions = () => {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
                <span className=' text-lg text-white font-semibold'>Your Subscriptions</span>
                <span className='text-sm text-general-gray-900'>
                    These are your current subscriptions. They will be billed on the same billing cycle. You can update
                    any subscription at any time.
                </span>
            </div>

            <div
                className='w-full h-11 rounded-md  '
                style={{ background: 'linear-gradient(90deg,#f18623 0%,#f6a12a 56%,#fab930 100%)' }}
            ></div>
            {/* <div className='flex flex-col gap-y-2'>
                <div className='flex items-center justify-between '>
                    <span className='text-sm'>Allow my voice to be recorded in Clips</span>
                    <DSwitch />
                </div>


            </div> */}

            <div></div>
        </div>
    )
}

export default Subscriptions
