import { FlagCheckered, House, SignOut, Timer } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function Menu(){
    const {user} = useContext(UserContext)

    return(
        <aside className='bg-gray-200 min-w-[300px] p-4 justify-center'>
                <div className="flex justify-center items-center gap-4 mb-6">
                    <img src="https://github.com/joilsoncapemba.png" alt="avatar" className="w-14 rounded-full" />
                    <p>{user}</p>
                </div>
                <nav className="w-[300px] flex flex-col">
                        <NavLink to="/" className=" hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><House className="inline"/> Home</NavLink>
                        <NavLink to="/" className="hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><Timer className="inline"/> pendings</NavLink>
                        <NavLink to="/" className="hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><FlagCheckered className="inline"/> finisheds</NavLink>
                        <NavLink to="/login" className=" hover:bg-purple-300 p-3 bg-gray-100 m-1 rounded-md mb-2"><SignOut className="inline"/> Logout</NavLink>
                </nav>
            </aside>
    )
}