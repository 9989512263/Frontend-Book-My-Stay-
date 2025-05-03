import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HotelList from './getallhotels';

function Dashboard() {
    const navigate = useNavigate();
    const handleClick = () => {

        navigate('/addnewhotel');

    };


    return (
        <div className="flex ">
            <div class="bg-white h-screen w-80 border-r border-gray-300 ">
                <h2 className="text-2xl font-bold p-5 border-b border-gray-300">Hospitable</h2>
                <ul class="px-10 pt-4 space-y-2 text-gray-700 font-medium">
                    <li class="bg-blue-100 rounded px-5 py-2 transition-all duration-200">Dashboard</li>
                    <li class="hover:bg-blue-100 hover:pl-6 rounded px-2 py-2 cursor-pointer transition-all duration-200">Hotels</li>
                    <li class="hover:bg-blue-100 hover:pl-6 rounded px-2 py-2 cursor-pointer transition-all duration-200">Add Hotel</li>
                    <li class="hover:bg-blue-100 hover:pl-6 rounded px-2 py-2 cursor-pointer transition-all duration-200">Staff</li>
                    <li class="hover:bg-blue-100 hover:pl-6 rounded px-2 py-2 cursor-pointer transition-all duration-200">Bookings</li>
                </ul>
                <div className='bg-white mt-74 h-30 w-70 '>
                    <ul className='px-10 pt-4 space-y-2 text-gray-700 font-medium'>
                        <li class="hover:bg-blue-100 rounded px-5 py-2 cursor-pointer">Settings</li>
                        <li class="hover:bg-blue-100  rounded px-5 py-2 cursor-pointer">Logout</li>
                    </ul>
                </div>
            </div>
            <div class="bg-gray-100 h-screen w-screen">

                <div class="flex justify-between items-center border-b border-gray-300 p-5">
                    <h2 class="text-2xl font-bold">Dashboard</h2>
                    <button onClick={handleClick} class="bg-blue-500 rounded text-white font-semibold h-10 w-40 hover:cursor-pointer">
                        Add New Hotel
                    </button>
                </div>
                <div className='h-50 w-60 mt-20 ml-30'>
                    <HotelList />
                </div>
            </div>


        </div>
    )
}
export default Dashboard;