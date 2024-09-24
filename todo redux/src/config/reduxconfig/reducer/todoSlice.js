import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todos",
    initialState:{
        todo:[]
    },
    reducers:{
        addtodo:(state,action)=>{
            state.todo.push({
                title: action.payload.title,
                id:nanoid()
            }
        )
        }, 
        
            deletetodo:(state,action)=>{
                state.todo.splice(action.payload.index,1)
                
            
        },
    }
    

    
}

)



export const { addtodo , deletetodo } = todoSlice.actions
export default todoSlice.reducer