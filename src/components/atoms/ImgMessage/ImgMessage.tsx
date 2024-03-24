/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC } from 'react'
import { useDisclosure } from '@mantine/hooks'

import { DModal } from '@atoms/DModal'

import { type TCriticalAnyType } from '@core/types/common/critical-any'
interface IImgMessageProps {
    img: TCriticalAnyType
}
const ImgMessage: FC<IImgMessageProps> = ({ img }) => {
    const [openedModalPicture, { open: openModalPicture, close: closeModalPicture }] = useDisclosure(false)

    return (
        <div className=' '>
            <img
                src={img}
                className='rounded-md object-cover w-full max-w-[300px]'
                alt='image message'
                onClick={openModalPicture}
            />
            <DModal
                classNames={{
                    content: 'bg-transparent'
                }}
                opened={openedModalPicture}
                size=''
                onClose={closeModalPicture}
            >
                <img src={img} className='rounded-md max-w-[800px]' alt='image message' />
            </DModal>
        </div>
    )
}

export default ImgMessage
