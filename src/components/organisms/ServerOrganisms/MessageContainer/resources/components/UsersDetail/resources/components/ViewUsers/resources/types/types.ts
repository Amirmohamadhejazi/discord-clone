interface IViewUsersProps {
    channelData: {
        name: string
        channelTopic: string
        isPrivate: boolean
        type: string
        id: number
        roles: { name: string; color: string; roleId: string }[]
        href: string
    }
}
export type { IViewUsersProps }
