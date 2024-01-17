'use client'
import React from 'react'

import { static_data_social } from '@templates/HomeTemplate/resources/constants/static-data'

const userDirect = ({ params }: { params: { userId: string } }) => {
    const data = static_data_social.filter((items) => items.useId === params.userId)[0]
    console.log(params.userId)

    console.log('data', data)
    console.log(new Date())

    return <div>userDirect {params.userId}</div>
}

export default userDirect
