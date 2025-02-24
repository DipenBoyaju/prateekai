import { Asterisk } from "lucide-react"

// bg-[#E0F2FE]
const JoinUs = () => {
  return (
    <div className="bg-amber-200 w-full h-[60vh] rounded-lg flex justify-center items-center flex-col text-center">
      <Asterisk size={50} className="animate-slowspin text-primary" />
      <h2 className="text-3xl font-semibold text-zinc-900 mb-3">Be a Part of the Change</h2>
      <p className="text-lg text-zinc-700 max-w-2xl pt-2">
        Join us in our mission to break communication barriers with Nepali Sign Language detection.
        Together, we can make communication more inclusive and accessible for everyone.
      </p>
      <button className="px-8 py-3 font-normal rounded-full text-lg mt-8 transition-all duration-500 bg-primary text-zinc-100 cursor-pointer w-fit hover:animate-pulse">
        Join With Us
      </button>
    </div>
  )
}
export default JoinUs