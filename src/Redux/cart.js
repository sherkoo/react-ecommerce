import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    total: 0,
    items: [],
    test: 123123
  },
  reducers: {
    incrementCartCount: (state, action) => {
      state.count++;
    },
    getCartTotal: (state, action) => {
      state.total = state.test;
    },
    checkForCartItems: (state, action) => {
      var cart = JSON.parse(localStorage.getItem('cart'));
      console.log('check for items')
      if(cart){
        state.count = cart.items.length;
        state.items = cart.items
      } else {
        state.count = 0;
        state.items = [];
      }
    },
    emptyCart: (state, action) => {
      console.log('empty cart clicked');
      // var cart = JSON.parse(localStorage.getItem('cart'));

      // const makeFunction = (n) => {
      //   return new Promise((resolve,reject) => {
      //     console.log('from promise');
      //     console.log('hit the promise');
      //   }); // end promise
      // }

      // makeFunction().then(response => {
      //   console.log('got to then');
      //   checkForCartItems();
      // })
      
      localStorage.removeItem('cart');
      state.count = 0;
      state.items = [];
    }
  }
});

export const { incrementCartCount, emptyCart, getCartTotal, checkForCartItems } = cartSlice.actions;

export default cartSlice.reducer;