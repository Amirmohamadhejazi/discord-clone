import { type FC } from 'react'
import { HiMiniPlusCircle } from 'react-icons/hi2'
import { RiEmojiStickerFill } from 'react-icons/ri'
import { Textarea } from '@mantine/core'

import { ArrowSendMessage_icon, Gif_icon, Gift_icon, Sticker_icon } from '@molecules/icons'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { type IInputChatProps } from './resources/types'

const InputChat: FC<IInputChatProps> = ({ textMessage, setTextMessage, placeholder }) => {
    const submitHandler = () => {
        console.log(textMessage)
        setTextMessage('')
    }

    const handleKeyPress = (event: TCriticalAnyType) => {
        // Check if the key pressed is the Enter key without the Shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault() // Prevent the default behavior of Enter key
            submitHandler()
        } else if (event.key === 'Enter' && event.shiftKey) {
            // If Shift + Enter is pressed, insert a newline
            setTextMessage(textMessage)
        }
    }
    return (
        <div className='flex-shrink-0 bg-[#383a40] p-2 mx-4 mb-4 rounded-md'>
            <div className='flex justify-between items-start gap-x-2 min-h-[35px]  max-h-[150px] md:max-h-[240px] overflow-y-auto'>
                <div className='sticky top-0 flex pt-[2px]'>
                    <HiMiniPlusCircle className='text-general-gray-900  hover:text-general-gray-950 cursor-pointer text-3xl' />
                </div>

                <form className='w-full '>
                    <Textarea
                        className='w-full'
                        classNames={{
                            input: `bg-transparent w-full focus:outline-none text-white resize-none placeholder:text-sm placeholder:truncate border-transparent ${
                                textMessage.match(/^[\u0600-\u06FF]/) ? 'text-right' : ''
                            }`
                        }}
                        styles={{ input: { direction: textMessage.match(/^[\u0600-\u06FF]/) ? 'rtl' : 'unset' } }}
                        value={textMessage}
                        onChange={(e: TCriticalAnyType) => setTextMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder={`Message to #${placeholder}`}
                        autosize
                    />
                </form>
                <div className='hidden md:flex flex-shrink-0 sticky top-0 items-center gap-x-3 pt-[2px]'>
                    <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                        <Gift_icon />
                    </div>
                    <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                        <Gif_icon />
                    </div>
                    <div className='hover:text-general-gray-950 duration-300 cursor-pointer'>
                        <Sticker_icon />
                    </div>
                    <RiEmojiStickerFill className='text-2xl hover:text-general-gray-950 duration-300 cursor-pointer' />
                </div>
                <div className='sticky md:hidden top-0  flex items-center gap-x-3 pt-[2px]'>
                    <div className='flex items-center gap-x-2'>
                        <RiEmojiStickerFill className='text-2xl hover:text-general-gray-950 duration-300 cursor-pointer' />
                        <div className='h-6 w-[1px] bg-general-border rounded-md'> </div>
                        <ArrowSendMessage_icon className='hover:text-general-blue duration-200 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputChat
