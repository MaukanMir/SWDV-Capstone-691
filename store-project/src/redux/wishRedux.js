import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
  products: [],
  quantity: 0,
  total: 0,
  },
  reducers:{
      addWish: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
      clearWish:(state,action)=>{
      state.products =[];
      state.quantity =0;
      state.price =0;
      state.total =0;
    }
  },
});

export const { addWish, clearWish } = wishSlice.actions;
export default wishSlice.reducer;