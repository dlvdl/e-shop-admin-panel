import { FunctionComponent } from "react"
import { Link } from "react-router-dom"

interface Props {}

const Sidebar: FunctionComponent<Props> = () => {
  return (
    <aside className="flex flex-col p-6 bg-purple gap-4 shadow-2xl h-full max-w-1/12 relative">
      <Link
        className="text-white font-bold text-start p-2 rounded-md  hover:bg-indigo-950 hover:p-2 "
        to="/dashboard"
      >
        Dashboard
      </Link>
      <Link
        className="text-white font-bold text-start p-2 rounded-md  hover:bg-indigo-950 hover:"
        to="/users"
      >
        Users
      </Link>
    </aside>
  )
}

export default Sidebar
