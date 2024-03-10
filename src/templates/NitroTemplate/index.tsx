/* eslint-disable @next/next/no-img-element */

import { Button } from '@mantine/core'

import { Frog_icon, Gift_icon, NitroBadge_icon } from '@molecules/icons'

import { CardNitro } from '@atoms/CardNitro'

import { NitroBanner, nitroBg } from '@public/images'

import { staticData } from './resources/constants/dummy-data'

const NitroTemplate = () => {
    return (
        <div className='flex flex-col h-full'>
            <div className='w-full bg-general-gray-100  min-h-[48px] shadow-lg p-[8px] whitespace-nowrap flex-wrap  flex items-center justify-between '>
                <div className=' flex items-center  flex-wrap gap-2 sm:gap-7   relative'>
                    <div className='flex items-center  gap-1 '>
                        <div className='text-sm'>
                            <NitroBadge_icon />
                        </div>
                        <span className='font-medium text-white text-sm'>Nitro</span>
                    </div>
                </div>
            </div>
            <div className='h-full overflow-auto  '>
                <div className='flex flex-col items-center relative'>
                    <div className='w-full bg-general-gray-100 relative '>
                        <img src={nitroBg.src} className='w-full object-cover' alt='nitroBg' />
                        <div className='flex flex-col text-center items-center gap-3 absolute top-16 w-full '>
                            <p className='  text-6xl font-extrabold text-white'>Welcome to Your Nitro Home</p>

                            <Button className=' bg-blue-500' classNames={{ root: 'p-2' }}>
                                <div className='flex text-sm items-center gap-2'>
                                    <Gift_icon size={'20'} />
                                    <span>Give the gift of Nitro</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='px-4 container flex flex-col gap-8 absolute top-[55%] text-white '>
                        {staticData.map((items, indexNitro) => (
                            <div className='flex flex-col gap-5' key={indexNitro}>
                                <span className='text-2xl font-extrabold ml-5'>{items.category}</span>

                                <div className='grid items-start h-full duration-100 grid-cols-3 gap-5  transition-all'>
                                    {items.cards.map((itemsExplore, index) => (
                                        <CardNitro itemsCard={itemsExplore} key={index} />
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className='grid grid-cols-2 gap-52 bg-general-gray-300 rounded-xl  overflow-hidden mt-12'>
                            <div className=''>
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
                            <div className='h-36 '>
                                <img src={NitroBanner.src} className='object-cover' alt='' />
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

export default NitroTemplate
