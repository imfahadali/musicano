import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";

// const initialCartState = {
//   cart: [
//     {
//       id: "",
//       title: "",
//       description: "",
//       quantity: 0,
//     },
//   ],
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      const existingItem = state.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (!existingItem) {
        state.push(action.payload);
      } else {
        existingItem.quantity++;
      }
    },

    removeItem: (state, action) => {
      console.log(action);
      console.log(current(state));
      const existingItem = state.find(
        (cartItem) => cartItem.id === action.payload
      );
      console.log("Existing Item Found ");
      console.log(existingItem);
      if (existingItem.quantity === 1) {
        state.pop(existingItem);
      } else {
        existingItem.quantity--;
        // state.map((cartItem) => cartItem.quantity--);
      }
    },

    removeAll: (state, action) => {
      const existingItem = state.find(
        (cartItem) => cartItem.id === action.payload
      );
      state.pop(existingItem);
      console.log(current(state));
    },
    emptyCart: (state) => (state = []),
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
