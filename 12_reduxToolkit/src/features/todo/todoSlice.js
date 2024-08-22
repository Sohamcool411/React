import {createSlice , nanoid , current} from '@reduxjs/toolkit'

const initialState={
    todos:[
        {
            id:1,
            text:'Say hello',
            completed: false,
        }
    ]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                completed : false,
            }
            state.todos.push(todo)
            console.log(current(state.todos));
            
        }, 

        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        updateTodo:(state,action)=>{
            state.todos.map((todo)=>{
                if (todo.id==action.payload.id){
                    todo.text = action.payload.text
                }
            })
        },

        todoCompleted:(state,action)=>{
            state.todos.map((todo)=>{
                if(todo.id==action.payload){
                    todo.completed = !todo.completed
                }
            })
        }
    }
})

export const {addTodo,removeTodo,updateTodo,todoCompleted} = todoSlice.actions

export default todoSlice.reducer