import { Camera, CameraOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WebcamCaptureForVideo = () => {
  const localVideoRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [signText, setSignText] = useState(null); // This will hold the detected sign language text

  useEffect(() => {
    let localVideo = localVideoRef.current; // Copy the ref to a variable inside the effect
    let videoStream;
    if (!isCameraOn) return;

    // Get user media (camera access)
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoStream = stream;
        if (localVideo) {
          localVideo.srcObject = stream;
        }

        // Start sending video frames every 100ms (10 FPS)
        const videoInterval = setInterval(() => {
          captureVideoFrameAndSend(stream); // Capture and send video frame every 100ms
        }, 100); // Send a frame every 100ms (10 FPS)

        // Cleanup on unmount
        return () => {
          clearInterval(videoInterval);
          if (localVideo && localVideo.srcObject) {
            const tracks = localVideo.srcObject.getTracks();
            tracks.forEach((track) => track.stop());
          }
        };
      })
      .catch((error) => console.error("Error accessing media devices:", error));

    // Cleanup on unmount
    return () => {
      if (videoStream) {
        const tracks = videoStream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  const captureVideoFrameAndSend = () => {
    const canvas = document.createElement('canvas');
    const video = localVideoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg');


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
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-8">
        {isCameraOn ? (
          <div className="relative">
            <div className="h-[80vh] bg-blue/30 rounded-lg border-2 border-blue/40">
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
          <div className="w-full h-[80vh] flex items-center justify-center bg-blue/30 rounded-lg border-2 border-blue/40">
            <div className="flex justify-center flex-col items-center bg-zinc-100 p-10 rounded-xl gap-4 border-2 border-blue/25">
              <Camera size={52} className="text-amber-800 bg-amber p-3 rounded-full" />
              <button
                onClick={toggleCamera}
                className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-white py-2 px-4 rounded-lg font-[500]"
              >
                Enable Camera
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="col-span-4">
        <div className="h-[80vh] bg-blue/5 rounded-md p-4 border-blue/10 border">
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

export default WebcamCaptureForVideo;
