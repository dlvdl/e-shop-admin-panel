import { createSlice } from "@reduxjs/toolkit"

interface InitialState {
  openModal: boolean
}

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    openModal: false,
  } as InitialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal
    },
  },
})

export const { setOpenModal } = uiSlice.actions
export default uiSlice.reducer

export const selectOpenModal = (state: InitialState) => state.openModal
