import { useInView, motion } from "framer-motion";
import { Asterisk, Camera, Hand, MonitorStop } from "lucide-react"
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 });
  return (
    <div ref={ref} className="container mx-auto px-4 md:px-10 py-18 md:py-30">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="col-span-1 md:col-span-6">
          <h3 className="font-semibold text-base text-blue flex items-center"><Asterisk size={28} className="animate-slowspin" />Understanding the Process</h3>
          <h1 className='text-4xl md:text-6xl pt-3 font-bold text-darkBlue'>How It Works</h1>
          <div className="space-y-6 mt-4">
            <motion.div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4" initial={{ opacity: 0, y: -50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: ["easeIn", "easeOut"] }}>
              <Camera size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold mb-2 text-darkBlue">1. Enable Camera</h3>
                <p className="text-gray-600">Allow access to your webcam for real-time sign detection.</p>
              </div>
            </motion.div>
            <motion.div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4" initial={{ opacity: 0, y: -150 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: ["easeIn", "easeOut"], delay: 1 }}>
              <Hand size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">2. Perform Signs</h3>
                <p className="text-gray-600">Show a sign gesture in front of the camera.</p>
              </div>
            </motion.div>
            <motion.div className="bg-blue/10 border-[1px] border-blue/20 p-6 rounded-lg shadow-sm flex items-center gap-4" initial={{ opacity: 0, y: -150 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, ease: ["easeIn", "easeOut"], delay: 2 }}>
              <MonitorStop size={48} className="text-blue" />
              <div className="">
                <h3 className="text-xl font-semibold text-darkBlue mb-2">3. Get Translation</h3>
                <p className="text-gray-600">The system will recognize and display the meaning of your sign.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-zinc-900 w-[100%] md:w-full h-64 md:h-full col-span-1 md:col-span-6 rounded-xl border-8 border-blue/30">

        </div>
      </div>
    </div>
  )
}
export default HowItWorks