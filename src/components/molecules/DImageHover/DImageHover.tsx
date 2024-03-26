/* eslint-disable @next/next/no-img-element */
'use client'

import { type FC, useState } from 'react'

import { type IDataImageProps } from './resources'

const DImageHover: FC<IDataImageProps> = ({ dataImage, activeAnimation = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {activeAnimation || (dataImage.gif && isHovered) ? (
                <img src={dataImage.gif} className={`size-full object-cover `} alt='external sidebar image' />
            ) : (
                <img src={dataImage.png} className={`size-full object-cover `} alt='external sidebar image' />
            )}
        </div>
    )
}

export default DImageHover
