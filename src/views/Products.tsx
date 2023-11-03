import { FunctionComponent, useState } from "react"
import { Order, Actions, Add } from "../assets"
import Modal from "../components/Modal"
import ProductForm from "../components/ProductForm"
import { IphoneMock, Iphone15Mock } from "../assets"

interface Props {}

interface Product {
  id: string
  title: string
  image: string
  price: string
  lastUpdated: string
}

interface TableItemProps extends Product {}

const mockData: Array<Product> = [
  {
    id: "1",
    title: "Iphone 11 XS",
    image: IphoneMock,
    price: "1000$",
    lastUpdated: "02/03/2022",
  },
  {
    id: "2",
    title: "Iphone 11 XS",
    image: Iphone15Mock,
    price: "1200$",
    lastUpdated: "02/03/2022",
  },
]

const render = (data: Array<Product>) => {
  return data.map(({ id, image, lastUpdated, price, title }) => {
    return (
      <TableItem
        id={id}
        image={image}
        lastUpdated={lastUpdated}
        price={price}
        title={title}
      />
    )
  })
}

const Products: FunctionComponent<Props> = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-white font-bold text-2xl">Products</h2>
        <button
          type="button"
          onClick={() => {
            setOpenModal(!openModal)
          }}
          className="flex items-center rounded-full justify-center aspect-square bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <img src={Add} alt="#" />
        </button>
      </div>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(!openModal)
        }}
      >
        <ProductForm />
      </Modal>
      <Table />
    </div>
  )
}

const Table: FunctionComponent<Props> = () => {
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
        <tbody className="text-white">{render(mockData)}</tbody>
      </table>
    </div>
  )
}

const TableItem: FunctionComponent<TableItemProps> = ({
  id,
  image,
  lastUpdated,
  price,
  title,
}) => {
  return (
    <tr className="[&>*]:px-6 [&>*]:py-4">
      <td className="id">{id}</td>
      <td className="image w-11 h-11">
        <img className="" src={image} alt="product image" />
      </td>
      <td className="title">{title}</td>
      <td className="price">{price}</td>
      <td></td>
      <td className="lastUpdated">{lastUpdated}</td>
      <td className="actions">
        <button>
          <img className="rotate-90" src={Actions} alt="#" />
        </button>
      </td>
    </tr>
  )
}

export default Products
