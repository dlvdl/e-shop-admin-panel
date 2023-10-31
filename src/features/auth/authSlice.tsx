import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { login } from "./authActions"
import { User } from "./authActions"

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    logOut: (state: AuthState, action: PayloadAction) => {
      return { ...state, token: null, user: null }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.errorMessage = undefined
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false
        state.user = payload.user
        state.token = payload.token
      })
      .addCase(login.rejected, (state, { payload }) => {
        console.log(payload)
        state.loading = false
        state.errorMessage = payload
      })
  },

  // extraReducers: {
  //   [login.pending]: (state: AuthState) => {
  //     state.loading = true
  //     state.error = null
  //   },
  //   [login.fulfilled]: (state: AuthState, { user, token }: Credentials) => {
  //     state.loading = false
  //     state.user = user
  //     state.token = token
  //   },
  //   [login.rejected]: (state: AuthState, payload: Error | AxiosError) => {
  //     state.loading = false
  //     state.error = payload
  //   },
  // },
})

export const { setCredentials, logOut } = authSlice.actions
export default authSlice.reducer

// export const selectCurrentUser = (state: AuthState) => state.user
// export const selectCurrentToken = (state: AuthState) => state.token
