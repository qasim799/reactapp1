import React, { useState } from 'react';

import {Todos} from './todos'

export const addlist = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue('');
  };
    return(
        <div className="flex items-center justify-center w-screen h-screen bg-gray-700">
      <div className="mb-40">
      <h1 className="text-2xl text-white mb-4">Enter task</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded text-gray-900"
        placeholder="Enter a value" />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded"
        >
          Add Todo
        </button>
        <Todos todos={todos}></Todos>
    </div>
    </div>
    )
}
