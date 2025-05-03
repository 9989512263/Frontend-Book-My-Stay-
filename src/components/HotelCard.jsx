import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
function HotelCard({ hotel }) {
    const navigate = useNavigate();
    const handleCLick =()=>{
        navigate(`/hotel/${hotel._id}`); 
    }
    return (
            <div onClick={handleCLick} className="max-w-sm cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-100 hover:scale-103 hover:shadow-xl">
                <img
                    className="w-full h-48 object-cover"
                    src={hotel.imageURL}
                    alt={hotel.name}
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                    <h4 className="text-sm text-gray-500 mb-2"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC" }} /> {hotel.city}</h4>
 
                    <div className="flex items-center mb-2">
                       
                        <p className="text-yellow-500 font-medium mr-1"><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />{hotel.starRating}</p>
                    </div>
 
                    {/* <p className="text-lg font-bold text-gray-800">⭐{hotel.starRating}</p> */}
                </div>
            </div>
       
 
 
 
 
    )
}
 
export default HotelCard