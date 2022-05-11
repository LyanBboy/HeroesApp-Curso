import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={ <LoginScreen/> }/>
            <Route path='/*' element={ <DashboardRoute/> }/>
        </Routes>
    </BrowserRouter>
  )
}
