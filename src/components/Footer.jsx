import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-10">
        <div className="py-16 grid col-span-1 gap-5 mg:gap-0 md:grid-cols-12 border-b border-zinc-800">
          <div className="col-span-1 md:col-span-5">
            <p className="text-2xl font-semibold text-primary uppercase">prateek.ai</p>
            <p className="text-lg pr-16 pt-8 text-zinc-400">We are a dedicated team committed to breaking communication barriers through Nepali Sign Language Detection technology. Our mission is ...</p>
            <Link to={'/aboutus'} className="text-base pt-3 font-light flex gap-1 items-center text-primary/50">read more <MoveRight /></Link>
          </div>
          <div className="col-span-3">
            <h4 className="font-bold text-xl text-zinc-300">Discover</h4>
            <ul className="text-zinc-400 pt-5 space-y-2 grid grid-cols-2 w-full">
              <li><Link to={'/research'} className="hover:text-primary duration-500 transition-all ">Research</Link></li>
              <li><Link to={'/research'} className="hover:text-primary duration-500 transition-all ">Contributors</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-primary duration-500 transition-all ">About Us</Link></li>
              <li><Link to={'/contactus'} className="hover:text-primary duration-500 transition-all ">Contact Us</Link></li>
              <li><Link to={'/research'} className="hover:text-primary duration-500 transition-all ">Join Us</Link></li>
              <li><Link to={'/contribute'} className="hover:text-primary duration-500 transition-all ">Contribute</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-bold text-xl text-zinc-300">About</h4>
            <ul className="text-zinc-400 pt-5 space-y-2">
              <li><Link to={'/aboutus'} className="hover:text-primary duration-500 transition-all ">About Us</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-primary duration-500 transition-all ">Mission</Link></li>
              <li><Link to={'/aboutus'} className="hover:text-primary duration-500 transition-all ">Vision</Link></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-bold text-xl text-zinc-300">Social</h4>
            <ul className="text-zinc-400 pt-5 space-y-2">
              <li><Link to={'https://www.facebook.com/profile.php?id=100091857246327'} target='_blank' className="hover:text-primary duration-500 transition-all ">Facebook</Link></li>
              <li><Link target='_blank' className="hover:text-primary duration-500 transition-all ">Instagram</Link></li>
              <li><Link target='_blank' className="hover:text-primary duration-500 transition-all ">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="py-8 text-zinc-400 font-light flex justify-between">
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