import { createContext, ReactNode, useState } from "react";

interface Task{
    title: string,
    priority: string,
    status: string
}

interface Tasks{
    tasks: Task[]
}

interface TaskContextType{
    task: Task,
    setTask: (task: Task)=>void,
    tasks: Task[],
    setTasks: (task: Task)=>void
}

export const TaskContext = createContext({} as TaskContextType)

interface TaskProviderProps{
    children: ReactNode
}

export function TaskProvider({children}: TaskProviderProps){
    const [task, setTask] = useState<Task >({title: "passer com a esposa", priority: "urgente", status: "pendente"})
    const [tasks, setTasks] = useState<Task[]>([])
    return(
        <TaskContext.Provider value={{task, setTask,tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )

}