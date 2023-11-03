import { FunctionComponent } from "react"

interface Props {
  open: boolean
  onClose: () => void
  children: JSX.Element
}

const Modal: FunctionComponent<Props> = ({ open, onClose, children }) => {
  return (
    <div
      onClick={() => {
        onClose()
      }}
      className={`fixed inset-0 flex justify-center items-center transition-colors  ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={`bg-white p-4 transition-all relative rounded-md   ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={() => {
            onClose()
          }}
          className="absolute top-2 right-2 flex items-center rounded-full justify-center aspect-square bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
