import { Asterisk } from "lucide-react"

const Vision = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 py-20 gap-10">
      <div className="md:col-span-6">
        <div className="relative">
          <h3 className="font-semibold text-2xl uppercase text-primary pt-4 md:pt-8 flex items-center"><Asterisk size={28} className="animate-slowspin" />Our Vision</h3>
          <p className="font-semibold text-7xl md:text-8xl uppercase opacity-15 text-primary absolute top-0">Vision</p>
        </div>
        <h2 className="text-4xl font-semibold pt-8 text-zinc-900">Empowering Communication Through Technology</h2>
        <div className="">
          <p className="text-zinc-500 pt-5">We envision a world where everyone, regardless of their hearing ability, can communicate effortlessly.<br /><br />

            Through innovation in Nepali Sign Language Detection, we strive to create an inclusive society where technology bridges the gap between the deaf community and the wider world.<br /><br />

            Our goal is to make sign language recognition accessible, accurate, and widely adopted, empowering individuals and fostering equal opportunities in education, employment, and daily interactions.<br /><br />

            Together, we are shaping a future where communication knows no limits.</p>
        </div>
      </div>
      <div className="md:col-span-6 relative hidden md:block">
        <div className="absolute size-42 border-[12px] rounded-2xl border-[#F8FAFC] -mt-5 ml-10 overflow-hidden z-20">
          <img src="/images/m2.jpg" alt="" className="h-full w-full object-cover object-center rounded-xl" />
        </div>
        <div className="w-[80%] ml-auto h-[80vh] rounded-2xl overflow-hidden relative">
          <img src="/images/m1.jpg" alt="" className="object-cover object-center h-full" />
        </div>
        <div className="absolute h-56 -mb-8 bottom-0 border-[12px] rounded-2xl border-[#F8FAFC]  overflow-hidden">
          <img src="/images/m3.jpg" alt="" className="h-full w-full object-cover object-center rounded-xl" />
        </div>
      </div>
    </div>
  )
}
export default Vision