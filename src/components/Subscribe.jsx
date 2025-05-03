import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Subscribe(){
    const navigate=useNavigate();
    const [email, setEmail] = useState('');
    const handlesubmit=async(e)=>{
        e.preventDefault();

        if(!email){
            toast.error("please enter the email");
        }
        try{
            const response=await axios.post("https://backend-book-my-stay.vercel.app/api/subsuccess",{
                email
            })
            if(response.data.message){
                toast.success("subscribed successfully");
                setTimeout(()=>{
                    navigate('/subsuccess')
                },1000)
            }else{
                toast.error('error in subscribing');
            }
        }catch(error){
            if(error.response&&error.response.data&&error.response.data.message){
                toast.error(error.response.data.message);
            }else{
              toast.error("An error occurred. Please try again.");
            }
        }
    }
    return(
        <>
         <div class="mt-20 bg-gradient-to-t from-[#146380] via-[#1f8eb7] to-[#0284c7] h-75 full-screen  justify-items-center">
                <div class="flex flex-col   justify-items-center ">
                    <h2 className="text-4xl font-bold text-white mt-20" >Subscribe to Our Newsletter</h2>
                    <p className="text-medium text-white mt-2">Get exclusive deals, travel tips, and the latest updates directly to your inbox.</p>
                </div>
                <div className="flex  gap-1 justify-items-center">
                    <label htmlFor="Your mail address" className="text-sm font-bold"></label>
                    <input
                         type="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         placeholder="Your email address"
                        className=" bg-white rounded-md h-10 w-180 mt-4"
                    />
                    <button class="bg-amber-500 text-white w-25 h-10 mt-4 rounded-md" onClick={handlesubmit}>
                        Subscribe
                    </button>
                </div>
                <div class="text-small text-white mt-2">
                    <p>We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
 
        </>
    )
}
 
export default Subscribe;