import { DashBoardLogo, Customer, Logout } from "../assets"

export type Navlinks = Array<{ text: string; icon: string; to: string }>

export const UpperNavlinks: Navlinks = [
  {
    text: "Dashboard",
    icon: DashBoardLogo,
    to: "/Dashboard",
  },
  {
    text: "Customer",
    icon: Customer,
    to: "/Customer",
  },
]

export const BottomNavlinks: Navlinks = [
  {
    text: "Logout",
    icon: Logout,
    to: "/logout",
  },
]
