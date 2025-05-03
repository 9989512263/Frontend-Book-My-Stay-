import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!terms) {
      toast.error("You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        name,
        email,
        password,
      });

      if (response.data.message) {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate('/signin');
        }, 2000)

      } else {
        toast.error(response.data.message || "Error creating account.");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
      console.error(error);
    }
  };

  return (
    <div className="justify-between flex">
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
      <div className="bg-white h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-sm text-gray-600 mt-1">Sign up for your BookMyStay account</p>
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <p className="mt-5 text-sm font-semibold">Full name</p>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-110 h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm font-semibold">Email</p>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-110 h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm font-semibold">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-110 h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-sm text-gray-500">
            Password must be at least 8 characters long
          </p>
          <p className="text-sm font-semibold">Confirm password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-110 h-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
              className="mr-2 w-4 h-4"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-110 h-10 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm font-semibold"
          >
            Sign Up
          </button>
          <p className="text-xs text-gray-700 mt-1 ml-40">Or continue with</p>
        </form>
        <div className="flex justify-between space-x-4 mt-3">
          <button onClick={() => toast.info('Google login functionality will be implemented soon')} className="ml-12 w-34 h-10 border border-gray-300 rounded-md text-sm font-semibold">
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#b12020" }} /> Google
          </button>
          <button onClick={() => toast.info('Facebook login functionality will be implemented soon')} className="w-34 h-10 border border-gray-300 rounded-md text-sm font-semibold">
            <FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#1877F2" }} /> Facebook
          </button>
          <button onClick={() => toast.info('Apple login functionality will be implemented soon')} className="w-34 h-10 border border-gray-300 rounded-md text-sm font-semibold">
            <FontAwesomeIcon icon={faApple} style={{ color: "#0c7946" }} /> Apple
          </button>
        </div>
        <p className="text-sm mt-3">
          Already have an account?{' '}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate('/signin')}>
            Sign In
          </span>
        </p>
        <ToastContainer toastClassName="text-sm font-semibold text-black" position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
}

export default SignUp;
