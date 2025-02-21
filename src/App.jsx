import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Contributors from "./pages/Contributors"
import Reasearch from "./pages/Reasearch"
import Join from "./pages/Join"

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: '/aboutus', element: <AboutUs /> },
          { path: '/research', element: <Reasearch /> },
          { path: '/contributors', element: <Contributors /> },
          { path: '/joinus', element: <Join /> },
          { path: '/contactus', element: <ContactUs /> }
        ]
      }
    ]
  )
  return <RouterProvider router={router} />
}
export default App