// ваш файл с настройкой хранилища

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { cardsApi } from '@/shared/api/cardsApiSlice';
import { cartReducer, CartState } from "../../../features/AddToCart/cartSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = {
  cart: CartState;
  [cardsApi.reducerPath]: ReturnType<typeof cardsApi.reducer>;
};

export type AppDispatch = typeof store.dispatch;
