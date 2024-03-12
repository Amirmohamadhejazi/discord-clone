'use client'
import { useState } from 'react'

import { MeActivities, MeFriends, MeHeader } from '@organisms/MeOrganisms'

const MeTemplate = () => {
    const [tabMenu, setTabMenu] = useState(1)

    return (
        <div className='h-full flex flex-col bg-general-gray-100 '>
            <MeHeader setTabMenu={setTabMenu} tabMenu={tabMenu} />
            <div className='grow mx-1 mb-2 overflow-auto flex '>
                <div className='grow overflow-y-auto'>
                    <MeFriends tabMenu={tabMenu} />
                </div>
                <div className='w-80 flex flex-col'>
                    <div className='grow overflow-y-auto'>
                        <MeActivities />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeTemplate
