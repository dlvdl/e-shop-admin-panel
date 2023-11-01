import { FunctionComponent } from "react"
import { Order, Actions, Add } from "../assets"

interface Props {}

const Products: FunctionComponent<Props> = () => {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-white font-bold text-2xl">Products</h2>
        <button
          type="button"
          className="flex items-center rounded-full justify-center aspect-square bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <img src={Add} alt="#" />
        </button>
      </div>
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
              <th className="first:rounded-tl-xl last:rounded-tr-xl ">
                actions
              </th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="[&>*]:px-6 [&>*]:py-4">
              <td>fdsf</td>
              <td>dsfd</td>
              <td>dfd</td>
              <td>sdfdf</td>
              <td>dsfds</td>
              <td>dsff</td>
              <td>
                <button>
                  <img className="rotate-90" src={Actions} alt="#" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
