import { type TCriticalAnyType } from '@core/types/common/critical-any'

import { doNotDisturbStatus, idleStatus, offlineStatus, onlineStatus } from '@public/images'

const statusHandler = (status: TCriticalAnyType) => {
    switch (status) {
        case 'online':
            return onlineStatus.src
        case 'offline':
            return offlineStatus.src
        case 'idle':
            return idleStatus.src
        case 'doNotDisturb':
            return doNotDisturbStatus.src
    }
}
export { statusHandler }
