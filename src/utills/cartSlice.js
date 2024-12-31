import { createSlice } from "@reduxjs/toolkit";
//createSlice take config as a object . Config object will have name ,initalState and reducers.
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    //reducers are basically object and that object take actions
    reducers:{
        // additem,removeitem and clearCart are action .
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const{addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;