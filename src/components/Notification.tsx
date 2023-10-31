import { FunctionComponent } from "react"

interface Props {
  message: string
}

const Notification: FunctionComponent<Props> = (props) => {
  const { message } = props
  return (
    <div className="absolute py-4 px-6 bg-purple text-white font-semibold border-solid  left-1/2 -translate-x-1/2 top-2 rounded-md shadow-sm animate-fadeInDown">
      <p>{message}</p>
    </div>
  )
}

export default Notification
