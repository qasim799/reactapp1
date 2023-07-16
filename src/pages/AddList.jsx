import React from 'react'
import { useState } from 'react'
import Todos from './Todos'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
const AddList = () => {
    const {todos, setTodos} = useContext(AuthContext)
    const [input, setinput] = useState('')
  return (
    <div className='w-screen h-screen items-center justify-center flex flex-col gap-5'>
        <h1 className='text-4xl text-center text-white'>Add List</h1>
        <input onChange={(e)=>setinput(e.target.value)} />
        <p className='text-white'>{input}</p>
        <button onClick={()=>setTodos([...todos, input])} className='bg-blue-500 text-white p-2 rounded-md'>Add</button>
    </div>
  )
}

export default AddList