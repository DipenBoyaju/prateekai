import { Asterisk } from "lucide-react"
import Title from "../components/Title"

const Join = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 md:px-10">
        <Title title="Join Us" />
        <div className="grid grid-cols-1 md:grid-cols-12 py-20 gap-10">
          <div className="md:col-span-6">
            <p className="flex gap-1 items-center text-primary"><Asterisk size={28} className="animate-slowspin" /> Join Together</p>
            <h2 className="text-5xl leading-14 font-bold pt-3">Be Part of the Change & Make a Difference</h2>
            <p className="pt-6 text-zinc-700 border-b border-zinc-300 pb-10">Join us in revolutionizing Nepali Sign Language detection and breaking communication barriers. Together, we can empower the deaf and hard-of-hearing community by creating an innovative, accessible, and inclusive world where everyone has the opportunity to connect and be heard.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Join