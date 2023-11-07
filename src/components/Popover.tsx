import { Popover } from "@headlessui/react"
import { FunctionComponent } from "react"
import { useAppDispatch } from "../app/hooks"
import { setOpenModal, setProductFormType } from "../features/ui/uiSlice"

export type ProductPopoverItems = Array<{
  id: string
  title: string
  icon: string
  type: "update" | "delete"
  action: () => void
}>

interface CustomPopoverProps {
  title: string | null
  icon: string
  productPopoverItems: ProductPopoverItems
}

interface CustomdPopoverItemProps {
  icon: string
  title: string
  action: () => void
  type: "update" | "delete"
}

const render = (data: ProductPopoverItems) => {
  return data.map(({ action, icon, title, type }) => {
    return (
      <CustomPopoverItem
        action={action}
        icon={icon}
        title={title}
        type={type}
      />
    )
  })
}

export const CustomPopover: FunctionComponent<CustomPopoverProps> = ({
  id,
  title,
  productPopoverItems,
  icon,
}) => {
  return (
    <Popover className="relative">
      <Popover.Button className="border-0 outline-none flex items-center hover:bg-custom-blue-100 px-3 py-4  rounded-xl gap-3 transition-all">
        {title}
        <img src={icon} alt="actions-button" />
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid bg-custom-black-100 p-4 rounded-md gap-4">
          {render(productPopoverItems)}
        </div>
        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}

const CustomPopoverItem: FunctionComponent<CustomdPopoverItemProps> = ({
  id,
  type,
  title,
  icon,
  action,
}) => {
  const dispatch = useAppDispatch()
  return (
    <button
      onClick={
        type === "update"
          ? () => {
              dispatch(setOpenModal())
              dispatch(setProductFormType("update"))
            }
          : action
      }
      className="flex items-center justify-between gap-3 hover:bg-custom-blue-100 transition-all p-2 rounded-xl"
    >
      {title}
      <img className="w-5 h-5" src={icon} alt="edit" />
    </button>
  )
}
