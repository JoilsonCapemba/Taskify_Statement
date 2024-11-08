import { Menu } from "../../components/Menu";

export function UpdateTask(){
    return(
        <div className='bg-gray-300 flex   max-w-[75rem] mx-auto mt-[5rem] h-[80vh] rounded-md'>

            <Menu/>

            <main className='bg-gray-100  flex flex-1 flex-col p-4 items-center '>
                <h1 className="mb-8 font-extrabold text-gray-800 text-lg mt-3">Atualizar Tarefa</h1>

                <form action="" className="flex flex-col w-[500px]">
                    <label htmlFor="taskname" className="text-purple-500">Nome da tarefa</label>
                    <input type="text" placeholder="TaskName" className="w-full p-3 mb-6"/>

                    <label htmlFor="priority" className="text-purple-500">Prioridade da tarefa</label>
                    <select className="w-full p-3 mb-6">
                        <option value="urgente">urgente</option>
                        <option value="importante">importante</option>
                        <option value="normal">normal</option>
                    </select>

                    <label htmlFor="status" className="text-purple-500">Status da tarefa</label>
                    <select className="w-full p-3 mb-6">
                        <option value="pendente">pendente</option>
                        <option value="concluida">concluida</option>
                    </select>

                    <button type="submit" className="bg-orange-400 p-2 rounded-md text-white">Criar</button>
                    
                </form>

            </main>
        </div>
    )
}