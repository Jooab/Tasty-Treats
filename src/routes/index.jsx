import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import { AccountSignIn } from '../pages/accountSignIn'
import { AccountSignUp } from '../pages/accountSignUp'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/signin' element={<AccountSignIn />}/>
                <Route exact path='/signup' element={<AccountSignUp />}/>
            </Routes>
        </BrowserRouter>
    )
}