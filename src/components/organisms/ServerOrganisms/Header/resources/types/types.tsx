interface IHeaderProps {
    toggleShowMember: () => void
    channelData: {
        channelTopic: string
        href: string
        id: number
        isPrivate: boolean
        name: string
        type: string
    }
}

export type { IHeaderProps }
