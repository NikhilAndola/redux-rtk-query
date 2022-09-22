import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IpostDataType } from ".././models/postDataModel";

export let jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  endpoints: (builder) => ({
    postData: builder.query<IpostDataType[], void>({
      query: () => "/posts"
    })
  })
});

export const { usePostDataQuery } = jsonplaceholderApi;
