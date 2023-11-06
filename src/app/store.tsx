import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import uiReducer from "../features/ui/uiSlice"
import { api } from "../features/api/apiSlice"
import { loadState } from "../helpers/localStorage"

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, auth: authReducer, ui: uiReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
  preloadedState: loadState(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
