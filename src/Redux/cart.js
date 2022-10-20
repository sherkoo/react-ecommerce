import { createSlice } from "@reduxjs/toolkit";

/**
 * Cart redux
 */
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    total: 0,
    items: [],
    test: 123,
  },
  reducers: {
    incrementCartCount: (state, action) => {
      state.count++;
    },
    getCartTotal: (state, action) => {
      state.total = state.test;
    },
    checkForCartItems: (state, action) => {
      var cart = JSON.parse(localStorage.getItem("cart"));
      console.log("check for items");
      if (cart) {
        state.count = cart.items.length;
        state.items = cart.items;

        let calculatedTotal = 1;

        for (let i = 0; i < cart.items.length; i++) {
          console.log("for loop");
          calculatedTotal += cart.items[i].price;
        }

        state.total = calculatedTotal;
      } else {
        state.count = 0;
        state.items = [];
        state.total = 0;
      }
    },
    emptyCart: (state, action) => {
      console.log("empty cart clicked");
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

      localStorage.removeItem("cart");
      state.count = 0;
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  incrementCartCount,
  emptyCart,
  getCartTotal,
  checkForCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
