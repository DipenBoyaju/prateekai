import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="container mx-auto py-18 md:py-28 px-4 md:px-10 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <motion.div initial={{ x: -600 }} animate={{
          x: 0,
          transition: { duration: 1.2, ease: ["easeIn", "easeOut"] }
        }} className="md:col-span-4">
          <h1 className="font-bold text-[2.2rem] md:text-[2.9rem] leading-12 md:leading-14 text-center md:text-left text-darkBlue md:pt-14">Use AI-powered sign language detection to translate <span className='text-transparent stroke-blue stroke-1 outline-text'>Nepali sign gestures</span> in real-time.</h1>
          <Link to={'/signdetection'} className='flex justify-center md:justify-normal'>
            <button className="mt-8 bg-blue text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue/60 cursor-pointer transition flex items-center gap-2">Get Started<MoveRight />
            </button>
          </Link>
        </motion.div>
        <motion.div initial={{ x: 1000 }} animate={{
          x: 0,
          transition: { duration: 1.2, ease: ["easeIn", "easeOut"], delay: 0.3 }
        }}
          transition={{ type: "spring" }}
          className="md:col-span-8  relative justify-end hidden md:flex">
          <div className="w-92 bg-zinc-600 h-124 mt-18 rounded-bl-[14rem] overflow-hidden shadow-[-7px_7px_0_rgba(0,0,0,0.2)] z-10">
            <video
              src="/videos/vid1.mp4"
              className="w-full h-full object-cover" autoPlay loop muted playsInline
            ></video>
          </div>
          <div className="w-92 bg-zinc-700 rounded-tr-[14rem] h-124 overflow-hidden z-10">
            <video
              src="/videos/vid2.mp4"
              className="w-full h-full object-cover" autoPlay loop muted playsInline></video>
          </div>
          <div className="h-56 w-56 aspect-square bg-[#4B58B8] absolute right-[40%] z-0 -top-8 rounded-full"></div>
          <img src="/images/Shape.png" alt="" className=' animate-slowbounce absolute right-20 z-20' />
          <div className="w-38 h-38 aspect-square rounded-full bg-[#E44D30] absolute -bottom-16 animate-slowbounce left-20 z-20"></div>
          <div className="absolute w-26 h-60 bg-[#E9BD38] bottom-0 rounded-t-full rounded-b-full z-0 -right-10 hidden md:block"></div>
        </motion.div>
      </div>
    </div>
  )
}
export default Hero