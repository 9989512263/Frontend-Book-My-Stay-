function HowItWorks() {
    return (
        <>
            <div>
                <div className="flex flex-col  mt-30 justify-center items-center ">
                    <h2 className="text-4xl font-bold " >How It Works</h2>
                    <p className="text-medium text-gray-600 mt-2">Book your stay in three simple steps</p>
                </div>
                <div class="flex justify-between w-full mt-20">
                    <div class="text-center">
                        <div class="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold text-lg mb-4 ml-55">1</div>
                        <h2 class="text-2xl font-medium">Search</h2>
                        <p className="text-medium text-gray-600 mt-1">Enter your destination, dates, and preferences to find the perfect accommodation.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold text-lg mb-4 ml-55">2</div>
                        <h2 class="text-2xl font-medium">Book</h2>
                        <p className="text-medium text-gray-600 mt-1">Choose your ideal property and securely book your stay with instant confirmation.</p>
                    </div>
                    <div class="text-center">
                        <div class="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold text-lg mb-4 ml-55">3</div>
                        <h2 class="text-2xl font-medium">Enjoy</h2>
                        <p className="text-medium text-gray-600 mt-1">Arrive at your destination and enjoy a hassle-free stay with 24/7 customer support.</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-col mt-25 justify-center items-center">
                    <h2 className="text-4xl font-bold " >What Our Guests Say</h2>
                    <p className="text-medium text-gray-600 mt-2">Read testimonials from our satisfied customers</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20 ">
                    <div class="bg-white w-114 h-73 p-4 rounded-lg border-1 border-blue-200 flex flex-col items-center justify-between">
                        <div class="w-16 h-16 rounded-full overflow-hidden mb-4">
                            <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Profile" class="w-full h-full object-cover"
                            />
                        </div>
                        <p class=" text-gray-600 text-lg">Sarah Johnson</p>
                        <p class=" text-gray-600 text-sm">August 2023</p>
                        <div class="flex items-center ">
                            <span class="text-yellow-400 text-lg">★★★★☆</span>
                        </div>
                        <p class=" text-gray-600 text-medium  mt-1 text-center">BookMyStay made finding our vacation rental so easy! The search filters helped us narrow down exactly what we wanted, and the booking process was smooth. The property was exactly as described.</p>
                    </div>
 
                    <div class="bg-white w-114 h-73 p-4 rounded-lg border-1 border-blue-200 flex flex-col items-center justify-between">
                        <div class="w-16 h-16 rounded-full overflow-hidden mb-4">
                            <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Profile" class="w-full h-full object-cover" />
                        </div>
                        <p class=" text-gray-600 text-lg">Michael Chen</p>
                        <p class=" text-gray-600 text-sm">July 2023</p>
                        <div class="flex items-center ">
                            <span class="text-yellow-400 text-lg">★★★★☆</span>
                        </div>
                        <p class=" text-gray-600 text-medium mt-1 text-center">I've used several booking sites before, but BookMyStay has been the best experience so far. The customer service was excellent when I needed to modify my reservation. Will definitely use again!</p>
                    </div>
 
                    <div class="bg-white w-114 h-73 p-4 rounded-lg  border-1 border-blue-200 flex flex-col items-center justify-between">
                        <div class="w-16 h-16 rounded-full overflow-hidden mb-4">
                            <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Profile" class="w-full h-full object-cover" />
                        </div>
                        <p class=" text-gray-600 text-lg">Emily Rodriguez</p>
                        <p class="text-gray-600 sm">September 2023</p>
                        <div class="flex items-center ">
                            <span class="text-yellow-400 text-lg">★★★★★</span>
                        </div>
                        <p class="text-gray-600 text-medium mt-1 text-center">Great selection of properties at competitive prices. I appreciate the detailed listings and verified reviews. The app is also very user-friendly and makes planning trips much easier.</p>
                    </div>
                </div>
            </div>
 
 
        </>
    )
}
 
export default HowItWorks;