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
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: { ...credentials },
        }
      },
    }),

    logout: builder.query({
      query: () => {
        return {
          url: "logut",
          method: "POST",
        }
      },
    }),

    getProducts: builder.query({
      query: () => {
        return {
          url: "products",
          method: "GET",
        }
      },
    }),

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

export const {
  useLoginMutation,
  useLogoutQuery,
  useProtectedMutation,
  useCreateProductMutation,
  useGetProductsQuery,
} = api
