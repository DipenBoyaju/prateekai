import { Link } from 'react-router-dom'
import star from '../assets/images/Shape.png'
import vid1 from '../assets/videos/vid1.mp4'
import vid2 from '../assets/videos/vid2.mp4'
import { MoveRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="container mx-auto py-28 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="md:col-span-4">
          <h1 className="font-bold text-[2.9rem] leading-14 text-zinc-900 md:pt-14">Use AI-powered sign language detection to translate <span className='text-transparent stroke-black stroke-1 outline-text'>Nepali sign gestures</span> in real-time.</h1>
          <Link>
            <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/60 cursor-pointer transition flex items-center gap-2">
              Start Detection <MoveRight />
            </button>
          </Link>
        </div>
        <div className="md:col-span-8 flex relative justify-end">
          <div className="w-92 bg-zinc-600 h-124 mt-18 rounded-bl-[14rem] overflow-hidden shadow-[-7px_7px_0_rgba(0,0,0,0.2)] z-10">
            <video
              src={vid1}
              className="w-full h-full object-cover" autoPlay loop muted playsInline
            ></video>
          </div>
          <div className="w-92 bg-zinc-700 rounded-tr-[14rem] h-124 overflow-hidden z-10">
            <video
              src={vid2}
              className="w-full h-full object-cover" autoPlay loop muted playsInline></video>
          </div>
          <div className="h-56 w-56 aspect-square bg-[#4B58B8] absolute right-[40%] z-0 -top-8 rounded-full"></div>
          <img src={star} alt="" className=' animate-slowbounce absolute right-20 z-20' />
          <div className="w-38 h-38 aspect-square rounded-full bg-[#E44D30] absolute -bottom-16 animate-slowbounce left-20 z-20"></div>
          <div className="absolute w-26 h-60 bg-[#E9BD38] bottom-0 rounded-t-full rounded-b-full z-0 -right-10 hidden md:block"></div>
        </div>
      </div>
    </div>
  )
}
export default Hero