import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/layout/navbar/Navbar"

export const UserLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
