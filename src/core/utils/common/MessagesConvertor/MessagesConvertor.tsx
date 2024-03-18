/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'

import { DMenu } from '@atoms/DMenu'
import { DProfileMenu } from '@atoms/DProfileMenu'

import { static_all_users } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { handlerMessage } from '@core/utils/common/handlerMessage'

import { type IMessagesProps } from './resources/types/types'

const MessagesConvertor: FC<IMessagesProps> = ({ messages }) => {
    return (
        <div className='flex flex-col gap-y-1 my-2 '>
            {messages.map((itemDirect, index) => {
                const userData: TCriticalAnyType = static_all_users.find((items) => items.useId === itemDirect.sender)

                const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false
                const nextMessage = messages[index + 1]?.sender === messages[index].sender || false

                if (!prevMessage) {
                    return (
                        <div className={`flex items-start gap-x-4 ${!nextMessage ? 'mb-2 ' : ''} `} key={index}>
                            <DProfileMenu dataProfile={userData}>
                                <div className='w-10 h-10 mt-2'>
                                    <img
                                        src={userData?.avatar.src}
                                        className='w-full h-full rounded-full object-cover'
                                        alt=''
                                    />
                                </div>
                            </DProfileMenu>

                            <div className='w-full flex flex-col '>
                                <DMenu type='socialInChat'>
                                    <div className='flex items-center gap-x-2'>
                                        <span className=' font-semibold text-white'>{userData?.name}</span>
                                        <span className='text-[10px] font-medium'>04/13/2023</span>
                                    </div>
                                </DMenu>
                                {/* when single message */}
                                <DMenu type='messageInChannel'>
                                    <div className='flex flex-col gap-1 '>
                                        {itemDirect.img && (
                                            <div className=' '>
                                                <img
                                                    src={itemDirect.img.src}
                                                    className='rounded-md object-cover max-w-[300px]'
                                                />
                                            </div>
                                        )}
                                        <span>{handlerMessage(itemDirect.message)}</span>
                                    </div>
                                </DMenu>
                            </div>
                        </div>
                    )
                }
                if (prevMessage) {
                    /* when another message */
                    return (
                        <DMenu type='messageInChannel' key={index}>
                            <div className={`flex pl-14 ${nextMessage ? '' : 'mb-2 '} relative group`}>
                                <div className='flex flex-col gap-1 '>
                                    {itemDirect.img && (
                                        <div className=' '>
                                            <img
                                                src={itemDirect.img.src}
                                                className='rounded-md object-cover max-w-[300px]'
                                            />
                                        </div>
                                    )}
                                    <span>{handlerMessage(itemDirect.message)}</span>
                                </div>
                                <div className={`absolute hidden group-hover:block left-2 top-0`}>
                                    <span className='text-[8px] font-medium'>04/13/2023</span>
                                </div>
                            </div>
                        </DMenu>
                    )
                }
            })}
        </div>
    )
}

export default MessagesConvertor
