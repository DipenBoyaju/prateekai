import WebcamCapture from "../components/WebcamCapture"
// import WebcamCaptureForVideo from "../components/WebcamCaptureForVideo"

const Detection = () => {

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-10">
        {/* <h1 className="text-2xl font-bold mb-4">Nepali Sign Language Detection</h1> */}
        <div className="bg-blue-100 text-darkBlue p-4 rounded-lg mb-6 shadow-md">
          <h2 className="text-lg font-semibold">How It Works:</h2>
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li>Enable the camera by clicking the button below.</li>
            <li>Show a Nepali sign language gesture in front of the webcam.</li>
            <li>The system will detect and display the translated word on the right side.</li>
            <li>Ensure good lighting and a clear background for better accuracy.</li>
          </ul>
        </div>
        <WebcamCapture />
        {/* <WebcamCaptureForVideo /> */}
      </div>
    </div>
  )
}
export default Detection