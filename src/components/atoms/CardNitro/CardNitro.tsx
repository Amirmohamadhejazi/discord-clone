/* eslint-disable @next/next/no-img-element */
import React, { type FC } from 'react'
import { Button } from '@mantine/core'

import { type ICardNitroProps } from './resources'

const CardNitro: FC<ICardNitroProps> = ({ itemsCard }) => {
    return (
        <div className='flex flex-col justify-center hover:-translate-y-3 group duration-100 ease-in-out rounded-3xl bg-general-gray-300 overflow-hidden'>
            <div className='flex flex-col  pt-5 px-5'>
                <span className='text-2xl font-semibold'>{itemsCard.name}</span>
                <span className='text-xs font-light pt-2  '>{itemsCard.title}</span>
            </div>
            <div className=' p-4 group-hover:px-0 group-hover:pb-0 duration-100 w-full relative'>
                <div className='w-full '>
                    <img
                        src={itemsCard.img}
                        className='w-full   h-[220px] object-cover duration-100 rounded-xl  group-hover:rounded-3xl '
                        alt=''
                    />
                </div>
                <div
                    className='flex flex-col justify-between p-5 left-0 absolute  top-12 group-hover:top-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible duration-100 text-xs w-full h-full ease-in-out bg-opacity-30 rounded-b-3xl'
                    style={{
                        background: `linear-gradient(to bottom, ${'#232428'} 20%, transparent`
                    }}
                >
                    <p>{itemsCard.description}</p>
                    {itemsCard.button && (
                        <Button className=' bg-general-blue' classNames={{ root: 'p-2' }}>
                            <div className='flex text-sm items-center font-bold gap-2'>
                                <span>{itemsCard.button}</span>
                            </div>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardNitro
