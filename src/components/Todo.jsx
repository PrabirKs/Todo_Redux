import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todo)
  const dispatch = useDispatch()
  return(
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
            <div className='text-white'>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-py-1 px-4 focus:outline-none hover: bg-red-600 rounded text-md"
            >
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo