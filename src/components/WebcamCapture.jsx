import { Camera, CameraOff } from "lucide-react";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8">
        {isCameraOn ? (
          <div className="relative">
            <div className="h-[80vh] bg-blue/30 rounded-lg border-2 border-blue/40">
              <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <button
              onClick={toggleCamera}
              className="absolute left-1 top-1/2 -translate-y-1/2 p-3 rounded-full text-white font-[500] transition bg-red-500 hover:bg-red-600 mt-2 cursor-pointer">
              <CameraOff size={20} />
            </button>
          </div>
        ) : (
          <div className="w-full h-[80vh] flex items-center justify-center bg-blue/30 rounded-lg border-2 border-blue/40">
            <div className="flex justify-center flex-col items-center bg-zinc-100  p-10 rounded-xl gap-4 border-2 border-blue/25">
              <Camera size={52} className="text-amber-800 bg-ambe p-3 rounded-full" />
              <button onClick={toggleCamera} className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white py-2 px-4 rounded-lg font-[500]">Enable Camera</button>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4">
        <div className="h-[80vh] bg-blue/5 rounded-md p-4 border-blue/10 border">
          <p>test</p>
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
