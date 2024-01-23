import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // input parameter ko access krne ke liye payload
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const itemToIncrease = state.find((item) => item.id === productId);
      if (itemToIncrease) {
        itemToIncrease.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const itemToDecrease = state.find((item) => item.id === productId);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

export const { add, remove, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
