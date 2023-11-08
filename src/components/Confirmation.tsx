import { FunctionComponent, useState } from "react"
import { useDeleteProductMutation } from "../features/api/apiSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { setNeedRefetch } from "../features/ui/uiSlice"

interface Props {}

const Confirmation: FunctionComponent<Props> = () => {
  const [confirm, setConfirm] = useState<boolean>(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const [deleteProduct] = useDeleteProductMutation()
  const dispatch = useAppDispatch()

  return (
    <div className="p-4">
      <h2 className="mb-4">Are you sure?</h2>
      <div className="flex gap-4 justify-between">
        <button
          type="button"
          onClick={() => {
            setConfirm(!confirm)
            dispatch(setNeedRefetch())
            navigate("/products")
            deleteProduct(id)
          }}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => navigate("/products")}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default Confirmation
