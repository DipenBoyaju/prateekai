import star from '../assets/images/Shape.png'
import vid1 from '../assets/videos/vid1.mp4'
import vid2 from '../assets/videos/vid2.mp4'

const Hero = () => {
  return (
    <div className="container mx-auto py-32">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4">
          <h1 className="font-bold text-8xl">Better To Think For Learning</h1>
        </div>
        <div className="col-span-8 flex justify-center">
          <div className="w-92 bg-zinc-600 h-124 mt-18 rounded-bl-[14rem] overflow-hidden">
            <video
              src={vid1}
              className="w-full h-full object-cover" autoPlay loop muted playsInline
            ></video>
          </div>
          <div className="w-92 bg-zinc-700 rounded-tr-[14rem] h-124 overflow-hidden">
            <video
              src={vid2}
              className="w-full h-full object-cover" autoPlay loop muted playsInline></video>
          </div>
          <div className="">
            <img src={star} alt="" className=' animate-slowbounce' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero