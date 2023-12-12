



import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { cardsApi } from '@/shared/api/cardsApiSlice'

export const store = configureStore({
  reducer: {

    [cardsApi.reducerPath]: cardsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
})


setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch;