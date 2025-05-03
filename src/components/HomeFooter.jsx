import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
function HomeFooter(){
    return(
        <>
         <div class="bg-black h-90">
                <div class="justify-between flex ml-30 ">
                    <div class="bg-black w-80 ">
                        <h2 class="text-1xl font-bold text-white mt-10">BookMyStay</h2>
                        <p class="text-sm text-gray-300  mt-3">Your trusted platform for finding the perfect accommodations worldwide. We make booking simple, secure, and satisfying.</p>
                        <div className="flex gap-x-4 mt-4">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#d1d5db' }} />
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#d1d5db' }} />
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#d1d5db' }} />
                            <FontAwesomeIcon icon={faYoutube} style={{ color: '#d1d5db' }} />
                        </div>
                    </div>
                    <div class="bg-black w-50 h-60 flex-col">
                        <h2 class="text-1xl font-bold text-white mt-10">Quick Links</h2>
                        <ul class="text-sm text-gray-300 mt-3">
                            <li class="mt-2">Home</li>
                            <li class="mt-2">Properties</li>
                            <li class="mt-2">Special Deals</li>
                            <li class="mt-2">About Us</li>
                            <li class="mt-2">Contact</li>
                        </ul>
                    </div>
                    <div class="bg-black w-50 h-60">
                        <h2 class="text-1xl font-bold text-white mt-10">Support</h2>
                        <ul class="text-sm text-gray-300 mt-3">
                            <li class="mt-2">Help Center</li>
                            <li class="mt-2">FAQs</li>
                            <li class="mt-2">Cancellation Policy</li>
                            <li class="mt-2">Terms & Conditions</li>
                            <li class="mt-2">Privacy Policy</li>
                        </ul>
 
                    </div>
                    <div class="bg-black w-80 h-50 mr-30">
                        <h2 class="text-1xl font-bold text-white mt-10">Contact Us</h2>
                        <ul class="text-sm text-gray-300 mt-3">
                            <li class="mt-2"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#74C0FC" }}/>1234 Booking Street, Suite 500
                                San Francisco, CA 94103</li>
                            <li class="mt-2"><FontAwesomeIcon icon={faPhone} style={{ color: "#74C0FC" }} />  +1 (555) 123-4567</li>
                            <li class="mt-2"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#74C0FC" }} /> support@bookmystay.com</li>
                        </ul>
 
                    </div>
                </div>
                <div class="text-white text-sm justify-items-center mt-10 ">
                    <p>© 2025 BookMyStay. All rights reserved.</p>
                </div>
            </div>
 
        </>
    )
}
 
export default HomeFooter;
 