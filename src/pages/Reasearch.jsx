import { Asterisk, CircleDot } from "lucide-react"
import Title from "../components/Title"
import { FaDiamond } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Reasearch = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 md:px-10">
        <Title title="Research" />
        <div className="py-20">
          <h2 className="font-bold text-2xl md:text-5xl md:leading-14 inline-block bg-[#E0F2FE] px-8 py-8 rounded-lg relative">Inclusive Sign Langauge Two Way Communication Platform for Nepali Sign Language <Asterisk size={90} className="animate-slowspin text-primary  absolute -top-10 -left-10" /></h2>
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3"><FaDiamond className="text-lg text-primary" />Problem</h3>
            <p className="pt-4 text-zinc-700">More than 100K people in Nepal have hearing and speaking disability (NDFN, 2022), while there are nearly 400M+ people globally with the same challenge (WFD, 2018). Their primary source of communication is sign language gestures. There lies a huge communication gap as most of us do not understand sign language, and it isn't feasible to have a translator everywhere. Because of this, people with such disability are held back from many opportunities. Also, any AI research and models developed to this day focus on some basic gestures, lack diversity in datasets, and very little to no work has been done for Nepali Sign Language. </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3"><FaDiamond className="text-lg text-primary" /> Research Aim</h3>
            <p className="pt-4 text-zinc-700">
              Our research aims to develop a two-way communication platform between sign language users and the audible community. This AI-based system will be able to translate the gestures to respective audio and transform the audio to mapped gestures in real time, thus establishing a smooth communication channel. We aim to study all the natures of sign language. static/dynamic, and gradually implement the model to multiple sign language variations globally.
            </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3"><FaDiamond className="text-lg text-primary" />Current Stage of the research</h3>
            <p className="pt-4 text-zinc-700">Currently, we have trained a hybrid classical-quantum deep learning model for 6 Nepali sign language gestures, "आज", "धन्यबाद", "घर", "जान्छु", "म", "नमस्कार", manually collecting datasets from 3 deaf schools in Kathmandu, Bhaktapur and Banepa. We used Pennylane to simulate the quantum environment implementing  "Quantum Variationa; Circuit" inside VGG-16 architecture using Pytorch. We have developed a web-based interface using Flask framework for real-time conversion of these 6 gestures into their respective Nepali audio. </p>
          </div>
          <div className="pt-8">
            <h3 className="text-2xl md:text-3xl font-semibold flex items-center gap-3"><FaDiamond className="text-lg text-primary" />Outcomes so far</h3>
            <ul className="text-zinc-700 pt-4 space-y-2 list-decimal list-inside">
              <li>We published a paper titled "Finger Spelling Gesture Recognition for Nepali Sign Language Using Hybrid Classical Quantum Deep Learning Model" at <Link to={"https://ictceel.khwopaconference.com/"} className="text-primary font-semibold" target="_blank">ICE-CEEL 2023</Link>.</li>
              <li>Top 12 finalists at ICT Awards 2023, product category.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Reasearch