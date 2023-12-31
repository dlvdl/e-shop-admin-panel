import { FunctionComponent, useState } from "react"
import { useGetProductsWithFilterQuery } from "../features/api/apiSlice"
import { useNavigate } from "react-router-dom"
import { CustomPopover } from "./Popover"
import { Actions, Delete, Edit, Order } from "../assets"
// import { useAppSelector } from "../app/hooks"
import { useAppDispatch } from "../app/hooks"
import { setProductNumberPage } from "../features/ui/uiSlice"
import Pagination from "./Pagination"

interface Props {}

interface Product {
  id: number
  title: string
  image_url: string
  price: string
  updated_at: string
}

interface TableItemProps extends Product {}

const render = (data: Array<Product>) => {
  return data.map(({ id, image_url, updated_at, price, title }) => {
    return (
      <TableItem
        id={id}
        image_url={image_url}
        updated_at={updated_at}
        price={price}
        title={title}
      />
    )
  })
}

const Table: FunctionComponent<Props> = () => {
  const dispatch = useAppDispatch()
  const [queryObj, setQueryObj] = useState<{
    order: "desc" | "asc"
    search: string
    per_page: number
    page: number
  }>({
    order: "asc",
    search: "",
    per_page: 5,
    page: 1,
  })

  const { data, isLoading } = useGetProductsWithFilterQuery(queryObj)

  console.log(data)

  const onPageChange = (page: number) => {
    dispatch(setProductNumberPage(page))
    setQueryObj({ ...queryObj, page: page })
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryObj({ ...queryObj, search: e.target.value })
  }

  const handleOrderButtonClick = () => {
    setQueryObj({
      ...queryObj,
      order: queryObj.order === "asc" ? "desc" : "asc",
    })
  }

  const handlePerPageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryObj({ ...queryObj, per_page: +e.target.value })
  }

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
            onChange={handlePerPageInput}
            placeholder="Type to quontity per page"
            required
            className="font-lato block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div className="flex items-center w-full">
            <p>Found {data?.meta.total} products</p>
          </div>
          <button
            onClick={handleOrderButtonClick}
            title="Order by price"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <img className="w-[18px] h-[18px]" src={Order} alt="#" />
          </button>
        </div>
        <div className="flex items-center">
          <div>
            <input
              id="search"
              name="searh"
              type="text"
              onChange={handleSearchInput}
              placeholder="Type to search product"
              className="font-lato block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <table className="min-w-full text-left table-fixed border-custom-black-100 mb-4">
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
              last updated at
            </th>
            <th className="first:rounded-tl-xl last:rounded-tr-xl ">actions</th>
          </tr>
        </thead>
        <tbody className="text-white">{!isLoading && render(data.data)}</tbody>
      </table>
      {!isLoading && (
        <Pagination
          count={data?.meta.last_page}
          currentPage={data?.meta.current_page}
          onPageChange={onPageChange}
        />
      )}
    </div>
  )
}

const TableItem: FunctionComponent<TableItemProps> = ({
  id,
  image_url,
  updated_at,
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

      <td className="lastUpdated">{updated_at}</td>
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

export default Table
