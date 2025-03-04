import { Link } from "react-router-dom"
import Navbar from "./Navbar"
// import { useNavigate } from 'react-router-dom'

const Header = ({ name }) => {
  // const nav = useNavigate();
  return (
    <div className=" border-b border-zinc-300  w-full z-50 shadow-xs ">
      <div className="flex items-center justify-between container mx-auto py-4 px-4 md:px-10">
        <div className="flex gap-2 flex-col" >
          {/* <h1 className="text-2xl font-semibold uppercase">Prateek</h1> */}
          {/* <img src="/images/logotext.png" alt="" className="w-30 md:w-50 cursor-pointer" onClick={() => nav('/')} /> */}
          {name === "quick" && <div className="flex gap-1 px-3 py-1 items-center">
            <img src="/images/prateek.png" className="size-8" alt="" />
            <h2 className="font-quicksand font-bold text-[24px] text-blue"> Prateek</h2>
          </div>}
        </div>
        <Navbar />
        <Link to='/signdetection' className="hidden md:block">
          <button className="text-xs md:text-lg md:font-semibold font-mono py-2 px-4 rounded-sm bg-blue cursor-pointer text-white">Get Started</button>
        </Link>
      </div>
    </div>
  )
}
export default Header