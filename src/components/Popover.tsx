import { Popover } from "@headlessui/react"
import { FunctionComponent } from "react"

export type ProductPopoverItems = Array<{
  title: string
  icon: string
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
}

const render = (data: ProductPopoverItems) => {
  return data.map(({ action, icon, title }) => {
    return <CustomPopoverItem action={action} icon={icon} title={title} />
  })
}

export const CustomPopover: FunctionComponent<CustomPopoverProps> = ({
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
  title,
  icon,
  action,
}) => {
  return (
    <button
      onClick={action}
      className="flex items-center justify-between gap-3 hover:bg-custom-blue-100 transition-all p-2 rounded-xl"
    >
      {title}
      <img className="w-5 h-5" src={icon} alt="edit" />
    </button>
  )
}
