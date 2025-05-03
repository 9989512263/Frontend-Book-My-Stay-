import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Resetsuccess() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="relative flex h-screen w-full">
                <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
                    alt="Placeholder"
                    className="max-w-full h-auto object-cover w-full bg-gradient-to-t"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                <div className="absolute top-10 left-4 flex  bg-opacity-40">
                    <h2 className="text-white text-3xl font-extrabold">BookMyStay</h2>
                </div>
                <div className='absolute bottom-20 left-6 flex flex-col gap-3 bg-opacity-40'>
                    <h2 className='text-gray-300 text-2xl font-bold'>Your journey begins here</h2>
                    <p className='text-gray-400 text-sm font-semibold'>Find and book your perfect accommodation anywhere in the world.</p>
                </div>
            </div>
            <div className="bg-gray-200 h-screen w-full flex items-center justify-centeritems-center justify-center">


                <div class="bg-white h-100 w-120 rounded-md items-center justify-center  flex flex-col">
                    <div>
                        <FontAwesomeIcon icon={faCircleCheck} size='5x' style={{ color: "#74C0FC" }} />
                    </div>
                    <h1 className="text-4xl font-bold">Success!</h1>
                    <p className="text-sm text-gray-600 mt-1">Your password has been reset successfully</p>
                    <div className="h-10 w-100 flex items-center justify-center mt-10">
                        <p className="text-base text-gray-800 text-center">
                            You can now use your new password to sign in to your account.
                        </p>
                    </div>
                    <button onClick={() => navigate('/signin')} className="w-40 mt-10 h-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm font-semibold">Return to Sign In</button>
                </div>
            </div>
        </div>
    );
}

export default Resetsuccess;
