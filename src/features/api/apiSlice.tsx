import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { setCredentials } from "../../features/auth/auth-slice"
import { RootState } from "../../app/store"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Accept", "aplications/json")
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "products",
          method: "POST",
          body: product,
        }
      },
    }),
    updateProduct: builder.mutation({
      query: (product) => {
        return {
          url: "products",
          method: "PATH",
          body: JSON.stringify(product),
        }
      },
    }),
    deleteProduct: builder.mutation({
      query: (productID) => {
        return {
          url: "products",
          method: "DELETE",
          body: JSON.stringify({ id: productID }),
        }
      },
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => "protected",
    }),
  }),
})

export const { useProtectedMutation, useCreateProductMutation } = api
