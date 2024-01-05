import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { cardsApi } from '@/shared/api/cardsApiSlice';
import { cartReducer, CartState } from "../../../features/AddToCart/cartSlice"
import { favReducer } from '@/features/FavoriteSlice/FavoriteSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = {
  favReducer: any;
  cart: CartState;
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
};

export type AppDispatch = typeof store.dispatch;