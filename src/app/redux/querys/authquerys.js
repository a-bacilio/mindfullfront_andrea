import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import jsCookie from "js-cookie";
import { string } from "yup";


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
    postRegisterUser: builder.mutation({
      query: ({ name, email, password, password_confirmation, question_1, question_2, answer_1, answer_2 }) => ({
        url: "/register",
        method: "post",
        headers:{
          Accept: "aplication/json"
        },
        body: {
          name,
          email,
          password,
          password_confirmation,
          question_1,
          question_2,
          answer_1,
          answer_2,
        },
      }),
      transformResponse: (response) => response,
    }),
    postRecoverQuestions: builder.mutation({
      query: ({ email }) => ({
        url: "/recoverquestions",
        method: "post",
        headers:{
          Accept: "aplication/json"
        },
        body: {
          email
        },
      }),
      transformResponse: (response) => response,
    }),
    getLevel: builder.mutation({
      query: () => ({
        url: "/getlevel",
        method: "get",
        headers:{
          Accept: "aplication/json",
          Authorization: "Bearer "+string(jsCookie.get("MFM_TOKEN"))
        },
        body: {
          email : jsCookie.get("MFM_EMAIL")
        },
      }),
      transformResponse: (response) => {
        console.log(response);
        return response},
    }),
  }),
});

export const {
  usePostLoginUserMutation,
  usePostRegisterUserMutation,
  usePostRecoverQuestionsMutation,
  useGetLevelMutation
} = authAPI;
