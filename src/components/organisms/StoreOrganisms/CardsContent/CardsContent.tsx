import { CardNitro } from '@atoms/CardNitro'

import { static_data } from './resources'

const CardsContent = () => {
    return static_data.map((items, indexNitro) => (
        <div className='flex flex-col gap-5' key={indexNitro}>
            <span className='text-2xl font-extrabold ml-5'>{items.category}</span>

            <div className='grid items-start h-full duration-100 md:grid-cols-2 xl:grid-cols-3 gap-5  transition-all'>
                {items.cards.map((itemsExplore, index) => (
                    <CardNitro itemsCard={itemsExplore} key={index} />
                ))}
            </div>
        </div>
    ))
}

export default CardsContent
