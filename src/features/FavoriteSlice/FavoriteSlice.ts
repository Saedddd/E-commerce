
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FavoriteState {
  favorite: any[]; 
}
const initialState: FavoriteState = {
  favorite: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addToFav: (state, action: PayloadAction<any>) => {
      state.favorite.push(action.payload);
    },
    removeFromFav: (state, action: PayloadAction<number>) => {
      state.favorite = state.favorite.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addToFav, removeFromFav } = favoriteSlice.actions;

export const favReducer = favoriteSlice.reducer;