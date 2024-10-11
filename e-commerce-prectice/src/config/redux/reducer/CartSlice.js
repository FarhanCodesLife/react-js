import { createSlice } from "@reduxjs/toolkit";


export const cartslice = createSlice({
    name:'cart',
    initialState:{
        cartitems:[]
    },
    reducers:{
        addtocart :(state,action)=>{
            state.cartitems.push(action.payload.item)

        },
        deletecartitems:(state,action)=>{
            state.cartitems.splice(action.payload.index,1)
        }
    }
})

export const {addtocart,deletecartitems} = cartslice.actions

export default cartslice.reducer