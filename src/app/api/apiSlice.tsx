import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { setCredentials } from "../../features/auth/auth-slice"
import { RootState } from "../store"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: credentials,
          responseHandler: (response) => response.json(),
        }
      },
    }),

    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = api
