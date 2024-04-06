/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { type FC, useEffect, useState } from 'react'
import axios from 'axios'

import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { Preview } from './resources/components'
import { type ILinkPreviewProps } from './resources/types'

const LinkPreview: FC<ILinkPreviewProps> = ({ url }) => {
    const [previewData, setPreviewData] = useState<TCriticalAnyType>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://api.microlink.io/?url=${url}`)
                setPreviewData(response.data)
            } catch (error) {
                console.error('Error fetching preview data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return !loading && previewData?.data?.publisher && <Preview dataPreviewPost={previewData.data} />
}

export default LinkPreview
