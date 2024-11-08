import { useContext, useState } from "react";
import { Menu } from "../../components/Menu";
import { TaskContext } from "../../contexts/TasksContext";
import { useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const newtaskSchema = zod.object({
    title: zod.string().min(1, "Informe a o titulo da tarefa"),
    priority: zod.string(),
    status: zod.string()
})


export function CreateTask(){
    const {setTask,task, tasks, setTasks} = useContext(TaskContext)


    const [title, setTitle] = useState<string>('')

    const [selectedPriorityValue, setSelectedPriorityValue] =useState<string>("")

    const {register, handleSubmit} = useForm({
        resolver: zodResolver(newtaskSchema),
    })

    function handleGetSelectedPriorityValue(event: Event){
        setSelectedPriorityValue(event.target.value)
    }

    function handleCreateTask(){
        
        setTask({title: title, priority: selectedPriorityValue , status:'pendente'})
        setTasks([...tasks, task])

        console.log(tasks)
    }
 
    return(
        <div className='bg-gray-300 flex   max-w-[75rem] mx-auto mt-[5rem] h-[80vh] rounded-md'>

            <Menu/>

            <main className='bg-gray-100  flex flex-1 flex-col p-4 items-center '>
                <h1 className="mb-8 font-extrabold text-gray-800 text-lg mt-3">Criar Tarefa</h1>

                <form onSubmit={handleSubmit(handleCreateTask)} action=""  className="flex flex-col w-[500px]">
                    <label htmlFor="task" className="text-purple-500">Nome da tarefa</label>
                    <input 
                        type="text" 
                        id="task"
                        placeholder="TaskName" 
                        {...register('task')}
                        onChange={(title)=> setTitle(title.target.value)}
                        className="w-full p-3 mb-6"
                    />

                    <label htmlFor="priority" className="text-purple-500">Prioridade da tarefa</label>
                    <select value={selectedPriorityValue} onChange={handleGetSelectedPriorityValue}  className="w-full p-3 mb-6">
                        <option value="urgente">urgente</option>
                        <option value="importante">importante</option>
                        <option value="normal">normal</option>
                    </select>

                    <button onClick={handleCreateTask}  className="bg-orange-400 p-2 rounded-md text-white hover:-translate-y-1">Criar</button>
                    
                </form>

            </main>
        </div>
    )
}