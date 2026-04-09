import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1",
    credentials: "include", // important (same as withCredentials)
  }),

  endpoints: (builder) => ({
    loadUser: builder.query({
      query: () => "/user",
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),

    activate: builder.mutation({
        query: (activationToken) => ({
          url: "/activate",
          method: "POST",
          body: { activationToken },
        }),
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
        invalidatesTags: ["User"],
    }),
  }),
});

export const { useLoadUserQuery, useLoginUserMutation, useRegisterMutation, useLogoutUserMutation, useActivateMutation } = apiSlice;
