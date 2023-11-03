import React, { FunctionComponent, useState } from "react"

interface Props {}

interface FormData {
  title: string | ""
  price: string | ""
  description: string | ""
  file: string | ""
}

const ProductForm: FunctionComponent<Props> = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: "",
    description: "",
    file: "",
  })

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, title: e.target.value })
  }

  const handlePriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, price: e.target.value })
  }

  const handleDescriptionInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, description: e.target.value })
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, file: e.target.value })
  }

  const handleClearButtonClick = () => {
    setFormData({ title: "", description: "", price: "", file: "" })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create new product
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleTitleInput}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="price"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Price
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handlePriceInput}
                required
                className="
                block w-full rounded-md border-0 py-1.5 text-gray-900
                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                onChange={handleDescriptionInput}
                name="description"
                value={formData.description}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="text-sm"></div>
            </div>
            <div className="mt-2">
              <input
                id="photo"
                name="photo"
                onChange={handleFileInput}
                type="file"
                value={formData.file}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900
                           shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                           file:rounded-md file:bg-indigo-600 file:border-0
                           file:px-3 file:py-1.5 file:text-sm file:font-semibold file:leading-6 file:text-white file:shadow-sm
                         file:hover:bg-indigo-500 file:focus-visible:outline file:focus-visible:outline-2 file:focus-visible:outline-offset-2 
                           file:focus-visible:outline-indigo-600
                           "
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add
            </button>
            <button
              type="button"
              onClick={handleClearButtonClick}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
