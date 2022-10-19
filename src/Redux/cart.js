import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    items: []
  },
  reducers: {
    incrementCartCount: (state, action) => {
      state.count++;
    },
    checkForCartItems: (state, action) => {
      var cart = JSON.parse(localStorage.getItem('cart'));

      if(cart){
        state.items = action.payload
        state.count = cart.count
      }
    }
  }
})
export const { incrementCartCount, checkForCartItems } = cartSlice.actions

export default cartSlice.reducer;