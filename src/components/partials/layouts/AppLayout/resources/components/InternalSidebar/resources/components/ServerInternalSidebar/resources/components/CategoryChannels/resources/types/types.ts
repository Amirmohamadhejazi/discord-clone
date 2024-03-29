interface ICategoryChannelsProps {
    dataChannels: {
        category: {
            name: string
            id: number
        }
        channels: {
            name: string
            channelTopic: string
            type: string
            id: number
            href?: string
            isPrivate?: boolean
            membersConnected?: string[]
        }[]
    }
}
export type { ICategoryChannelsProps }
