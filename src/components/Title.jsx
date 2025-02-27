import { ChevronDown } from "lucide-react"

const Title = ({ title }) => {
  return (
    <div className="text-center flex flex-col justify-center py-10 sm:py-14 items-center border-b border-dashed border-zinc-400">
      <h1 className="text-4xl sm:text-6xl font-bold text-blue capitalize">{title}</h1>
      <ChevronDown className="mt-5 sm:mt-7 text-blue" size={30} sm:size={50} />
    </div>
  )
}
export default Title
