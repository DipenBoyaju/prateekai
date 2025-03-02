import { Asterisk, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

const AboutInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  return (
    <div className="relative" ref={ref} style={{ backgroundImage: `url("/images/aboutbg.png")` }}>
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-12 md:gap-10 pt-16 pb-16 md:pt-28 md:pb-32">
        <div className="col-span-1 md:col-span-5 relative w-full">
          <motion.div className="absolute -top-20 size-60 border-8 rounded-xl border-white shadow-lg overflow-hidden -left-18 hidden md:block z-30" initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: ["easeIn", "easeOut"] }}>
            <img src="/images/m2.jpg" alt="" className=' rounded-lg object-cover object-center h-full' />
          </motion.div>
          <motion.div className="border-8 rounded-xl border-white shadow-lg w-full overflow-hidden md:h-[70vh] z-20 relative" initial={{ x: -600 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ duration: 1.2, ease: ["easeIn", "easeOut"] }}>
            <img src="/images/m1.jpg" alt="" className=' rounded-lg object-cover object-center h-full' />
          </motion.div>
          <motion.div className="absolute hidden md:block -bottom-20 size-54 border-8 rounded-xl border-white shadow-lg overflow-hidden right-0 z-30" initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: ["easeIn", "easeOut"] }}>
            <img src="/images/m3.jpg" alt="" className=' rounded-lg object-cover object-center h-full' />
          </motion.div>
          <div className="border-l-2 hidden md:block border-gold absolute -bottom-18 left-25 border-b-2 w-40 h-20 rounded-bl-3xl"></div>
        </div>
        <div className="col-span-7 mt-8 md:mt-0">
          <h3 className="font-semibold text-base text-blue flex items-center"><Asterisk size={28} className="animate-slowspin" />What we stand for</h3>
          <h1 className='text-4xl md:text-6xl pt-3 font-bold text-darkBlue'>About Us</h1>
          <p className='pt-6 text-zinc-700 z-20 relative'>We are a dedicated team committed to breaking communication barriers through Nepali Sign Language Detection technology. Our mission is to empower the deaf and hard-of-hearing community by developing an innovative, accessible, and accurate system that translates Nepali Sign Language (NSL) into text or speech.</p>

          <div className="pt-8">
            <h4 className="font-semibold text-sm text-blue flex items-center"><Asterisk size={18} className="animate-slowspin" />Our Research</h4>
            <Link to={'/research'}>
              <p className='border-t border-b py-2 md:w-2/3 font-semibold mt-2 border-dashed text-lg border-zinc-400 text-blue'>Inclusive Sign Langauge Two Way Communication Platform for Nepali Sign Language</p></Link>
          </div>

          <Link to="/aboutus">
            <button className="mt-8 bg-blue text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue/60 cursor-pointer transition flex items-center gap-2">
              More About Us <MoveRight />
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full absolute top-0 right-0 w-62 bg-blue/30 z-10"></div>
    </div>
  )
}
export default AboutInfo