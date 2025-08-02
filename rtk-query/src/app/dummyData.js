import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi', // you can name this anything
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

// Export the auto-generated hook
export const { useGetAllProductsQuery } = productsApi;
