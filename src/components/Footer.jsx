import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-4 md:px-10">
        <div className="py-8 md:py-16 grid col-span-1  mg:gap-0 md:grid-cols-12 border-b border-zinc-800 space-y-5 md:space-y-0">
          <div className="col-span-1 md:col-span-5">
            <img src="/images/logotext.png" alt="" className="w-32 md:w-60" />
            <p className="text-base md:text-lg md:pr-16 pt-4 md:pt-8 text-zinc-400">We are a dedicated team committed to breaking communication barriers through Nepali Sign Language Detection technology. Our mission is ...</p>
            <Link to={'/aboutus'} className="text-base pt-3 font-light flex gap-1 items-center text-blue/50">read more <MoveRight /></Link>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-xl text-zinc-300">Discover</h4>
            <ul className="text-zinc-400 pt-5 space-y-2 grid grid-cols-2 w-full">
              <li><Link to={'/research'} className="hover:text-blue duration-500 transition-all ">Research</Link></li>
              <li><Link to={'/research'} className="hover:text-blue duration-500 transition-all ">Contributors</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-blue duration-500 transition-all ">About Us</Link></li>
              <li><Link to={'/contactus'} className="hover:text-blue duration-500 transition-all ">Contact Us</Link></li>
              <li><Link to={'/research'} className="hover:text-blue duration-500 transition-all ">Join Us</Link></li>
              <li><Link to={'/contribute'} className="hover:text-blue duration-500 transition-all ">Contribute</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-bold text-xl text-zinc-300">About</h4>
            <ul className="text-zinc-400 pt-5 space-y-2">
              <li><Link to={'/aboutus'} className="hover:text-blue duration-500 transition-all ">About Us</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-blue duration-500 transition-all ">Mission</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-blue duration-500 transition-all ">Vision</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-bold text-xl text-zinc-300">Social</h4>
            <ul className="text-zinc-400 pt-5 space-y-2">
              <li><Link to={'https://www.facebook.com/profile.php?id=100091857246327'} target='_blank' className="hover:text-blue duration-500 transition-all ">Facebook</Link></li>
              <li><Link target='_blank' className="hover:text-blue duration-500 transition-all ">Instagram</Link></li>
              <li><Link target='_blank' className="hover:text-blue duration-500 transition-all ">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="py-4 md:py-8 text-zinc-400 font-light text-sm md:text-base flex justify-center md:justify-between">
          <p>Copyright © 2025.All Rights Reserved.</p>
          <div className="">
            <h2 className=" uppercase text-2xl"></h2>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer