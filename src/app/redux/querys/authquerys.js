import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_BACKEND_API,
  }),
  endpoints: (builder) => ({
    postLoginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login",
        method: "post",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  usePostLoginUserMutation,
} = authAPI;
