import { ChevronDown } from "lucide-react"

const Title = ({ title }) => {
  return (
    <div className="text-center flex flex-col justify-center py-14 items-center border-b border-dashed border-zinc-400">
      <h1 className="text-6xl font-bold text-primary capitalize">{title}</h1>
      <ChevronDown className="mt-7 text-primary" size={50} />
    </div>
  )
}
export default Title