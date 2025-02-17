import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-row text-base font-normal gap-4">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/'}>About</NavLink>
      <NavLink to={'/contactus'}>Contact Us</NavLink>
    </nav>
  )
}
export default Navbar