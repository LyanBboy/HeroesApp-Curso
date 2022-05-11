import { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo( ()=> getHeroByPublisher(publisher) ,[publisher]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
            {
                heroes.map( heroe=> (
                    <HeroeCard 
                    key={heroe.id} 
                    {...heroe}
                    />
                ))
            }
        </div>
    )
}
