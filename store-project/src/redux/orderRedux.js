import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers:{
      AddCart:(state, action) => {
    
      },
  }

});


export const { } = orderSlice.actions;
export default orderSlice.reducer;