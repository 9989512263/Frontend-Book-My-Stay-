import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
 
 
function HotelImage({ hotelimage }) {
 
    const [currentIndex, setCurrentIndex] = useState(0)
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? hotelimage.img.length - 1 : prevIndex - 1)
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === hotelimage.img.length - 1 ? 0 : prevIndex + 1)
    }
    return (
        <div className="relative w-screen h-90 overflow-hidden">
      <img
        src={hotelimage.img[currentIndex]}
        alt={hotelimage.name}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
 
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
 
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-md hover:scale-110 hover:bg-white transition-all duration-300 z-20"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
 
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-md hover:scale-110 hover:bg-white transition-all duration-300 z-20"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
 
      <div className="absolute bottom-4 left-6 z-20 text-white">
        <h3 className="text-2xl font-semibold">{hotelimage.name}</h3>
        <p className="text-md">{currentIndex + 1} / {hotelimage.img.length}</p>
      </div>
    </div>
    )
}
 
export default HotelImage
 

 