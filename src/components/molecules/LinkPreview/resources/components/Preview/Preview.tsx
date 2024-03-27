/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'
import Link from 'next/link'

import { ImgMessage } from '@atoms/ImgMessage'

import { type IPreviewProps } from './resources'

const Preview: FC<IPreviewProps> = ({ dataPreviewPost }) => {
    const colorCard = () => {
        switch (dataPreviewPost.publisher) {
            case 'YouTube':
                return 'border-red-600'
            case 'Spotify':
                return 'border-green-600'
            case 'SoundCloud':
                return 'border-yellow-600'
            default:
                return 'border-blue-600'
        }
    }

    return (
        <div className={`max-w-60 flex flex-col gap-y-1 border-l-[3.5px] rounded-md  p-2 truncate ${colorCard()}`}>
            <div className='flex items-center gap-x-1'>
                <img src={dataPreviewPost.logo.url} className='rounded-md w-5' alt='' />
                <Link
                    href={dataPreviewPost.url}
                    className='flex items-center text-[11px] text-blue-400 hover:underline'
                    target='_blank'
                >
                    <span className='text-xs font-bold truncate'>{dataPreviewPost.publisher}</span>
                </Link>
            </div>
            {dataPreviewPost.author && (
                <div className='flex items-center gap-x-1 text-[11px]'>
                    <span className='font-bold'>Author:</span>
                    <span className='truncate text-xs'>{dataPreviewPost.author}</span>
                </div>
            )}
            {dataPreviewPost.title && (
                <div className='flex items-center gap-x-1 text-[11px]'>
                    <span className='font-bold'>Title:</span>
                    <span className='truncate text-xs'>{dataPreviewPost.title}</span>
                </div>
            )}
            {dataPreviewPost.description && (
                <div className='flex items-center gap-x-1 text-[11px]'>
                    <span className='font-bold'>Description:</span>
                    <span className='truncate text-xs'>{dataPreviewPost.description}</span>
                </div>
            )}
            <ImgMessage img={dataPreviewPost.image.url} />
            {dataPreviewPost.date && <span className='text-[10px] font-light truncate'>{dataPreviewPost.date}</span>}
        </div>
    )
}

export default Preview
