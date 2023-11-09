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

  tagTypes: ["Products"],

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
          url: "logout",
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
      providesTags: ["Products"],
    }),

    getProductsWithFilter: builder.query({
      query: (arg: {
        order: "desc" | "asc"
        search: string
        per_page: number
      }) => {
        const { order, per_page, search } = arg
        return {
          url: "products",
          method: "GET",
          params: {
            perp_page: per_page,
            search,
            sort_direction: order,
          },
        }
      },
      providesTags: ["Products"],
    }),

    createProduct: builder.mutation({
      query: (product) => {
        return {
          url: "products",
          method: "POST",
          body: product,
        }
      },
      invalidatesTags: ["Products"],
    }),

    getProduct: builder.query({
      query: (productID) => {
        return {
          url: `products/${productID}`,
          method: "GET",
        }
      },
      providesTags: ["Products"],
    }),

    updateProduct: builder.mutation({
      query: ({ product, productID }) => {
        return {
          url: `products/${productID}?_method=PATCH`,
          method: "POST",
          body: product,
        }
      },
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (productID) => {
        return {
          url: `products/${productID}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ["Products"],
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
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductQuery,
  useGetProductsWithFilterQuery,
} = api
