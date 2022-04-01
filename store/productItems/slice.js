import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      return state.filter((e) => e.id !== id);
    },
  },
});

export const { actions, reducer } = favoritesSlice;
export const { addFavorite, removeFavorite } = actions;
