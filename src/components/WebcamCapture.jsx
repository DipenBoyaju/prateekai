import { Camera, CameraOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const WebcamCapture = () => {
  const localVideoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [signText, setSignText] = useState(null);

  useEffect(() => {
    let localVideo = localVideoRef.current;
    if (!isCameraOn) return;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (localVideo) {
          localVideo.srcObject = stream;
        }

        // Start sending frames to the backend for sign language detection
        const interval = setInterval(() => {
          captureFrameAndSend(stream); // Capture and send every few seconds
        }, 2000);

        return () => clearInterval(interval); // Clean up interval on unmount
      })
      .catch((error) => {
        console.error("Error accessing media devices:", error)
        toast.error('Unable to access the camera. Please check permissions.')

      });

    // Cleanup on unmount
    return () => {
      if (localVideo && localVideo.srcObject) {
        const tracks = localVideo.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  const captureFrameAndSend = () => {
    const canvas = document.createElement('canvas');
    const video = localVideoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg'); // Convert the canvas image to base64

    // Send the frame to the backend API for sign language detection
    fetch('http://localhost:8000/api/detect-sign-language', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ image: imageData }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.detectedSign) {
          setSignText(data.detectedSign); // Update the detected sign text
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  const toggleCamera = () => {
    setIsCameraOn((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="col-span-1 md:col-span-8">
        {isCameraOn ? (
          <div className="relative">
            <div className="h-[40vh] md:h-[80vh] bg-blue/30 rounded-lg border-2 border-blue/40">
              {/* Local webcam stream */}
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            <button
              onClick={toggleCamera}
              className="absolute left-1 top-1/2 -translate-y-1/2 p-3 rounded-full text-white font-[500] transition bg-red-500 hover:bg-red-600 mt-2 cursor-pointer"
            >
              <CameraOff size={20} />
            </button>
          </div>
        ) : (
          <div className="w-full h-[40vh] md:h-[80vh] flex items-center justify-center bg-blue/30 rounded-lg border-2 border-blue/40">
            <div className="flex justify-center flex-col items-center bg-zinc-100 md:p-10 p-4 rounded-xl gap-4 border-2 border-blue/25">
              <Camera size={52} className="text-amber-800 bg-amber p-3 rounded-full" />
              <button
                onClick={toggleCamera}
                className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white py-2 px-4 rounded-lg font-[500] text-sm md:text-base"
              >
                Enable Camera
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-1 md:col-span-4">
        <div className="h-[30vh] md:h-[80vh] bg-blue/5 rounded-md p-4 border-blue/10 border">
          {/* Display detected sign language text */}
          {signText && (
            <div className="flex justify-center items-center h-full">
              <p className="text-2xl font-bold text-gray-800">{signText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
