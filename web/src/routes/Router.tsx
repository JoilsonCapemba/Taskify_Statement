import {Route, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Task } from '../pages/Task'
import { UpdateTask } from '../pages/UpdateTask'

export function Router(){
    return(
        <Routes>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/' element={<Home/>}/>
            <Route path='/createTask' element={<Task/>}/>
            <Route path='/updateTask' element={<UpdateTask/>}/>
        </Routes>
    )
}