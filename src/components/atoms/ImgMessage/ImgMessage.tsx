/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC, useEffect, useState } from 'react'
import { TbDownloadOff } from 'react-icons/tb'
import { useDisclosure } from '@mantine/hooks'

import { DModal } from '@atoms/DModal'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
interface IImgMessageProps {
    img: TCriticalAnyType
}
const ImgMessage: FC<IImgMessageProps> = ({ img }) => {
    const [openedModalPicture, { open: openModalPicture, close: closeModalPicture }] = useDisclosure(false)
    const [isValid, setIsValid] = useState(true) // State to track image validity

    const checkImage = (url: TCriticalAnyType) => {
        const img = new Image()
        img.src = url
        img.onload = () => {
            setIsValid(true) // Set validity to true if image loads successfully
        }
        img.onerror = () => {
            setIsValid(false) // Set validity to false if image fails to load
        }
    }
    useEffect(() => {
        checkImage(img)
    }, [])
    return (
        <div className=''>
            {isValid ? (
                <img
                    src={img}
                    className='rounded-md object-cover w-full max-w-[300px]'
                    alt='image message'
                    onClick={openModalPicture}
                />
            ) : (
                <div className='flex items-center justify-center bg-transparent w-full max-w-[300px] h-44 text-general-gray-900'>
                    <TbDownloadOff size={120} />
                </div>
            )}

            <DModal opened={openedModalPicture} size='' onClose={closeModalPicture}>
                {isValid && (
                    <img
                        src={img}
                        className='rounded-md object-cover md:object-none w-full max-w-[800px]'
                        alt='image message'
                    />
                )}
            </DModal>
        </div>
    )
}

export default ImgMessage
