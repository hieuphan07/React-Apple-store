import { Outlet, useNavigation } from "react-router-dom"

import NavBar from "../MainNavigation/NavBar"
import Footer from "../components/Footer/Footer"

const RootLayout = () => {
  const navigation = useNavigation()
  return (
    <>
      <NavBar />
      <main>
        {navigation.state === "loading" && <p style={{ textAlign: 'center', marginBottom: '10px' }}>Loading...</p>}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout;