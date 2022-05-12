import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={ 
            <PublicRouter>
              <LoginScreen/> 
            </PublicRouter>
            }/>
            <Route path='/*' element={ 
              <PrivateRouter>
                <DashboardRoute/>
              </PrivateRouter> }
            />
            {/* <Route path='/*' element={ <DashboardRoute/> }/> */}
        </Routes>
    </BrowserRouter>
  )
}
