import { Outlet, useLoaderData } from "react-router-dom"

import NavBar from "../MainNavigation/NavBar"
import Footer from "../components/Footer/Footer"

const RootLayout = () => {
  const footerData = useLoaderData();
  return <>
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer footerData={footerData} />
  </>
}

export default RootLayout;