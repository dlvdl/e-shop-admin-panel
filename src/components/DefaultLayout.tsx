import { FunctionComponent } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

interface Props {}

const DefaultLayout: FunctionComponent<Props> = () => {
  const token = useAppSelector((state) => state.auth.token)
  if (!token) {
    return <Navigate to={"/login"} />
  }

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
