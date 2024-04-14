'use client'
import { useState } from 'react'

export const MessageSpoiler = ({ message, type }: { message: string; type: string }) => {
    const [show, setShow] = useState(false)

    const messageHandler = () => {
        if (type === 'PhoneNumber') {
            const PhoneNumber = message.slice(-4).padStart(message.length, '*')
            return PhoneNumber
        }
        if (type === 'Email') {
            const EmailAtIndex = message.indexOf('@')
            const Email = message.substring(0, EmailAtIndex).replace(/./g, '*') + message.substring(EmailAtIndex)
            return Email
        }
    }

    return (
        <div className='flex items-center gap-x-2 select-none'>
            <span>{show ? message : messageHandler()}</span>
            <span className='text-blue-500 cursor-pointer' onClick={() => setShow((prev) => !prev)}>
                {show ? 'Hide' : 'Reveal '}
            </span>
        </div>
    )
}
