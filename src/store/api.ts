import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostList} from '../modules/PostDetails/type'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getProducts: builder.query<PostList[], void>({
      query: () => '/posts',
      transformResponse: (res: any) => res as PostList[],
    }),
    getProductDetail: builder.query<PostList, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailQuery } = productsApi;