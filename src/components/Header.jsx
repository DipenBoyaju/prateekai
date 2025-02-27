import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const nav = useNavigate();
  return (
    <div className=" border-b border-zinc-300  w-full z-50 shadow-xs ">
      <div className="flex items-center justify-between container mx-auto py-4 px-4 md:px-10">
        <div className="" >
          {/* <h1 className="text-2xl font-semibold uppercase">Prateek</h1> */}
          <img src="/images/logotext.png" alt="" className="w-50 cursor-pointer" onClick={() => nav('/')} />
        </div>
        <Navbar />
        <Link to='/contribute'>
          <button className="text-xs md:text-lg md:font-semibold font-mono py-2 px-4 rounded-sm bg-blue hidden cursor-pointer text-white md:block">Contribute</button>
        </Link>
      </div>
    </div>
  )
}
export default Header