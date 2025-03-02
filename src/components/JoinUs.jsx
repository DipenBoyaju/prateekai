import { Asterisk } from "lucide-react"

const JoinUs = () => {
  return (
    <div className="bg-blue/20 w-full py-6 md:py-0 px-2 md:h-[60vh] rounded-lg flex justify-center items-center flex-col text-center">
      <Asterisk size={50} className="animate-slowspin text-blue" />
      <h2 className="text-2xl md:text-3xl font-semibold text-darkBlue mb-3">Be a Part of the Change</h2>
      <p className="text-base md:text-lg text-zinc-700 max-w-2xl pt-2">
        Join us in our mission to break communication barriers with Nepali Sign Language detection.
        Together, we can make communication more inclusive and accessible for everyone.
      </p>
      <button className="px-8 py-3 font-normal rounded-full text-lg mt-8 transition-all duration-500 bg-blue text-zinc-100 cursor-pointer w-fit hover:animate-pulse">
        Join With Us
      </button>
    </div>
  )
}
export default JoinUs