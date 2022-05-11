import { Routes ,Route } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/heroe/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoute = () => {
  return (
    <>
        <NavBar/>
        <div className='container'>
          <Routes>
              <Route path='marvel' element={ <MarvelScreen/> }/>
              <Route path='dc' element={ <DcScreen/> }/>
              <Route path='hero/:heroid' element={ <HeroesScreen/> }/>
              <Route path='search' element={ <SearchScreen/> }/>
              <Route path='/' element={ <MarvelScreen/> }/>
          </Routes>
        </div>
    </>
  )
}

