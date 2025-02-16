import star from '../assets/images/Shape.png'
import vid1 from '../assets/videos/vid1.mp4'
import vid2 from '../assets/videos/vid2.mp4'

const Hero = () => {
  return (
    <div className="container mx-auto py-32 px-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <h1 className="font-bold text-7xl text-zinc-900">Better To Think For Learning</h1>
        </div>
        <div className="col-span-8 flex relative justify-end">
          <div className="w-92 bg-zinc-600 h-124 mt-18 rounded-bl-[14rem] overflow-hidden shadow-[-7px_7px_0_rgba(0,0,0,0.2)]">
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
          <img src={star} alt="" className=' animate-slowbounce absolute right-20 z-20' />
          <div className="absolute w-26 h-60 bg-[#E9BD38] bottom-0 rounded-t-full rounded-b-full z-0 -right-10"></div>
        </div>
      </div>
    </div>
  )
}
export default Hero