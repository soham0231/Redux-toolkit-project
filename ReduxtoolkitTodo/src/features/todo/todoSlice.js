import {createSlice, nanoid} from '@reduxjs/toolkit';

 const initialState = {
     todos:[{id:"abc",text:"Hello world"}],
 };

    export const todoSlice = createSlice({ 
        name:"todo",
        initialState,
        reducers:{
            addTodo:(state, action)=>{
                const newTodo={
                    id: nanoid(),
                    text: action.payload,
                };
                state.todos.push(newTodo);
            },
            deleteTodo:(state,action)=>{
                 state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
        },
    }
}); 

export const {addTodo, deleteTodo}= todoSlice.actions;
export default todoSlice.reducer;