/* eslint-disable @next/next/no-img-element */
import { Header } from '@organisms/ShopOrganisms'

// import {
//     anime,
//     cyberPunk,
//     disxcore,
//     element,
//     fantasy,
//     left_valorant,
//     logo_anime,
//     logo_cyberPunk,
//     logo_disxcore,
//     logo_element,
//     logo_fantasy,
//     logo_valorant,
//     right_valorant,
//     springTons,
//     springTons_logo
// } from '@public/images'
const ShopTemplate = () => {
    return (
        <div className='h-full flex flex-col overflow-y-auto'>
            <Header />
            <div className='grow p-1 flex flex-col m-20 gap-12  '>
                {/* <>
                    <div className='bg-[#ff4454] w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end '>
                            <img src={left_valorant.src} className='object-cover rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_valorant.src} className='h-40 rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={right_valorant.src} className='rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className=' w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={springTons.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={springTons_logo.src} className='rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className=' w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={anime.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_anime.src} className='h-28 rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className='w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={element.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_element.src} className='h-20 rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className=' w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={cyberPunk.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_cyberPunk.src} className='rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className=' w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={fantasy.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_fantasy.src} className='h-28 rounded-2xl' alt='' />
                        </div>
                    </div>
                </>
                <>
                    <div className=' w-full h-[220px] rounded-2xl relative'>
                        <div className='w-full h-full absolute flex items-end rounded-2xl overflow-hidden'>
                            <img src={disxcore.src} className='rounded-2xl' alt='' />
                        </div>
                        <div className='w-full h-full   absolute flex items-center justify-center  '>
                            <img src={logo_disxcore.src} className=' rounded-2xl' alt='' />
                        </div>
                    </div>
                </> */}
            </div>
        </div>
    )
}

export default ShopTemplate
