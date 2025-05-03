import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
 
function HomeBase({propsRef}) {
 
    const scrollToProperties=()=>{
        if(propsRef.current){
            propsRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }
    const [location, setLocation] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState('');
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-t from-[#146380] via-[#1f8eb7] to-[#0284c7] mt-10">
                <h1 className="text-6xl font-bold text-white">
                    Find Your Perfect Stay
                </h1>
                <h1 className="text-6xl font-bold text-white mt-4">
                    Anywhere
                </h1>
                <p className="text-xl text-white mt-4 max-w-3xl text-center">
                    Discover amazing properties and book your next stay with confidence.
                </p>
                <div className="flex gap-4 mt-8">
                    <button onClick={scrollToProperties} className='bg-white font-bold py-2 px-6 rounded-lg hover:bg-white-600 transition-colors  w-full sm:w-auto cursor-pointer' style={{ color: '#0284c7' }}>
                        Browse Properties
                    </button>
                    <button className='bg-white  font-bold py-2 px-6 rounded-lg hover:bg-white-600 transition-colors  w-full sm:w-auto cursor-pointer' style={{ color: '#0284c7' }}>
                        Learn More
                    </button>
                </div>
 
 
                <div className="mt-12 bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
 
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Location Field */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="location" className="text-sm font-bold"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC" }} />   Location</label>
                            <input
                                type="text"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Where are you going?"
                                className="p-2 border border-gray-300 rounded-md h-9 w-full"
                            />
                        </div>
 
                        {/* Check-in Date Field */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="checkInDate" className="text-sm font-bold"><FontAwesomeIcon icon={faCalendar} style={{ color: "#74C0FC" }} />   Check-in</label>
                            <input
                                type="date"
                                id="checkInDate"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                placeholder="Select date"
                                className="p-2 border border-gray-300 rounded-md h-9 w-full"
                            />
                        </div>
 
                        {/* Check-out Date Field */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="checkOutDate" className="text-sm font-bold"><FontAwesomeIcon icon={faCalendar} style={{ color: "#74C0FC" }} />  Check-out</label>
                            <input
                                type="date"
                                id="checkOutDate"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                placeholder="Select date"
                                className="p-2 border border-gray-300 rounded-md h-9 w-full"
                            />
                        </div>
 
                        {/* Guests Field */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="guests" className="text-sm font-bold"><FontAwesomeIcon icon={faPersonWalkingLuggage} style={{ color: "#74C0FC" }} />  Guests</label>
                            <input
                                type="text"
                                id="guests"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                placeholder="2 Adults, 1 Children"
                                className="p-2 border border-gray-300 rounded-md h-9 w-full"
                            />
                        </div>
                    </div>
 
                    {/* Search Button (on a new line below the fields) */}
                    <div className="mt-6 w-full flex justify-center">
                        <button
                            onClick={() => console.log("Search clicked")}
                            className="bg-[#2596be] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#426876] hover:bg-opacity-80 transition-colors w-[900px]"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className=" bg-white p-10 rounded-lg shadow-xl w-full h-50 flex-row  border-b border-gray-200">
                <div className="flex justify-between p-10">
 
                    <div className="flex flex-col ">
                        <h2 className="text-4xl font-bold" style={{ color: '#0284c7' }}>1.2M+</h2>
                        <p className="text-lg text-gray-600 mt-1">Properties</p>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="text-4xl font-bold" style={{ color: '#0284c7' }}>150+</h2>
                        <p className="text-lg text-gray-600 mt-1">Countries</p>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="text-4xl font-bold" style={{ color: '#0284c7' }}>5M+</h2>
                        <p className="text-lg text-gray-600 mt-1">Happy Guests</p>
                    </div>
                    <div className="flex flex-col ">
                        <h2 className="text-4xl font-bold" style={{ color: '#0284c7' }}>4.8/5</h2>
                        <p className="text-lg text-gray-600 mt-1">Average Rating</p>
                    </div>
                </div>
 
 
            </div>
 
        </>
    )
}
 
export default HomeBase;