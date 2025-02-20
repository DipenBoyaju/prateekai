import Mission from "../components/Mission"
import Title from "../components/Title"
import about from '../assets/videos/about.mp4'
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import Vision from "../components/Vision";
import JoinUs from "../components/JoinUs";

const AboutUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  return (
    <div className="">
      <div className="container mx-auto px-4 md:px-10">
        <Title title="About Us" />
        <div className="py-10 relative">
          <div className="absolute w-26 h-60 bg-[#E9BD38] top-45 rounded-t-full rounded-b-full z-0 right-5 hidden md:block"></div>
          <div className="w-full md:w-[90%] mx-auto bg-zinc-800 md:h-[80vh] rounded-3xl border-8 border-zinc-300 overflow-hidden relative shadow-[-7px_7px_0_rgba(0,0,0,0.5)] z-10">
            <video
              ref={videoRef}
              src={about}
              className="w-full h-full object-cover"
              playsInline
              controls={showControls}
              onPause={handlePause}
            ></video>


            {!isPlaying && (
              <>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32"></div>
                <button
                  onClick={handlePlay}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-22 flex items-center justify-center cursor-pointer bg-white/50 text-white text-4xl rounded-full"
                >
                  <div className="bg-white/60 rounded-full size-26 z-0 p-2 absolute animate-slowping">
                  </div>
                  <div className="bg-white/60 rounded-full size-26 z-0 p-2 absolute">
                  </div>
                  <FaPlay className="text-zinc-900 pl-2 text-5xl z-20" />
                </button></>
            )}
          </div>
          <div className="">
            <p className="md:text-2xl text-zinc-800 text-left py-10">We are a dedicated team committed to breaking communication barriers through Nepali Sign Language Detection technology. Our mission is to empower the deaf and hard-of-hearing community by developing an innovative, accessible, and accurate system that translates Nepali Sign Language (NSL) into text or speech.<br /><br />

              With a strong belief in inclusivity and accessibility, we leverage the power of AI and computer vision to bridge the gap between the hearing and non-hearing communities. Our work is driven by a passion for social impact, technological advancement, and fostering equal opportunities in education, employment, and everyday interactions.</p>
          </div>
        </div>
        <JoinUs />
        <Vision />
        <Mission />
      </div>
    </div>
  )
}
export default AboutUs