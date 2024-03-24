'use client'
import { useState } from 'react'
import { Button, Input } from '@mantine/core'

import { MeActivities, MeFriends, MeHeader } from '@organisms/MeOrganisms'

import { WumpusNotify } from '@molecules/WumpusNotify'

const MeTemplate = () => {
    const [tabMenu, setTabMenu] = useState(1)
    const [input, setInput] = useState('')

    return (
        <div className='h-full flex flex-col bg-general-gray-100  select-none'>
            <MeHeader setTabMenu={setTabMenu} tabMenu={tabMenu} />

            <div className='grow mx-1 mb-2 overflow-auto flex '>
                <div className='grow overflow-y-auto'>
                    {tabMenu === 5 ? (
                        <div className='h-full flex flex-col pt-4  gap-y-3'>
                            <div className='flex flex-col text-xs gap-2 font-semibold ml-5 mr-4'>
                                <span className='text-white'>ADD FRIEND</span>
                                <span>You can add friends with their Discord username.</span>
                                <div className='mt-2 relative '>
                                    <Input
                                        classNames={{
                                            input: 'w-full  h-12 pl-2  pr-36 text-sm placeholder:text-general-gray-800 text-white font-medium border-black bg-general-gray focus:border-general-blue rounded-md'
                                        }}
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder='You can add friends with their Discord username.'
                                    />
                                    <div className='flex absolute right-2 top-1/2 transform  -translate-y-1/2'>
                                        <Button
                                            disabled={input.length < 1}
                                            className={`bg-general-blue ${
                                                input.length < 1 ? 'cursor-not-allowed' : ''
                                            }`}
                                            classNames={{ root: 'px-1 h-8' }}
                                        >
                                            <div className='flex text-xs items-center font-medium gap-2'>
                                                <span>Send Friend Request</span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <hr className='border-general-border ' />
                            <WumpusNotify type={2} />
                        </div>
                    ) : (
                        <MeFriends tabMenu={tabMenu} />
                    )}
                </div>
                <div className='w-80 hidden xl:flex  flex-col'>
                    <div className='grow overflow-y-auto'>
                        <MeActivities />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeTemplate
