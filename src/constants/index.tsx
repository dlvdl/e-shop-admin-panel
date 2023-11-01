import { DashBoardLogo, Customer, Logout, Shop } from "../assets"

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
