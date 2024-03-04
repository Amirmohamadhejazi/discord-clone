import { type TCriticalAnyType } from '@core/types/common/critical-any'

import {
    activeDeveloperImg,
    botDeveloperImg,
    bugHunter1,
    bugHunter2,
    earlySupporterImg,
    hypeSquadBalance,
    hypeSquadBravery,
    hypeSquadBrilliance,
    hypeSquadEvent,
    idBadgeImg,
    moderatorProgram,
    nitroBoost1MonthsImg,
    nitroBoost2MonthsImg,
    nitroBoost3MonthsImg,
    nitroBoost6MonthsImg,
    nitroBoost9MonthsImg,
    nitroBoost12MonthsImg,
    nitroBoost15MonthsImg,
    nitroBoost18MonthsImg,
    nitroBoost24MonthsImg,
    nitroIconImg
} from '@public/images'

const badgeHandler = (dataBadge: TCriticalAnyType): { name: string; img: TCriticalAnyType } | undefined => {
    if (dataBadge) {
        switch (dataBadge.name) {
            case 'moderator-program': {
                return { name: `Moderator Program`, img: moderatorProgram.src }
            }
            case 'hypeSquad-events': {
                return { name: `HypeSquad Events`, img: hypeSquadEvent.src }
            }
            case 'hypeSquad': {
                const { type } = dataBadge
                if (type === 'balance') {
                    return { name: `HypeSquad`, img: hypeSquadBalance.src }
                }
                if (type === 'bravery') {
                    return { name: `HypeSquad`, img: hypeSquadBravery.src }
                }
                if (type === 'brilliance') {
                    return { name: `HypeSquad`, img: hypeSquadBrilliance.src }
                }
            }
            case 'bug-hunter': {
                const { level } = dataBadge
                if (level === 1) {
                    return { name: `Bug Hunter`, img: bugHunter1.src }
                }
                if (level === 2) {
                    return { name: `Bug Hunter`, img: bugHunter2.src }
                }
            }
            case 'active-developer': {
                return { name: `Active developer`, img: activeDeveloperImg.src }
            }
            case 'bot-developer': {
                return { name: `Bot Developer`, img: botDeveloperImg.src }
            }
            case 'early-supporter': {
                return { name: `Early Supporter`, img: earlySupporterImg.src }
            }
            case 'nitro':
                const { type } = dataBadge
                if (type === 'boost') {
                    const { badgeLevel, timeBoost } = dataBadge
                    switch (badgeLevel) {
                        case 1:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost1MonthsImg.src }
                        case 2:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost2MonthsImg.src }
                        case 3:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost3MonthsImg.src }
                        case 6:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost6MonthsImg.src }
                        case 9:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost9MonthsImg.src }
                        case 12:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost12MonthsImg.src }
                        case 15:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost15MonthsImg.src }
                        case 18:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost18MonthsImg.src }
                        case 24:
                            return { name: `Server Boosting since ${timeBoost}`, img: nitroBoost24MonthsImg.src }
                    }
                }
                if (type === 'default') {
                    return { name: `Subscriber since ${dataBadge.timeNitro}`, img: nitroIconImg.src }
                }

            case 'id': {
                const { userName } = dataBadge

                return { name: userName, img: idBadgeImg.src }
            }
        }
    }
}
export { badgeHandler }
