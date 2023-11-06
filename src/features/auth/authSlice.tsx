import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  token: string | null
  user: User | null
  loading: boolean
  errorMessage: string | undefined
}

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    errorMessage: undefined,
    loading: false,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user
      state.token = token
    },
    logout: (state: AuthState) => {
      return { ...state, token: null, user: null }
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer

// export const selectCurrentUser = (state: AuthState) => state.user
// export const selectCurrentToken = (state: AuthState) => state.token
