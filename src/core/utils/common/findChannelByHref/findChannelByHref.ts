import { type TCriticalAnyType } from '@core/types/common/critical-any'

function findChannelByHref(data: TCriticalAnyType, href: string) {
    for (const category of data) {
        for (const channel of category.channels) {
            if (channel.href && channel.href.includes(href)) {
                return channel
            }
        }
    }
    return null // Channel not found
}

export { findChannelByHref }
