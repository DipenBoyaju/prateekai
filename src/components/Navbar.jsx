import { AlignJustify } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const menulist = [
  { path: "/", label: "Home" },
  { path: "/aboutus", label: "About" },
  { path: "/research", label: "Research" },
  { path: "/contributors", label: "Contributors" },
  { path: "/joinus", label: "Join Us" },
  { path: "/contactus", label: "Contact Us" },
]
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <div className="md:hidden cursor-pointer" onClick={() => setShowMenu(prev => !prev)}><AlignJustify size={34} /></div>
      <nav className={`flex flex-col absolute md:relative top-20 md:top-0 bg-[#E0F2FE] text-4xl font-semibold md:bg-transparent left-0 text-center py-20 md:py-0 w-full md:w-auto h-full md:flex-row md:text-base gap-6 transition-all duration-700 z-30 md:translate-y-0 ${showMenu ? 'translate-y-[0]' : '-translate-y-[120%] opacity-0 md:opacity-100'}`}>
        {menulist.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => setShowMenu(false)}
            className={({ isActive }) =>
              `relative pb-1 transition-all duration-300 uppercase
            after:absolute after:rounded-full after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:text-primary after:duration-300 
            md:hover:after:w-full ${isActive ? "md:after:w-full after:bg-primary text-primary font-semibold after:h-[2px]" : "after:w-0"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}
export default Navbar