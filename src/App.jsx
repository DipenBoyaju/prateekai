import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs"

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: '/contactus', element: <ContactUs /> }
        ]
      }
    ]
  )
  return <RouterProvider router={router} />
}
export default App