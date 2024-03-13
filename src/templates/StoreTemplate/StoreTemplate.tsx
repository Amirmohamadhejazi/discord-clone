/* eslint-disable @next/next/no-img-element */
import { Button } from '@mantine/core'

import { CardsContent, Header } from '@organisms/StoreOrganisms'

import { Frog_icon, Gift_icon } from '@molecules/icons'

import { NitroBanner, nitroBg } from '@public/images'

const StoreTemplate = () => {
    return (
        <div className='flex flex-col h-full'>
            <Header />
            <div className='h-full overflow-auto  '>
                <div className='flex flex-col items-center relative'>
                    <div className='w-full bg-general-gray-100 relative '>
                        <img src={nitroBg.src} className='w-full h-[550px] object-cover' alt='nitroBg' />
                        <div className='flex flex-col text-center items-center gap-3 absolute top-16 w-full '>
                            <p className='text-4xl md:text-6xl font-extrabold text-white'>Welcome to Your Nitro Home</p>

                            <Button className=' bg-blue-500' classNames={{ root: 'p-2' }}>
                                <div className='flex text-sm items-center gap-2'>
                                    <Gift_icon size={'20'} />
                                    <span>Give the gift of Nitro</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='px-4 container flex flex-col gap-8 absolute top-[320px] text-white '>
                        <CardsContent />
                        <div className='grid xl:grid-cols-2 lg:gap-20 xl:gap-32 2xl:gap-52 bg-general-gray-300 rounded-xl  overflow-hidden mt-12'>
                            <div className='order-2 xl:order-1'>
                                <div className='flex flex-col gap-2 px-12 pt-8 pb-10'>
                                    <span className='font-bold'>Gift Nitro</span>
                                    <span className='text-xs'>
                                        Gift someone Nitro to give them access to profile customization, emoji, and
                                        superPowered chat features.
                                    </span>
                                    <Button className='border-2 border-red-100'>
                                        <div className='flex items-center gap-2'>
                                            <Gift_icon size={'20'} />
                                            <span>Gift Nitro</span>
                                        </div>
                                    </Button>
                                </div>
                            </div>
                            <div className='h-full xl:h-36 order-1 xl:order-2'>
                                <img src={NitroBanner.src} className='w-full object-cover' alt='NitroBanner' />
                            </div>
                        </div>
                        <div className='flex justify-center w-full mt-12'>
                            <Frog_icon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreTemplate
