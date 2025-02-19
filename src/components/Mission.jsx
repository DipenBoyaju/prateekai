import { Asterisk, Component } from "lucide-react"
import img1 from '../assets/images/6.jpg'
import img2 from '../assets/images/2.jpg'

const Mission = () => {
  return (
    <div className="grid grid-cols-12 py-20 gap-10">
      <div className="col-span-6 relative mt-14">
        <img src={img1} alt="" className="w-[90%]" />
        <div className="absolute size-82 top-85 right-0 border-[12px] rounded-2xl overflow-hidden border-[#F8FAFC]">
          <img src={img2} alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="col-span-6">
        <div className="relative">
          <h3 className="font-semibold text-2xl uppercase text-primary pt-8 flex"><Asterisk size={28} className="animate-slowspin" />Our Mission</h3>
          <p className="font-semibold text-8xl uppercase opacity-15 text-primary absolute top-0">Mission</p>
        </div>
        <h2 className="text-4xl font-semibold pt-8 text-zinc-900">Empowering Communication Through Technology</h2>
        <p className="pt-6 text-zinc-500">We believe that bridging the communication gap can create a more inclusive world.<br /><br />

          Our mission is to develop an advanced Nepali Sign Language Detection system that empowers individuals with hearing and speech impairments by enabling seamless interaction with society.</p>
        <div className="pt-5">
          <h3 className="text-2xl font-semibold text-zinc-900 pb-2">Our Strategic Priorities:</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-zinc-600 inline"> <span className="font-semibold text-primary flex gap-2 items-center"><Component className="" size={20} />Enhancing Accessibility</span> Making communication easier for the deaf and hard of hearing through AI-powered sign language detection.</li>
            <li className="text-zinc-600 inline"> <span className="font-semibold text-primary flex gap-2 items-center"><Component className="" size={20} />Promoting Inclusion</span> Encouraging social awareness and fostering inclusivity in education, workplaces, and communities.</li>
            <li className="text-zinc-600 inline"> <span className="font-semibold text-primary flex gap-2 items-center"><Component className="" size={20} />Driving Innovation</span> Utilizing cutting-edge technology to improve real-time sign language recognition and interpretation.</li>
          </ul>
          <button className="border-2 border-primary px-8 py-3 font-normal rounded-full text-lg mt-5 transition-all duration-500 hover:bg-primary hover:text-zinc-100 cursor-pointer">Join With us</button>
        </div>
      </div>
    </div>
  )
}
export default Mission