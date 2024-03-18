interface IMessageContainerProps {
    isShowMember: boolean
    channelData: {
        channelTopic: string
        href: string
        id: number
        isPrivate: boolean
        name: string
        type: string
    }
}

export type { IMessageContainerProps }
