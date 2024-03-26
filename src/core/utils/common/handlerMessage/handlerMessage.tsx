/* eslint-disable @next/next/no-img-element */
import { Tooltip } from '@mantine/core'

import { emoji_data } from '@core/constants/dummy-data'

const handlerMessage = (textMessage: string) => {
    const messageItems = textMessage.split(/(:\w+:)/)

    let tooltipIndex = 0

    return (
        <div className='flex gap-x-1 flex-wrap items-center text-sm text-white'>
            {messageItems.map((item, index) => {
                const emojiRegex = /:\w+:/g

                if (item.match(emojiRegex)) {
                    const emoji = item.replace(/:/g, '')
                    const EmojiData = emoji_data.find((item) => item.name === emoji)

                    if (EmojiData) {
                        const regex = /^:.+?:$/
                        return (
                            <Tooltip
                                label={emoji}
                                withArrow
                                multiline
                                offset={2}
                                classNames={{ tooltip: 'text-[9px] font-bold max-w-36 ' }}
                                className='bg-general-gray-50'
                                key={tooltipIndex++}
                            >
                                <img
                                    src={EmojiData?.img}
                                    className={`${regex.test(textMessage) ? 'size-10' : 'size-7'} rounded-sm`}
                                    alt={EmojiData?.name}
                                />
                            </Tooltip>
                        )
                    } else {
                        // Emoji not found, replace with the original text
                        return (
                            <span className='flex items-center gap-x-1' key={index}>
                                {item}
                            </span>
                        )
                    }
                } else if (item.trim() !== '') {
                    return (
                        <span className='flex items-center gap-x-1' key={index}>
                            {item}
                        </span>
                    )
                }

                return null // Ignore empty items
            })}
        </div>
    )
}

export { handlerMessage }
