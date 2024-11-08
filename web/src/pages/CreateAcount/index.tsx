import tasksImage from './../../assets/tasks.svg'
import {Key, UserCircle} from 'phosphor-react'
 
export function CreateAcount(){
    return(
        <div className='bg-gray-300 flex  max-w-[75rem] mx-auto mt-[5rem] rounded-md'>
            <aside className='flex-1'>
                <img src={tasksImage} alt="taskImages" />
            </aside>

            <main className='bg-purple-500  flex flex-1 m-1 rounded-md'>
                
                <div className='w-[70%] mx-auto self-center'>
                    <h1 className='text-2xl font-extrabold text-white mb-4'>Criar Conta</h1>
                    <form className='flex flex-col  '>
                        <label htmlFor="username" className='text-white'><UserCircle className='inline-block'/>User</label>
                        <input type="text" placeholder='username' className='bg-slate-200 p-3 rounded-md mb-3 text-gray-700 text-base border-none '/>
                        
                        <label htmlFor="password" className='text-white'><Key className='inline-block'/> password</label>
                        <input type="password" placeholder='password' className='bg-slate-200 p-3 rounded-md mb-3 text-gray-700 text-base border-none '/>

                        <p className='text-gray-100'>Apois a criação da conta faça o login</p>

                        <button type='submit' className='p-2 rounded-lg mt-8 w-[60%] self-center bg-orange-400 text-white'>Criar</button>
                    </form>
                </div>
            </main>
        </div>
    )
}