import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="border-b border-zinc-300">
      <div className="flex items-center justify-between container mx-auto py-4">
        <div className="">
          <h1 className="text-2xl font-semibold uppercase">Prateek</h1>
        </div>
        <Navbar />
        <button className="text-lg font-semibold font-mono border border-gold py-2 px-4 rounded-sm bg-gold">Contribute</button>
      </div>
    </div>
  )
}
export default Header