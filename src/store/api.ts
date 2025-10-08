import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { PostList} from '../modules/PostDetails/type'

export const productApi =createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints:(builder) => ({
        getPost: builder.query<PostList[], void>({
            query: () => '/posts',
            transformErrorResponse: (res: any) => res.postsList as PostList[]
        })
    })
})

export const { useGetPostListQuery } = productApi;