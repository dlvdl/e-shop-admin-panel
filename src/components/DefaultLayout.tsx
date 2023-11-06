import { FunctionComponent } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import Sidebar from "./SideBar"

interface Props {}

const DefaultLayout: FunctionComponent<Props> = () => {
  const token = useAppSelector((state) => state.auth.token)

  if (!token) {
    return <Navigate to={"/login"} />
  }

  return (
    <div className="flex w-full h-screen flex-row bg-custom-black-100">
      <div className={`sm:flex hidden`}>
        <Sidebar></Sidebar>
      </div>

      <div className="flex w-full flex-col h-full max-h-screen overflow-scroll font-lato">
        <main className="px-8 mt-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DefaultLayout
