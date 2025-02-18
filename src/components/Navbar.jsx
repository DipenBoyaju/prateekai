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
  return (
    <nav className="flex flex-row text-base gap-4 font-light">
      {menulist.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `relative pb-1 transition-all duration-300 uppercase
            after:absolute after:rounded-full after:left-0 after:bottom-0 after:h-[1px] 
            after:w-0 after:bg-black after:transition-all after:duration-300 
            hover:after:w-full ${isActive ? "after:w-full after:bg-primary text-primary" : "after:w-0"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
export default Navbar