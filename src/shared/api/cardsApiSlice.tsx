
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IData } from "./types";
import type { ListResponse } from './types';

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getCards: builder.query<IData, number| void>({
      query: (page = 1) => `products?limit=12&skip=${page}`,
    }),
  }),
});


export const { useGetCardsQuery } = cardsApi;

