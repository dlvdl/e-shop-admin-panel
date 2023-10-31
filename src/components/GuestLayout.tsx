import { FunctionComponent } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from "../app/hooks"

interface Props {}

const GuestLayout: FunctionComponent<Props> = () => {
  const token = useAppSelector((state) => state.auth.token)
  if (token) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Outlet></Outlet>
    </div>
  )
}

export default GuestLayout
