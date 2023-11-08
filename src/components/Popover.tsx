import { Popover } from "@headlessui/react"
import { FunctionComponent } from "react"

interface CustomPopoverProps {
  title: string | null
  icon: string
  children: JSX.Element
}

export const CustomPopover: FunctionComponent<CustomPopoverProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <Popover className="relative">
      <Popover.Button className="border-0 outline-none flex items-center hover:bg-custom-blue-100 px-3 py-4  rounded-xl gap-3 transition-all">
        {title}
        <img src={icon} alt="actions-button" />
      </Popover.Button>

      <Popover.Panel className="absolute z-10">
        {children}
        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  )
}
