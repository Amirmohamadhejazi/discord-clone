const FriendsActivity = () => {
    return (
        <div className=' flex-col w-[360px] py-[16px] px-[8px] shadow-md p-2 hidden xl:flex'>
            <span className='text-xl font-semibold text-white my-[16mx] px-[8px]'>Active Now</span>
            <div className='py-8 '>
                <div className='flex flex-col gap-y-2 text-sm text-center'>
                    <span className='text-white font-bold'>{`It's quiet for now...`}</span>
                    <span>
                        When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FriendsActivity
