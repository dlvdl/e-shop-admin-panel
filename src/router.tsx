import { createBrowserRouter } from "react-router-dom"
// import Dashboard from "./views/Dashboard"
import Auth from "./views/Auth"
import NotFound from "./views/NotFound"
import GuestLayout from "./components/GuestLayout"
import DefaultLayout from "./components/DefaultLayout"
import Dashboard from "./views/Dashboard"
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
