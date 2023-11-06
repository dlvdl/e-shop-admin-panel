import { DashBoardLogo, Customer, Logout, Shop, Edit, Delete } from "../assets"
import { ProductPopoverItems } from "../components/Popover"

export type SidebarItem = Array<{
  text: string
  icon: string
  to: string
  type: "button" | "link"
}>

export const LinksSidebar: SidebarItem = [
  {
    text: "Dashboard",
    icon: DashBoardLogo,
    to: "/dashboard",
    type: "link",
  },
  {
    text: "Customer",
    icon: Customer,
    to: "/customer",
    type: "link",
  },
  {
    text: "Products",
    icon: Shop,
    to: "/products",
    type: "link",
  },
]

export const ButtonsSidebar: SidebarItem = [
  {
    text: "Logout",
    icon: Logout,
    to: "",
    type: "button",
  },
]

export const ProductPopOverItems: ProductPopoverItems = [
  // eslint-disable-next-line react-hooks/rules-of-hooks
  {
    title: "Edit",
    icon: Edit,
    type: "update",
    action: () => {},
  },
  { title: "Delete", icon: Delete, type: "delete", action: () => {} },
]
