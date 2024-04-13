/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Tooltip } from '@mantine/core'

import { LinkPreview } from '@molecules/LinkPreview'

import { emoji_data } from '@core/constants/dummy-data'

const handlerMessage = (textMessage: string) => {
    const messageItems = textMessage.split(/(:\w+:)/)

    // const tooltipIndex = 0

    return (
        <div className='flex gap-x-1 flex-wrap items-center  break-all  text-sm text-white'>
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
                                key={index}
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
                        return item + '  '
                        // <span className='flex items-center gap-x-1' key={index}>
                        //     {item}
                        // </span>
                    }
                } else if (item.trim() !== '') {
                    const messageItems = item.split(' ')
                    const filterLinks = item.split(' ').filter((itemLink) => itemLink.includes('http'))
                    return (
                        <div className='flex flex-col gap-2 ' key={index}>
                            <div className='flex gap-x-1 items-center flex-wrap'>
                                {messageItems.map((itemMessage, indexMessage) => {
                                    const isLink = itemMessage.includes('http')
                                    return isLink ? (
                                        // -webkit-box-orient: vertical;
                                        // overflow: hidden;
                                        // display: -webkit-box;
                                        // -webkit-line-clamp: 2;

                                        <Link
                                            href={itemMessage}
                                            key={indexMessage}
                                            target='_blank'
                                            className='text-blue-400 hover:underline break-all block leading-tight'
                                            // className='text-blue-400 hover:underline break-all block truncate leading-tight'
                                        >
                                            {itemMessage}
                                        </Link>
                                    ) : (
                                        itemMessage + '  '
                                        // <span className='flex items-center gap-x-1 break-all' key={indexMessage}>
                                        //     {}
                                        // </span>
                                    )
                                })}
                            </div>
                            {filterLinks.length > 0 &&
                                filterLinks.map((itemsLink, indexLink) => (
                                    <LinkPreview url={itemsLink} key={indexLink} />
                                ))}
                        </div>
                    )
                }

                return null
            })}
        </div>
    )
}

export { handlerMessage }
