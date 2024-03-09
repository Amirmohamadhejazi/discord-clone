/* eslint-disable @next/next/no-img-element */

import { Button } from '@mantine/core'

import { Gift_icon, NitroBadge_icon } from '@molecules/icons'

import { CardNitro } from '@atoms/CardNitro'

import {
    ExploreWhatsNew_EarlyAccess,
    ExploreWhatsNew_SpecialMemberPricing,
    ExploreWhatsNew_UnlimitedSuperReactions,
    nitroBg
} from '@public/images'

const NitroTemplate = () => {
    const dataExploreWhatsNew = [
        {
            name: 'Early Access',
            title: 'Get exclusive access to certain new features before they’re released to everyone.',
            description: 'Nitro members, get ready to get your hands on the latest and greatest before everyone else.',
            img: ExploreWhatsNew_EarlyAccess.src
        },
        {
            name: 'Special Member Pricing',
            title: 'Snag sweet discounts on any - or every! - item at the Shop.',
            description: 'Exclusive savings are reserved for Nitro members only.',
            img: ExploreWhatsNew_SpecialMemberPricing.src,
            button: 'Visit the Shop'
        },
        {
            name: 'Unlimited Super Reactions',
            title: 'We made Super Reactions unlimited so you can unleash the chaos in your chats.',
            description: 'Now available on Nitro and Nitro Basic.',
            img: ExploreWhatsNew_UnlimitedSuperReactions.src
        }
    ]
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
                <div className='flex flex-col relative'>
                    <div className='bg-general-gray-100 relative '>
                        <img src={nitroBg.src} alt='nitroBg' />
                        <div className='flex flex-col text-center items-center gap-3 absolute top-16 w-full '>
                            <p className='  text-6xl font-extrabold text-white'>Welcome to Your Nitro Home</p>

                            <Button className=' bg-blue-500' classNames={{ root: 'p-2' }}>
                                <div className='flex text-sm items-center gap-2'>
                                    <Gift_icon />
                                    <span>Give the gift of Nitro</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className='px-4 w-full flex flex-col gap-8 absolute top-[80%] text-white '>
                        <div className='flex flex-col gap-5'>
                            <span className='text-2xl font-extrabold ml-5'>Explore Whats New</span>

                            <div className='grid items-start h-full duration-100 grid-cols-3 gap-5  transition-all'>
                                {dataExploreWhatsNew.map((itemsExplore, index) => (
                                    <CardNitro itemsCard={itemsExplore} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className='w-2 h-[1000px]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NitroTemplate
