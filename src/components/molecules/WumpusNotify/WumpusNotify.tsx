/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'

import { wumpus1Img, wumpus2Img, wumpus3Img, wumpus4Img } from '@public/images'

const WumpusNotify: FC<{ notification?: string | null; type: number | null }> = ({ type = 1, notification }) => {
    const imageWumpus =
        type === 1
            ? { image: wumpus1Img.src, text: "No one's around to play with Wumpus." }
            : type === 2
              ? { image: wumpus2Img.src, text: 'Wumpus is waiting on friends. You don’t have to though!' }
              : type === 3
                ? { image: wumpus3Img.src, text: "There are no pending friend requests. Here's Wumpus for now." }
                : { image: wumpus4Img.src, text: "You can't unblock the Wumpus." }

    return (
        <div className='flex flex-col items-center text-center gap-3 select-none'>
            <img src={imageWumpus.image} alt='imageWumpus' />
            <span className='text-sm'>{notification || imageWumpus.text}</span>
        </div>
    )
}

export default WumpusNotify
