const MeActivities = () => {
    return (
        <div className='h-full border-general-border flex-col  p-4 border-l flex'>
            <span className='text-xl font-bold text-white '>Active Now</span>
            <div className='py-8'>
                <div className='flex flex-col gap-y-2 text-xs text-center'>
                    <span className='text-white font-bold'>{`It's quiet for now...`}</span>
                    <span>
                        When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MeActivities
