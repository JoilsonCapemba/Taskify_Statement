import { FlagCheckered, House, SignOut, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Task(){
    return(
        <div className='bg-gray-300 flex   max-w-[75rem] mx-auto mt-[5rem] h-[80vh] rounded-md'>

            <aside className='bg-gray-200 min-w-[300px] p-4 justify-center'>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <img src="https://github.com/joilsoncapemba.png" alt="avatar" className="w-14 rounded-full" />
                    <p>Joilson Capemba</p>
                </div>
                <nav className="w-[300px] flex flex-col">
                        <NavLink to="/" className=" hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><House className="inline"/> Home</NavLink>
                        <NavLink to="/" className="hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><Timer className="inline"/> pendings</NavLink>
                        <NavLink to="/" className="hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><FlagCheckered className="inline"/> finisheds</NavLink>
                        <NavLink to="/login" className=" hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><SignOut className="inline"/> Logout</NavLink>
                </nav>
            </aside>

            <main className='bg-gray-100  flex flex-1 flex-col p-4 items-center '>
                <h1 className="mb-8 font-extrabold text-gray-800 text-lg mt-3">Criar Tarefa</h1>

                <form action="" className="flex flex-col w-[500px]">
                    <label htmlFor="taskname" className="text-purple-500">Nome da tarefa</label>
                    <input type="text" placeholder="TaskName" className="w-full p-3 mb-6"/>

                    <label htmlFor="priority" className="text-purple-500">Prioridade da tarefa</label>
                    <select className="w-full p-3 mb-6">
                        <option value="urgente">urgente</option>
                        <option value="importante">importante</option>
                        <option value="normal">normal</option>
                    </select>

                    <button type="submit" className="bg-orange-400 p-2 rounded-md text-white">Criar</button>
                    
                </form>

            </main>
        </div>
    )
}