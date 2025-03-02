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
      <Header name="quick" />
      <Outlet />
      <Footer />
    </>
  )
}
export default RootLayout