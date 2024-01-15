import React, { useState } from "react";
import {useDispach} from 'react-redux'
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {


  const [input, setInput] = useState('')
  const dispatch = useDispach()

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }


  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x
        mt-12"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border
        border-gray-700 focus: border-indigo-500
        focus: ring-2 focus: ring-indigo-900 text-base
        outline-none text-gray-100 py-1 px-3 leading-8
        transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-700 text-white
        font-bold py-2 px-4 rounded focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-indigo-500"
      ></button>
    </form>
  );
}

export default AddTodo;
