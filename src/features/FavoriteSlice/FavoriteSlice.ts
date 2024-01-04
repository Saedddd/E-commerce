
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';


export interface FavoriteItem {
  id: number;
  title: string;
  price: number;
  brand: string;
  rating: number;
  desc: string;
}

export interface FavoritesState {
  favoriteItems: FavoriteItem[];
}

const initialState: FavoritesState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
      state.favoriteItems.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export const selectFavoriteItems = (state: RootState) => state.favorites.favoriteItems;