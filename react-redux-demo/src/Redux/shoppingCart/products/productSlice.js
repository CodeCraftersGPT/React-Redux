import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
      // Example vegetable products
      { id: 1, title: 'Carrot', price: 2.5 },
      { id: 2, title: 'Broccoli', price: 3.0 },
      { id: 3, title: 'Spinach', price: 4.0 },
      { id: 4, title: 'Kale', price: 3.5 },
      { id: 5, title: 'Tomato', price: 2.0 },
    ],
  };
  

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Add reducers here if needed, for example, to add or remove products
  },
});

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;
