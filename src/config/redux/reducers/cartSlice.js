import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'Cart',
    initialState :{
        cart:[]
    },
    reducers :{
        addCartItem : (state,action)=>{
      state.cart.push(action.payload.item)
        },
        removeItem :(state,action)=>{
      state.cart.splice(action.payload.index,1)
        }
    }
})
export const {addCartItem,removeItem} = cartSlice.actions
export default cartSlice.reducer

