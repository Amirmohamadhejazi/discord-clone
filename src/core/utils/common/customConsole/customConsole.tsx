import { type ICustomConsole } from './resources/types/types'

const customConsole = ({ text, type = 'manual', anotherItems, fontSize = 16 }: ICustomConsole): void => {
    const typeText = () => {
        switch (type) {
            case 'manual':
                return 'white'
            case 'success':
                return 'green'
            case 'error':
                return 'red'
            case 'special':
                return 'purple'
        }
    }

    const outputColor = `color:${typeText()} ; font-size:${fontSize}px; ; text-shadow: 1px 1px #ff0000;`

    if (anotherItems) {
        console.log(`%c ${text}`, outputColor, anotherItems)
    } else {
        console.log(`%c ${text}`, outputColor)
    }
    // usage
    // customConsole({ text: 'Amir special:', type: 'special', anotherItems: Array(23), fontSize: 25 })
}
export { customConsole }
