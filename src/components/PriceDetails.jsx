import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import StripeCheckout from './Payment.jsx';

function PriceDetails({ roomdetail }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedGuests, setSelectedGuests] = useState();
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [dateError, setDateError] = useState("");
    const [nights, setNights] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const guestOptions = [1, 2, 3, 4, 5, 6];

    const handleSelect = (num) => {
        setSelectedGuests(num);
        setIsOpen(false);
    };

    // const handleBooking = async () => {
    //     const userEmail = localStorage.getItem("email");

    //     if (!userEmail) {
    //         alert("User not logged in.");
    //         return;
    //     }

    //     const totalPrice = roomdetail.price * nights * selectedGuests + roomdetail.serviceFee + roomdetail.cleaningFee;

    //     try {
    //         const response = await axios.post("https://backend-book-my-stay.vercel.app/api/book", {
    //             userEmail,
    //             hotelId: roomdetail.hotelId,
    //             hotelName: roomdetail.hotelName,
    //             checkInDate,
    //             checkOutDate,
    //             guests: selectedGuests,
    //             totalPrice,
    //         });
    //         if (response.data.message) {
    //             toast.success("Booking success");
    //             setTimeout(() => {
    //                 navigate("/bookingsuccess");
    //             }, 2000);
    //         } else {
    //             toast.error('Error in booking, please try again!');
    //         }
    //     } catch (error) {
    //         if (error.response && error.response.data && error.response.data.message) {
    //             toast.error(error.response.data.message);
    //         } else {
    //             toast.error("An error occurred. Please try again.");
    //         }
    //         console.error(error);
    //     }
    // };


    const calculateTotalPrice = () => {
        return roomdetail.price * nights * selectedGuests + roomdetail.serviceFee + roomdetail.cleaningFee;
    };

    return (
        <>
            <div className="flex justify-center w-full px-6">
                <div className="w-full bg-white rounded-2xl shadow-xl space-y-6 p-6 border border-gray-200 transition hover:shadow-blue-200">

                    <div className="flex justify-between items-center">
                        <div className="flex items-baseline space-x-1">
                            <h2 className="text-3xl font-bold text-gray-800">${roomdetail.price}</h2>
                            <p className="text-base text-gray-500">/night</p>
                        </div>

                        <h3 className="text-lg text-gray-700">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                            {roomdetail.rating}
                        </h3>
                    </div>

                    <form className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label className="mb-1 text-sm font-medium text-gray-700">Check-in</label>
                            <input
                                type="date"
                                value={checkInDate}
                                onChange={(e) => {
                                    setCheckInDate(e.target.value);
                                    if (checkOutDate && e.target.value > checkOutDate) {
                                        setDateError("Check-out date cannot be before Check-in date.");
                                    } else {
                                        setDateError("");
                                        const checkout = new Date(checkOutDate);
                                        const checkin = new Date(e.target.value);
                                        setNights((checkout - checkin) / (1000 * 60 * 60 * 24));
                                    }
                                }}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="mb-1 text-sm font-medium text-gray-700">Check-out</label>
                            <input
                                type="date"
                                value={checkOutDate}
                                onChange={(e) => {
                                    setCheckOutDate(e.target.value);
                                    if (checkInDate && e.target.value < checkInDate) {
                                        setDateError("Check-out date cannot be before Check-in date.");
                                    } else {
                                        setDateError("");
                                        const checkin = new Date(checkInDate);
                                        const checkout = new Date(e.target.value);
                                        setNights((checkout - checkin) / (1000 * 60 * 60 * 24));
                                    }
                                }}
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </form>
                    {dateError && <p className="text-red-500 text-sm text-center">{dateError}</p>}

                    <div className="relative">
                        <label className="mb-1 block text-sm font-medium text-gray-700">Guests</label>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-left hover:bg-gray-50 focus:outline-none"
                        >
                            {selectedGuests} Guest{selectedGuests > 1 ? "s" : ""}
                            <span className="float-right">&#9662;</span>
                        </button>

                        {isOpen && (
                            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                {guestOptions.map((num) => (
                                    <div
                                        key={num}
                                        onClick={() => handleSelect(num)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {num} Guest{num > 1 ? "s" : ""}
                                    </div>
                                ))}
                            </div>
                        )}

                        {checkInDate && checkOutDate && checkOutDate > checkInDate && (
                            <>
                                <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-xl space-y-3">
                                    <div className="flex justify-between text-gray-700">
                                        <span>
                                            ${roomdetail.price} × {nights} night{nights > 1 ? 's' : ''}
                                        </span>
                                        <span className="font-medium">
                                            ${(Number(roomdetail.price) * nights).toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Service Fee</span>
                                        <span>${Number(roomdetail.serviceFee).toLocaleString("en-IN")}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Cleaning Fee</span>
                                        <span>${(roomdetail.cleaningFee).toLocaleString("en-IN")}</span>
                                    </div>
                                    <hr className="border-t border-gray-300" />
                                    <div className="flex justify-between text-gray-800 font-semibold text-lg">
                                        <span>Total</span>
                                        <span>
                                            ${calculateTotalPrice().toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                </div>


                                <div className="mt-6 text-center">
                                    <StripeCheckout
                                        totalAmount={calculateTotalPrice()}
                                        bookingDetails={{
                                            userEmail: localStorage.getItem("email"),
                                            hotelId: roomdetail.hotelId,
                                            hotelName: roomdetail.hotelName,
                                            checkInDate,
                                            checkOutDate,
                                            guests: selectedGuests,
                                            totalPrice: calculateTotalPrice(),
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceDetails;
