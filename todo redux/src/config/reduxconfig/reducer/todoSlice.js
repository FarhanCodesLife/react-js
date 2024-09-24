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
        edittodo:(state,action)=>{

     state.todo.splice(action.payload.index,1,{
        title:action.payload.newtodo,
        id:nanoid()

     })
     

        }
    }
    

    
}

)



export const { addtodo , deletetodo,edittodo } = todoSlice.actions
export default todoSlice.reducer