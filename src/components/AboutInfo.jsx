import { Asterisk, MoveRight } from 'lucide-react'
import img1 from '../assets/images/m1.jpg'
import img2 from '../assets/images/m2.jpg'
import img3 from '../assets/images/m3.jpg'
import bg from '../assets/images/aboutbg.png'
import { Link } from 'react-router-dom'

const AboutInfo = () => {
  return (
    <div className="relative" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 md:gap-10 pt-24 pb-28">
        <div className="col-span-1 md:col-span-5 relative w-full">
          <div className="absolute -top-20 size-60 border-8 rounded-xl border-white shadow-lg overflow-hidden -left-18 hidden md:block z-30">
            <img src={img2} alt="" className=' rounded-lg object-cover object-center h-full' />
          </div>
          <div className="border-8 rounded-xl border-white shadow-lg w-full overflow-hidden md:h-[70vh] z-20 relative">
            <img src={img1} alt="" className=' rounded-lg object-cover object-center h-full' />
          </div>
          <div className="absolute hidden md:block -bottom-20 size-54 border-8 rounded-xl border-white shadow-lg overflow-hidden right-0 z-30">
            <img src={img3} alt="" className=' rounded-lg object-cover object-center h-full' />
          </div>
          <div className="border-l-2 border-gold absolute -bottom-18 left-25 border-b-2 w-40 h-20 rounded-bl-3xl"></div>
        </div>
        <div className="col-span-7">
          <h3 className="font-semibold text-base text-primary flex items-center"><Asterisk size={28} className="animate-slowspin" />What we stand for</h3>
          <h1 className='text-6xl pt-3 font-bold text-zinc-900'>About Us</h1>
          <p className='pt-6 text-zinc-700 z-20 relative'>We are a dedicated team committed to breaking communication barriers through Nepali Sign Language Detection technology. Our mission is to empower the deaf and hard-of-hearing community by developing an innovative, accessible, and accurate system that translates Nepali Sign Language (NSL) into text or speech.</p>

          <div className="pt-8">
            <h4 className="font-semibold text-sm text-primary flex items-center"><Asterisk size={18} className="animate-slowspin" />Our Research</h4>
            <Link to={'/research'}>
              <p className='border-t border-b py-2 w-2/3 font-semibold mt-2 border-dashed text-lg border-zinc-400 text-primary'>Inclusive Sign Langauge Two Way Communication Platform for Nepali Sign Language</p></Link>
          </div>

          <Link>
            <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-primary/60 cursor-pointer transition flex items-center gap-2">
              More About Us <MoveRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full absolute top-0 right-0 w-62 bg-primary/30 z-10"></div>
    </div>
  )
}
export default AboutInfo