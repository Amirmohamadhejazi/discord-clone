/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type FC } from 'react'
import { usePathname } from 'next/navigation'

import { DMenu } from '@atoms/DMenu'
import { DProfileMenu } from '@atoms/DProfileMenu'
import { ImgMessage } from '@atoms/ImgMessage'

// import { static_all_users } from '@core/constants/dummy-data'
import { static_all_users, static_data_users_servers } from '@core/constants/dummy-data'
import { type TCriticalAnyType } from '@core/types/common/critical-any'
import { handlerMessage } from '@core/utils/common/handlerMessage'

import { type IMessagesProps } from './resources/types/types'

const MessagesConvertor: FC<IMessagesProps> = ({ messages }) => {
    const path = usePathname()
    return (
        <div className='flex flex-col gap-y-1 my-2 '>
            {messages.map((itemDirect, index) => {
                const regex = /^\/channels\/me\/[\w\d]+$/
                const userData: TCriticalAnyType = (
                    regex.test(path) ? static_all_users : static_data_users_servers
                ).find((items) => items.useId === itemDirect.sender)

                const prevMessage = index > 0 ? messages[index - 1].sender === messages[index].sender : false
                const nextMessage = messages[index + 1]?.sender === messages[index].sender || false

                if (!prevMessage) {
                    return (
                        <div className={`flex items-start gap-x-4 ${!nextMessage ? 'mb-2 ' : ''} `} key={index}>
                            <DProfileMenu dataProfile={userData}>
                                <div className='w-10 h-10 mt-2 '>
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
                                        <span className='text-[10px] font-medium select-none'>04/13/2023</span>
                                    </div>
                                </DMenu>
                                {/* when single message */}
                                <DMenu type='messageInChannel'>
                                    <div className='flex flex-col gap-1 '>
                                        {itemDirect.img && <ImgMessage img={itemDirect.img.src} />}
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
                                    {itemDirect.img && <ImgMessage img={itemDirect.img.src} />}
                                    <span>{handlerMessage(itemDirect.message)}</span>
                                </div>
                                <div className={`absolute hidden group-hover:block left-2 top-0 select-none`}>
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
