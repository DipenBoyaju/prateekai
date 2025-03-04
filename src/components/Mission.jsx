import { Asterisk, Component } from "lucide-react"

const Mission = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 py-20 gap-10">
      <div className="md:col-span-6 relative mt-14 hidden md:block">
        <img src="/images/6.jpg" alt="" className="w-[90%]" />
        <div className="absolute size-82 top-85 right-0 border-[12px] rounded-2xl overflow-hidden border-[#E0F2FE]">
          <img src="/images/2.jpg" alt="" className="rounded-xl" />
        </div>
      </div>
      <div className="md:col-span-6">
        <div className="relative">
          <h3 className="font-semibold text-2xl uppercase text-blue pt-5 md:pt-8 flex"><Asterisk size={28} className="animate-slowspin" />Our Mission</h3>
          <p className="font-semibold text-7xl md:text-8xl uppercase opacity-15 text-blue absolute top-0">Mission</p>
        </div>
        <h2 className="text-4xl font-semibold pt-8 text-darkBlue">Empowering Communication Through Technology</h2>
        <p className="pt-6 text-zinc-500">We believe that bridging the communication gap can create a more inclusive world.<br /><br />

          Our mission is to develop an advanced Nepali Sign Language Detection system that empowers individuals with hearing and speech impairments by enabling seamless interaction with society.</p>
        <div className="pt-5">
          <h3 className="text-2xl font-semibold text-darkBlue pb-2">Our Strategic Priorities:</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-zinc-600 inline"> <span className="font-semibold text-blue flex gap-2 items-center"><Component className="" size={20} />Enhancing Accessibility</span> Making communication easier for the deaf and hard of hearing through AI-powered sign language detection.</li>
            <li className="text-zinc-600 inline"> <span className="font-semibold text-blue flex gap-2 items-center"><Component className="" size={20} />Promoting Inclusion</span> Encouraging social awareness and fostering inclusivity in education, workplaces, and communities.</li>
            <li className="text-zinc-600 inline"> <span className="font-semibold text-blue flex gap-2 items-center"><Component className="" size={20} />Driving Innovation</span> Utilizing cutting-edge technology to improve real-time sign language recognition and interpretation.</li>
          </ul>
          <button className="border-2 border-blue px-8 py-3 font-normal rounded-full text-lg mt-5 transition-all duration-500 hover:bg-blue hover:text-zinc-100 cursor-pointer">Join With us</button>
        </div>
      </div>
    </div>
  )
}
export default Mission