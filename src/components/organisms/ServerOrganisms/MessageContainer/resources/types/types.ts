interface IMessageContainerProps {
    isShowMember: boolean
    channelData: {
        channelTopic: string
        href: string
        id: number
        isPrivate: boolean
        messages: {
            sender: string
            message: string
            messageId: string
            date: string
        }[]
        name: string
        type: string
    }
}

export type { IMessageContainerProps }
