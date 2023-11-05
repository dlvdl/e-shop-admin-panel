import { DashBoardLogo, Customer, Logout, Shop, Edit, Delete } from "../assets"
import { ProductPopoverItems } from "../components/Popover"

export type Navlinks = Array<{ text: string; icon: string; to: string }>

export const UpperNavlinks: Navlinks = [
  {
    text: "Dashboard",
    icon: DashBoardLogo,
    to: "/dashboard",
  },
  {
    text: "Customer",
    icon: Customer,
    to: "/customer",
  },
  {
    text: "Products",
    icon: Shop,
    to: "/products",
  },
]

export const BottomNavlinks: Navlinks = [
  {
    text: "Logout",
    icon: Logout,
    to: "/logout",
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
