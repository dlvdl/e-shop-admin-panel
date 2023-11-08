import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../../app/store"

export type ProductFormType = "create" | "update"

export interface InitialState {
  openModal: boolean
  productFormType: ProductFormType
  needRefetch: boolean
}

export const uiSlice = createSlice({
  name: "uiSlice",
  initialState: {
    openModal: false,
    productFormType: "create",
  } as InitialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = !state.openModal
    },

    setProductFormType: (state, { payload }) => {
      state.productFormType = payload
    },

    setNeedRefetch: (state) => {
      state.needRefetch = !state.needRefetch
    },
  },
})

export const { setOpenModal, setProductFormType, setNeedRefetch } =
  uiSlice.actions
export default uiSlice.reducer

export const selectOpenModal = (state: RootState) => state.ui.openModal
export const selectProductFormType = (state: RootState) => {
  return state.ui.productFormType
}
export const selectNeedRefetch = (state: RootState) => state.ui.needRefetch
