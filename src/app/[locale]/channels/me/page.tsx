/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { WumpusNotify } from '@molecules/WumpusNotify'

import { wumpus4Img } from '@public/images'

const home = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <WumpusNotify image={wumpus4Img} notification='wow' />
        </div>
    )
}

export default home
