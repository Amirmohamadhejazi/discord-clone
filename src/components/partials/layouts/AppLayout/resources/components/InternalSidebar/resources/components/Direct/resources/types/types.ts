interface IDirectProps {
    dataDirect: {
        personId: string
        lastUpdateData: string
        messages: {
            message: string
            messageId: string
            date: string
        }
    }
}

export type { IDirectProps }
