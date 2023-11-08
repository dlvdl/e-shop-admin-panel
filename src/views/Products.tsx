import { FunctionComponent } from "react"
import { Order, Actions, Add } from "../assets"
import { CustomPopover } from "../components/Popover"
import { Edit, Delete } from "../assets"
import { useGetProductsQuery } from "../features/api/apiSlice"
import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectNeedRefetch } from "../features/ui/uiSlice"

interface Props {}

interface Product {
  id: number
  title: string
  image_url: string
  price: string
  lastUpdated: string
}

interface TableItemProps extends Product {}

const render = (data: Array<Product>) => {
  return data.map(({ id, image_url, lastUpdated, price, title }) => {
    return (
      <TableItem
        id={id}
        image_url={image_url}
        lastUpdated={lastUpdated}
        price={price}
        title={title}
      />
    )
  })
}

const Products: FunctionComponent<Props> = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-white font-bold text-2xl">Products</h2>
        <button
          type="button"
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

const Table: FunctionComponent<Props> = () => {
  const needRefetch = useAppSelector(selectNeedRefetch)
  const { data, isLoading } = useGetProductsQuery(needRefetch)

  return (
    <div className="bg-custom-black-200 p-4 rounded-2xl">
      <div className="flex justify-between mb-4 text-white ">
        <div className="flex items-center gap-4">
          <label className="whitespace-nowrap" htmlFor="quantity">
            Per page
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Type to quontity per page"
            required
            className="font-lato block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="flex items-center w-full">
            <p>Found 6 products</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <input
              id="search"
              name="searh"
              type="text"
              placeholder="Type to search product"
              className="font-lato block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <table className="min-w-full text-left table-fixed border-custom-black-100">
        <thead className="  bg-custom-black-100 rounded-md text-custom-white-100">
          <tr className="capitalize [&>*]:px-6 [&>*]:py-4">
            <th className="first:rounded-tl-xl last:rounded-tr-xl ">ID</th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl capitalize">
              image
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl capitalize">
              title
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl capitalize">
              price
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl capitalize">
              <button>
                <img className="w-[15px] h-[15px]" src={Order} alt="#" />
              </button>
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl capitalize">
              last updated at
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl ">actions</th>
          </tr>
        </thead>
        <tbody className="text-white">{!isLoading && render(data.data)}</tbody>
      </table>
    </div>
  )
}

const TableItem: FunctionComponent<TableItemProps> = ({
  id,
  image_url,
  lastUpdated,
  price,
  title,
}) => {
  const navigate = useNavigate()
  return (
    <tr className="[&>*]:px-6 [&>*]:py-4">
      <td className="id">{id}</td>
      <td className="image w-11 h-11">
        <img className="" src={image_url} alt="product image" />
      </td>
      <td className="title">{title}</td>
      <td className="price">{price}</td>
      <td></td>
      <td className="lastUpdated">{lastUpdated}</td>
      <td className="actions">
        <CustomPopover icon={Actions} title={null}>
          <div className="grid bg-custom-black-100 p-4 rounded-md gap-4">
            <button
              onClick={() => {
                navigate(`/products/${id}`)
              }}
              className="flex items-center justify-between gap-3 hover:bg-custom-blue-100 transition-all p-2 rounded-xl"
            >
              Edit
              <img className="w-5 h-5" src={Edit} alt="edit" />
            </button>
            <button
              onClick={() => {
                navigate(`/products/delete/${id}`)
              }}
              className="flex items-center justify-between gap-3 hover:bg-custom-blue-100 transition-all p-2 rounded-xl"
            >
              Delete
              <img className="w-5 h-5" src={Delete} alt="edit" />
            </button>
          </div>
        </CustomPopover>
      </td>
    </tr>
  )
}

export default Products
