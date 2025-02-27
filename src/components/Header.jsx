import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className=" border-b border-zinc-300  w-full z-50 shadow-xs ">
      <div className="flex items-center justify-between container mx-auto py-4 px-4 md:px-10">
        <div className="">
          {/* <h1 className="text-2xl font-semibold uppercase">Prateek</h1> */}
          <img src="/images/logotext.png" alt="" className="w-50" />
        </div>
        <Navbar />
        <button className="text-xs md:text-lg md:font-semibold font-mono py-2 px-4 rounded-sm bg-blue hidden text-white md:block">Contribute</button>
      </div>
    </div>
  )
}
export default Header