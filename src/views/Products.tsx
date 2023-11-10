import { FunctionComponent } from "react"

import { Outlet, useNavigate } from "react-router-dom"
import Table from "../components/Table"
import { Add } from "../assets"

interface Props {}

const Products: FunctionComponent<Props> = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-white font-bold text-2xl">Products</h2>
        <button
          type="button"
          title="Add product"
          onClick={() => {
            navigate("/products/new")
          }}
          className="flex items-center rounded-full justify-center aspect-square bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <img src={Add} alt="#" />
        </button>
      </div>
      <Outlet />
      <Table />
    </div>
  )
}

export default Products
