import { FunctionComponent, useState } from "react"
import { useAppSelector } from "../app/hooks"
import Sidebar from "../components/SideBar"
import { Outlet } from "react-router-dom"

interface Props {}

const Dashboard: FunctionComponent<Props> = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div className="flex w-full h-screen flex-row">
      <div className={`sm:flex hidden`}>
        <Sidebar></Sidebar>
      </div>
      {showSidebar && (
        <div className="absolute z-20 h-full">
          <Sidebar></Sidebar>
        </div>
      )}

      <div className="flex w-full flex-col h-full max-h-screen overflow-scroll">
        <header className="flex justify-between p-8 border-b-2 relative">
          <div className="flex gap-6 items-center">
            <button
              className="sm:hidden"
              onClick={() => {
                setShowSidebar(!showSidebar)
              }}
            >
              hh
            </button>
            <p>Header Info</p>
          </div>
          <div className="flex gap-6 items-center">
            <p>{user}</p>
            <button>Sign out</button>
          </div>
        </header>
        <main className="px-8 py-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
