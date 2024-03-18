import { type StaticImageData } from 'next/image'

interface IMessagesProps {
    messages: {
        date: string
        message: string
        messageId: string
        img?: StaticImageData
        sender: string
    }[]
}

export type { IMessagesProps }
