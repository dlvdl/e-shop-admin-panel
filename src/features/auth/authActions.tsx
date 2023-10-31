import axiosClient from "../../axios-client"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export interface User {
  id: string
  name: string
  email: string
}

interface Response {
  token: string
  user: User
}

interface Payload {
  email: string
  password: string
}

export const login = createAsyncThunk<
  Response,
  { email: string; password: string } & Partial<Payload>,
  {
    rejectValue: string
  }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axiosClient.post("login", { email, password })
    // Here i have persist token in local storage
    return response.data
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message
    ) {
      return rejectWithValue(error.response.data.message)
    }
  }
})
