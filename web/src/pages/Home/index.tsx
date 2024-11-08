import { CheckCircle, ListChecks, MagnifyingGlass, PencilLine, PlusCircle, Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { useContext, useEffect, useState } from "react";
import { Task } from "../../components/Task";
import { TaskContext } from "../../contexts/TasksContext";

interface Task{
    title: string,
    priority: string,
    status: string
}

export function Home(){
    const {tasks} = useContext(TaskContext)

    /*function handleCreateTask(title: string, priority: string, status: string){
        setTask({title, priority,status})
    }*/

    

    

    return(
        <div className='bg-gray-300 flex   max-w-[75rem] mx-auto mt-[5rem] h-[80vh] rounded-md'>
            {/* Menu component*/}
            <Menu/>

            <main className='bg-gray-100  flex flex-1 flex-col p-4 items-center '>
                <h1 className="mb-8 font-extrabold text-gray-800 text-lg flex text-center gap-1"><ListChecks/>My Tasks</h1>

                <div className="flex items-center justify-between w-full">
                    <form action="" className="flex bg-white p-2 rounded-md">
                        <input type="text" placeholder="pesquisar tarefa" />
                        <MagnifyingGlass/>
                    </form>
                    <form action="">
                        <select name="prioridare" id="">
                            <option value="all">todas</option>
                            <option value="urgente">urgente</option>
                            <option value="importante">importante</option>
                            <option value="normal">normal</option>
                        </select>
                    </form>
                    <NavLink to="/createTask" className="flex justify-center items-center bg-orange-400 rounded-md p-2 mb-3">criar tarefa<PlusCircle /></NavLink>
                </div>


                <div className="w-full ">
                <table className="w-full" >
                    <thead className="bg-purple-400 text-white ">
                        <tr className="rounded-md ">
                            <th className="text-start p-4 ">Tarefa</th>
                            <th className="text-start">prioridade</th>
                            <th className="text-start">Status</th>
                            <th className="text-start">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        
                            <Task title={"Task test"} priority={"urgente"} status={"importante"} />
                        
                    
                    </tbody>
                </table>
                </div>
            </main>
        </div>
    )
}