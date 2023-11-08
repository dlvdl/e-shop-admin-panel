import { createBrowserRouter } from "react-router-dom"
// import Dashboard from "./views/Dashboard"
import Auth from "./views/Auth"
import NotFound from "./views/NotFound"
import GuestLayout from "./components/GuestLayout"
import DefaultLayout from "./components/DefaultLayout"
import Dashboard from "./views/Dashboard"
import Products from "./views/Products"
import Modal from "./components/Modal"
import ProductForm from "./components/ProductForm"
import Confirmation from "./components/Confirmation"

// import Dashboard from "./views/Dashboard"
// import DefaultLayout from "./components/DefaultLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "/products/new",
            element: (
              <Modal open={true} to={"/products"}>
                <ProductForm title="Create Product" type="create"></ProductForm>
              </Modal>
            ),
          },
          {
            path: "/products/:id",
            element: (
              <Modal open={true} to={"/products"}>
                <ProductForm title="Update Product" type="update"></ProductForm>
              </Modal>
            ),
          },
          {
            path: "/products/delete/:id",
            element: (
              <Modal open={true} to={"/products"}>
                <Confirmation />
              </Modal>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/signup",
        element: <Auth title="Sign up to your account" type="signup" />,
      },
      {
        path: "/login",
        element: <Auth title="Log in to your account" type="login" />,
      },
      {
        path: "/request-password",
        element: <Auth title="Request new password" type="requestPassword" />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
])

export default router
