/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'
import Link from 'next/link'

import { OpenLink_icon, PlayMusic_icon } from '@molecules/icons'

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
        <div
            className={`sm:max-w-72 w-full flex flex-col gap-y-1 border-l-[3.5px] rounded-md  p-2  bg-general-gray-50 ${colorCard()}`}
        >
            <div className='flex items-center gap-x-1'>
                <img src={dataPreviewPost.logo.url} className='rounded-md w-5' alt='' />
                <Link
                    href={dataPreviewPost.url}
                    className='flex items-center text-[11px] text-blue-400 hover:underline'
                    target='_blank'
                >
                    <span className='text-xs font-bold '>{dataPreviewPost.publisher}</span>
                </Link>
            </div>
            {dataPreviewPost.author && (
                <div className='flex items-start flex-wrap gap-x-1 text-[11px]'>
                    <span className='font-bold'>Author:</span>
                    <span className=' text-xs'>{dataPreviewPost.author}</span>
                </div>
            )}
            {dataPreviewPost.title && (
                <div className='flex items-start flex-wrap gap-x-1 text-[11px]'>
                    <span className='font-bold'>Title:</span>
                    <span className=' text-xs'>{dataPreviewPost.title}</span>
                </div>
            )}
            {dataPreviewPost.description && (
                <div className='flex items-start flex-wrap gap-x-1 text-[11px]'>
                    <span className='font-bold'>Description:</span>
                    <span className=' text-xs '>{dataPreviewPost.description}</span>
                </div>
            )}
            <div className='relative'>
                <ImgMessage img={dataPreviewPost?.image?.url} />
                <div className='w-full h-full absolute top-0 flex items-center justify-center  bg-black bg-opacity-5 '>
                    <div className='p-2 rounded-full flex items-center justify-center bg-black bg-opacity-50 shadow-2xl shadow-white'>
                        <div className='flex items-center gap-x-2'>
                            <PlayMusic_icon className='text-general-gray-800 hover:text-white duration-300' />
                            <OpenLink_icon className='text-general-gray-800 hover:text-white duration-300' size='18' />
                        </div>
                    </div>
                </div>
            </div>
            {dataPreviewPost.date && <span className='text-[10px] font-light '>{dataPreviewPost.date}</span>}
        </div>
    )
}

export default Preview
