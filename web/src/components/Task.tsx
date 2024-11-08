import { CheckCircle, PencilLine, Trash } from "phosphor-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TaskContext } from "../contexts/TasksContext";

interface TaskProps{
    title: string,
    priority: string,
    status: string
}

export function Task({title, priority, status}: TaskProps){

    //const {task} = useContext(TaskContext)

    return(
                        <tr className="bg-white p-2 m-3 ">
                            <td className="p-3">{title}</td>
                            <td className="text-red-500">{priority}</td>
                            <td className="flex items-center h-full"><CheckCircle color="green"/>{status}</td>
                            <td className="">
                                <div className="flex justify-center gap-x-8  text-center">
                                    <form action=""><button type="submit"><Trash size={20} color="red"/> </button ></form>
                                    <NavLink to="/updateTask"><PencilLine size={20} color="blue"/></NavLink >
                                </div>
                            </td>
                        </tr>
    )
}