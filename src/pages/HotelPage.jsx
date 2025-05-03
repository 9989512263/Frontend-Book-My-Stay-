import HotelImage from "../components/HotelImage";
import NavBar from "../components/Navigation";
import PriceDetails from "../components/PriceDetails";
import HomeFooter from "../components/HomeFooter";
import HotelDescription from "../components/HotelDescription";
import { useRef, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function HotelPage({ setisAuthenticated }) {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const { id } = useParams();
    const [hotelData, setHotelData] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/hotels/${id}`)
            .then(response => {
                setHotelData(response.data);
            })
            .catch(error => {
                console.error("Failed to fetch hotel details:", error);
            });
    }, [id]);

    if (!hotelData) return <div>Loading...</div>;

    const hotelimages = [
        { id: 1, name: "abc", img: ["https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg", "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwaG90ZWx8ZW58MHx8MHx8fDA%3D", "https://www.decorpot.com/images/blogimage1361284108interior-designs-for-master-bedroom.jpg"] }
    ]
    return (
        <>
            <NavBar
                homeRef={homeRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
                setisAuthenticated={setisAuthenticated}
            />
            <div class="mt-18">
                {hotelimages.map((hotelimage) => (
                    <HotelImage hotelimage={hotelimage} key={hotelimage.id} />
                ))}
            </div>
            <div class="flex gap-6">
                <div className="w-2/3 bg-gray-100 py-10 rounded-lg">
                    <HotelDescription hotelData={hotelData} />
                </div>
                <div className="w-1/3 bg-gray-100 py-10 rounded-lg">
                    <PriceDetails
                        roomdetail={{
                            hotelId: hotelData._id,      
                            hotelName: hotelData.name,    
                            price: hotelData.price || 120,
                            rating: hotelData.rating || 4.5,
                            serviceFee: 15,
                            cleaningFee: 20
                        }}
                    />
                </div>

            </div>
            <HomeFooter />
        </>
    );
}

export default HotelPage;
