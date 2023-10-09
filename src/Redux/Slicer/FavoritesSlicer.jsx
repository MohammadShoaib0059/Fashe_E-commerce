import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Fav:[]
};
const FavoriteSlicer = createSlice({
  name: "Favorite",
  initialState,
  reducers: {
    addToFav(state, action) {
      // state.push(action.payload);
      let find = state.Fav.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.Fav[find].quantity += 1;
      } else {
        state.Fav.push(action.payload);
      }
    },
    removeFromFav(state, action) {
      // return state.filter((item) => item.id !== action.payload);
      state.Fav = state.Fav.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = FavoriteSlicer.actions;
export default FavoriteSlicer.reducer;