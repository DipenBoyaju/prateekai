import { Link } from "react-router-dom"

const ComingSoon = () => {
  return (
    <div className="" >
      <div className="flex flex-col justify-center items-center py-32 gap-8">
        <h1 className="text-6xl uppercase leading-20 font-bold tracking-widest text-center text-darkBlue">Coming <br />Soon</h1>
        <Link to="/">
          <button className="bg-blue py-2 px-4 text-white text-lg rounded-md cursor-pointer">Home</button>
        </Link>
      </div>
    </div>
  )
}
export default ComingSoon