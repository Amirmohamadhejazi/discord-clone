import { type ReactNode } from 'react'

import { AppLayout } from '@partials/layouts/AppLayout'

const layout = ({ children }: { children: ReactNode }) => {
    return <AppLayout>{children}</AppLayout>
}

export default layout
