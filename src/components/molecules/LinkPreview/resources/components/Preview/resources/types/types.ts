interface IPreviewProps {
    dataPreviewPost: {
        lang: string
        author: string
        title: string
        publisher: string
        image: {
            url: string
            type: string
            size: number
            height: number
            width: number
            size_pretty: string
        }
        date: string
        description: string
        url: string
        logo: {
            url: string
            type: string
            size: number
            height: number
            width: number
            size_pretty: string
        }
    }
}

export type { IPreviewProps }
