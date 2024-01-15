/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { wumpus1Img } from '@public/images'

const WumpusNotify: FC<{ image: TCriticalAnyType; notification: string }> = ({
    image = wumpus1Img.src,
    notification = '# ... .. .'
}) => {
    console.log(image, notification)

    return (
        <div className='flex flex-col text-center gap-3 select-none'>
            <img src={image.src} alt='' />
            <span className=' font-semibold'>{notification}</span>
        </div>
    )
}

export default WumpusNotify
