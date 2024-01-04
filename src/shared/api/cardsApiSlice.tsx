
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { IData } from "./types";
import type { ListResponse } from './types';

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  endpoints: (builder) => ({
    getCards: builder.query<IData, any | void>({
      query: ({page = 1, limit = 0}) => `products?limit=12&skip=${page * limit}`,
    }),
  }),
});


export const { useGetCardsQuery } = cardsApi;
