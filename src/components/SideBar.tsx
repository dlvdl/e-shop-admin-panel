import { FunctionComponent } from "react"
import { ButtonsSidebar, LinksSidebar, SidebarItem } from "../constants"
import { Logo, Shape } from "../assets/"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { AppDispatch } from "../app/store"
import { logout } from "../features/auth/authSlice"

interface Props {}

interface SideBarItemProps {
  text: string
  icon: string
  to: string
  type: "link" | "button"
}

const render = (data: SidebarItem) => {
  return data.map((link, i) => {
    return (
      <SideBarItem
        key={i}
        text={link.text}
        icon={link.icon}
        to={link.to}
        type={link.type}
      />
    )
  })
}

const Sidebar: FunctionComponent<Props> = () => {
  return (
    <aside className="flex flex-col p-6 gap-4 h-full min-w-[209px] relative bg-custom-black-200 font-manrope text-sm text-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-1">
          <img src={Logo} alt="#" />
          <p className="font-lato font-bold uppercase">Laravel e-commerce</p>
        </div>
        <div>
          <button className="flex justify-center items-center min-w-[20px] min-h-[20px] aspect-square rounded-full bg-custom-black-100 hover:bg-custom-blue-100">
            <img src={Shape} alt="" />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center gap-4">
          {render(LinksSidebar)}
        </div>
        <div className=" flex flex-col items-center gap-4">
          {render(ButtonsSidebar)}
        </div>
      </div>
    </aside>
  )
}

const SideBarItem: FunctionComponent<SideBarItemProps> = (props) => {
  const { text, icon, to, type } = props
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  return (
    <button
      onClick={() => {
        type !== "button" ? navigate(to) : dispatch(logout())
      }}
      className="flex items-center hover:bg-custom-blue-100 px-3 py-4 w-full rounded-xl gap-3 transition-all"
    >
      <img src={icon} />
      <p className="text-white font-bold text-start rounded-md"> {text}</p>
    </button>
  )
}

export default Sidebar
