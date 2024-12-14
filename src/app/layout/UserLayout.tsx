import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/layout/navbar/Navbar"
import { Footer } from "../../components/layout/footer/Footer"

export const UserLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
