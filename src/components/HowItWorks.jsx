import { Asterisk, Camera, Hand, MonitorStop } from "lucide-react"

const HowItWorks = () => {
  return (
    <div className="container mx-auto px-4 md:px-10 py-30">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="col-span-6">
          <h3 className="font-semibold text-base text-blue flex items-center"><Asterisk size={28} className="animate-slowspin" />Understanding the Process</h3>
          <h1 className='text-6xl pt-3 font-bold text-darkBlue'>How It Works</h1>
          <div className="space-y-6 mt-4">
            <div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4">
              <Camera size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold mb-2 text-darkBlue">1. Enable Camera</h3>
                <p className="text-gray-600">Allow access to your webcam for real-time sign detection.</p>
              </div>
            </div>
            <div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4">
              <Hand size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">2. Perform Signs</h3>
                <p className="text-gray-600">Show a sign gesture in front of the camera.</p>
              </div>
            </div>
            <div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4">
              <MonitorStop size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">3. Get Translation</h3>
                <p className="text-gray-600">The system will recognize and display the meaning of your sign.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 w-full h-full md:col-span-6 rounded-xl border-8 border-zinc-200">

        </div>
      </div>
    </div>
  )
}
export default HowItWorks