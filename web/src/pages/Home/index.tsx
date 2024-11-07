import { CheckCircle, FlagCheckered, House, ListChecks, MagnifyingGlass, PencilLine, PlusCircle, SignOut, Timer, Trash } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Home(){
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
                        <tr className="bg-white p-2 m-3 ">
                            <td className="p-3">Tarefa</td>
                            <td className="text-red-500">urgente</td>
                            <td className="flex items-center h-full"><CheckCircle color="green"/>concluida</td>
                            <td className="">
                                <div className="flex justify-center gap-x-8  text-center">
                                    <form action=""><button type="submit"><Trash size={20} color="red"/> </button ></form>
                                    <NavLink to="/updateTask"><PencilLine size={20} color="blue"/></NavLink >
                                </div>
                            </td>
                        </tr>

                        <tr className="bg-white p-2 m-3 ">
                            <td className="p-3">Tarefa</td>
                            <td>urgente</td>
                            <td>pendente</td>
                            <td className="">
                                <div className="flex justify-center gap-4 text-center relative ">
                                    <form action=""><button type="submit"><Trash size={20} color="red"/> </button></form>
                                    <NavLink to="/updateTask"><PencilLine size={20} color="blue"/></NavLink >
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </main>
        </div>
    )
}