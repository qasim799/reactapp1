import React, {useState} from 'react'
import { AuthContext } from './AuthContext'
import { useContext } from 'react'
const RemoveList = () => {
    const [inputValue, setInputValue] = useState('');
    const {todos,setTodos} = useContext(AuthContext)
    const removeTodos = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
     const handleChange = (e) => {
          setInputValue(e.target.value);
        };
    return(
        <>
        <div className='text-white gap-5 w-screen h-screen flex flex-col'>
            <div className='flex items-center justify-center flex-col'>
            <h1 className='text-3xl text-orange-500 mb-40 mt-10'>These are saved Todos, Enter index to remove.</h1>
            {
                todos.map((todo, index) => (
                    <div key={index} className='bg-gray-700 rounded-md flex flex-col gap-2'>
                        
                        <h1 className='text-xl'>{index}.  {todo}</h1>
                        
                        </div>
                )) 
            }
            </div>
            <div className='flex items-center justify-center flex-col'>
            <input className='text-black'
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a value"
      />
      <button onClick={() => removeTodos(inputValue)} className='bg-blue-800 p-2 rounded-xl'>Remove</button>
            </div>
        </div>
            </>
    )
}

export default RemoveList;