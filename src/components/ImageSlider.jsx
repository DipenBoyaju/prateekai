import { useEffect, useRef } from "react";

const ImageSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full">
      <div
        ref={scrollRef}
        className="flex w-max animate-scroll"
        style={{ display: "flex" }}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex">
            <img src="./images/2.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/6.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m1.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m2.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m3.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/2.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/6.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m1.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m2.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
            <img src="./images/m3.jpg" alt="" className="w-50 md:w-70 h-32 md:h-50 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
