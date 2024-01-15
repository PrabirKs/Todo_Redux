import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        },
    }
})
//separately exporting for use when required
export const {addTodo, removeTodo} = todoSlice.actions 
//export whole reducer object
export default todoSlice.reducer
//state defines the initial state,or stateif the variables,
//action defines the action to be executed when the state changes from state to state
//payload have all the values like id,text etc.