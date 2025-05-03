import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faToilet } from '@fortawesome/free-solid-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Newpage({hotelData}) {
    const [activeTab, setActiveTab] = useState('description');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="bg-white  w-full flex">
                <div className="flex flex-col w-full bg-white px-20 pb-20 pt-10">
                    <p className="text-medium text-gray-600"><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />    {hotelData?.starRating}• 128 reviews</p>
                    <h2 className="text-4xl text-black font-bold mt-2">{hotelData?.name}</h2>
                    <p className="text-gray-600 mt-2"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC" }} />{hotelData?.city
                    }</p>

                    <div className="flex w-full justify-between mt-5">
                        <div className="flex-1 p-4 bg-gray-200 text-center h-17 w-32 rounded-lg border border-gray-300">
                            <h2 className="font-bold">1</h2>
                            <p className="text-gray-600 text-sm">Bedroom</p>
                        </div>
                        <div className="flex-1 p-4 bg-gray-200 text-center h-17 w-32 rounded-lg border border-gray-300 ml-4">
                            <h2 className="font-bold">2</h2>
                            <p className="text-gray-600 text-sm">Beds</p>
                        </div>
                        <div className="flex-1 p-4 bg-gray-200 text-center h-17 w-32 rounded-lg border border-gray-300 ml-4">
                            <h2 className="font-bold">1</h2>
                            <p className="text-gray-600 text-sm">Washroom</p>
                        </div>
                        <div className="flex-1 p-4 bg-gray-200 text-center h-17 w-32 rounded-lg border border-gray-300 ml-4">
                            <h2 className="font-bold">3</h2>
                            <p className="text-gray-600 text-sm">Guests</p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mt-8">
                        <div className="flex ">
                            <button
                                onClick={() => handleTabClick('description')}
                                className={`flex-1 py-2 text-center border-b-2 ${activeTab === 'description' ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 focus:outline-none w-20`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => handleTabClick('amenities')}
                                className={`flex-1 py-2 text-center border-b-2 ${activeTab === 'amenities' ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 focus:outline-none `}
                            >
                                Amenities
                            </button>
                            <button
                                onClick={() => handleTabClick('policies')}
                                className={`flex-1 py-2 text-center border-b-2  ${activeTab === 'policies' ? 'border-blue-500' : 'border-transparent'} hover:border-blue-500 focus:outline-none`}
                            >
                                Policies
                            </button>
                        </div>

                        <div className="tab-content mt-4 ">
                            {activeTab === 'description' && (
                                <div class>
                                    <p class="text-gray-600 mt-5">Experience ultimate luxury in this spacious oceanfront suite featuring floor-to-ceiling windows with panoramic views of the Atlantic Ocean. This tastefully decorated accommodation offers a king-sized bed, a separate living area with a sofa bed, and a private balcony where you can enjoy the sea breeze and stunning sunrises.</p>
                                </div>
                            )}
                            {activeTab === 'amenities' && (
                                <div>
                                    <h2 className="text-xl font-bold">Amenities</h2>
                                    <div className="flex flex-wrap mt-7">
                                        <div className="flex space-x-4 mb-4 w-full ">
                                            <div className="flex items-center">
                                                <span className="text-medium text-black  ">  <FontAwesomeIcon icon={faWifi} style={{ color: '#74C0FC' }} />     Free WiFi</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-medium text-black ml-50 font-semibold">    <FontAwesomeIcon icon={faSquareParking}  style={{ color: "#74C0FC" }} />   Parking</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-medium text-black ml-60 font-semibold"><FontAwesomeIcon icon={faToilet} style={{ color: "#74C0FC"}} />    Private Bathroom</span>
                                            </div>
                                        </div>

                                        <div className="flex space-x-4 mb-3 w-full " >
                                            <div className="flex items-center">
                                                <span className="text-medium text-black font-semibold"><FontAwesomeIcon icon={faMugSaucer} style={{ color: "#74C0FC" }} />  Breakfast Included</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-medium text-black ml-32 font-semibold"><FontAwesomeIcon icon={faUtensils} style={{ color: "#74C0FC"}} />      Restaurant</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-medium text-black ml-54 font-semibold"><FontAwesomeIcon icon={faFan} style={{ color: "#74C0FC"}} />   Air Conditioning</span>
                                            </div>
                                        </div>

                                        <div className="flex w-full ">
                                            <div className="flex items-center">
                                                <span className="text-medium text-black font-semibold mt-2"><FontAwesomeIcon icon={faTv} style={{ color: "#74C0FC" }} />    TV</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab === 'policies' && (
                                <div>
                                    <h2 className="text-xl font-bold">Policies</h2>

                                    <div className="mt-4">
                                        <h3 className="font-semibold">Check-in / Check-out</h3>
                                        <p className="text-medium text-gray-600 mt-3">
                                            Check-in: <span className="font-bold">3:00 PM</span>
                                        </p>
                                        <p className="text-medium text-gray-600">
                                            Check-out: <span className="font-bold">11:00 AM</span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="font-semibold">Cancellation Policy</h3>
                                        <p className="text-medium text-gray-600 mt-3">
                                            Free cancellation up to 48 hours before check-in. After that, the first night is non-refundable.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="font-semibold">House Rules</h3>
                                        <ul className="list-disc pl-5 text-medium text-gray-600">
                                            <li>No smoking</li>
                                            <li>No parties or events</li>
                                            <li>Pets not allowed</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Newpage;
