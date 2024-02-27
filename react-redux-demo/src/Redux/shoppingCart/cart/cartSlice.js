import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}, // { productId: quantity }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      if (state.items[productId]) {
        state.items[productId]++;
      } else {
        state.items[productId] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      if (state.items[productId] > 1) {
        state.items[productId]--;
      } else {
        delete state.items[productId];
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;