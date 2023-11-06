import { FunctionComponent } from "react"

interface Props {}

const LoadingSpinner: FunctionComponent<Props> = () => {
  return (
    <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-8 border-t-custom-blue-100" />
  )
}

export default LoadingSpinner
