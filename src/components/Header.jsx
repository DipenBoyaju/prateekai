import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className=" border-b border-zinc-300 bg-white  w-full z-50 shadow-md">
      <div className="flex items-center justify-between container mx-auto py-4 px-4">
        <div className="">
          <h1 className="text-2xl font-semibold uppercase">Prateek</h1>
        </div>
        <Navbar />
        <button className="text-xs md:text-lg md:font-semibold font-mono border border-gold py-2 px-4 rounded-sm bg-primary text-white hidden md:block">Contribute</button>
      </div>
    </div>
  )
}
export default Header