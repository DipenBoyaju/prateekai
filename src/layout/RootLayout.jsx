import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "./ScrollToTop"
import { Toaster } from 'react-hot-toast';

const RootLayout = () => {
  return (
    <>
      <Toaster />
      <ScrollToTop />
      <div className="space-y-10">
        {/* <Header name="mon" /> */}
        <Header name="quick" />
        {/* <Header name="orb" /> */}
      </div>
      <Outlet />
      <Footer />
    </>
  )
}
export default RootLayout