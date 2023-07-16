import React from 'react'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
const Todos = () => {
    const {todos,setTodos} = useContext(AuthContext)
  return (
    <>
    <div className='text-white gap-5 w-screen h-screen flex flex-col'>
        <div className='flex items-center justify-center flex-col'>
        <h1 className='text-3xl text-orange-500 mb-40 mt-10'>Todos</h1>
        {
            todos.map((todo, index) => (
                <div key={index} className='bg-gray-700 rounded-md flex flex-col gap-2'>
                    <h1 className='text-xl'>{index}.  {todo}</h1>
                    </div>
            )) 
        }
        </div>
    </div>
        </>
  )
}

export default Todos