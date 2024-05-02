import { Button } from '@mantine/core'

import { Nitro_Badge_12, NoItems_icon } from '@molecules/icons'

const Subscriptions = () => {
    return (
        <div className='flex flex-col gap-y-4 text-general-gray-900'>
            <div className='flex flex-col gap-y-2'>
                <span className=' text-lg text-white font-semibold'>Your Subscriptions</span>
                <span className='text-sm '>
                    These are your current subscriptions. They will be billed on the same billing cycle. You can update
                    any subscription at any time.
                </span>
            </div>

            <div
                className='flex items-center gap-x-2 md:gap-x-3 w-full rounded-md  p-3 text-black'
                style={{ background: 'linear-gradient(90deg,#f18623 0%,#f6a12a 56%,#fab930 100%)' }}
            >
                <Nitro_Badge_12 />
                <div className='flex flex-col gap-y-1 '>
                    <div className='flex items-center justify-between'>
                        <span className='font-semibold'>Nitro</span>

                        <Button className='bg-white text-blue-400 text-xs' classNames={{ root: 'px-2' }} size='xs'>
                            Re-subscribe
                        </Button>
                    </div>
                    <span className='text-xs'>
                        You have premium chat, 2x Boosts, and a Boost discount for $98.60 / Year (Pending Cancellation)
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-y-2 text-xs'>
                <span className=''>Payment</span>
                <div className='flex flex-col gap-y-1 bg-general-gray-50 p-3 rounded-md text-white font-semibold'>
                    <span>Billing Information</span>
                    <span>Your subscription will end on May 2, 2028</span>
                </div>
            </div>
            <hr className='border-general-border' />
            <div className='flex flex-col gap-3 text-white'>
                <span className='font-semibold'>Subscription Credit</span>
                <span className='text-xs'>
                    When you accept a gift while you have a running subscription, or accept a gift that differs from
                    your current subscription, it will appear here as credit.
                </span>
                <div className='flex items-center gap-x-2 px-5 py-3 text-xs font-semibold'>
                    <NoItems_icon size='28' />
                    <span>You have no unused credits</span>
                </div>
            </div>
        </div>
    )
}

export default Subscriptions
