import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { CreateTask} from '../pages/CreateTask'
import { UpdateTask } from '../pages/UpdateTask'
import { CreateAcount } from '../pages/CreateAcount'


export function Router(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/' element={<Home/>}/>
            <Route path='/createTask' element={<CreateTask/>}/>
            <Route path='/updateTask' element={<UpdateTask/>}/>
            <Route path='/createAcount' element={<CreateAcount/>}/>
        </Routes>
    )
}