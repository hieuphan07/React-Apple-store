import { Outlet } from "react-router-dom"

import NavBar from "../MainNavigation/NavBar"
import Footer from "../components/Footer/Footer"

const RootLayout = () => {
  return <>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default RootLayout;