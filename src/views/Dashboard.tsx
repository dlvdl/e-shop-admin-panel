import { FunctionComponent } from "react"
// import { useAppSelector } from "../app/hooks"

interface Props {}

const Dashboard: FunctionComponent<Props> = () => {
  // const user = useAppSelector((state) => state.auth.user)

  return (
    <div>
      <div>
        <h2 className="text-white font-bold text-2xl">Dashboard</h2>
      </div>
    </div>
  )
}

export default Dashboard
