import { type TCriticalAnyType } from '@core/types/common/critical-any'

function findFirstTextChannel(data: TCriticalAnyType) {
    // Loop through each category object in the data array
    for (const category of data) {
        // Loop through each channel object in the channels array of the category
        for (const channel of category.channels) {
            // If the type property of the channel is 'text', return the channel object
            if (channel.type === 'text') {
                return channel
            }
        }
    }
    // Return null if no text channel is found
    return null
}

export { findFirstTextChannel }
