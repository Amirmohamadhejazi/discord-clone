/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'

import { Header, MessageContainer } from '@organisms/ServerOrganisms'

import { static_data_servers } from '@core/constants/dummy-data/static-data'
import { findChannelByHref } from '@core/utils/common/findChannelByHref'
import { findFirstTextChannel } from '@core/utils/common/findFirstTextChannel'

const ServerTemplate = () => {
    const [IsShowMember, { toggle: toggleShowMember, close: closeShowMember }] = useDisclosure(true)
    const matchesSm = useMediaQuery('(max-width: 576px)')
    const [, , idServer, idChannel] = usePathname().split('/')
    const dataServer = static_data_servers.find((itemServer) => itemServer.id === idServer)

    // Call the function and store the result
    const channelData = !idChannel
        ? findFirstTextChannel(dataServer?.channelsContent)
        : findChannelByHref(dataServer?.channelsContent, idChannel)

    useEffect(() => {
        if (matchesSm) {
            closeShowMember()
        }
    }, [matchesSm])
    return (
        <div className='h-full flex flex-col'>
            <Header channelData={channelData} toggleShowMember={toggleShowMember} />
            <MessageContainer channelData={channelData} isShowMember={IsShowMember} />
        </div>
    )
}

export default ServerTemplate
