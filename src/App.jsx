import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './pages/signup.jsx';
import Home from './pages/home.jsx';
import Signin from './pages/signin.jsx';
import ForgotPassword from './pages/forgotPassword.jsx';
import Verifycode from './pages/verifycode.jsx';
import Resetpassword from './pages/resetpassword.jsx';
import Resetsuccess from './pages/resetsuccess.jsx';
import HotelPage from './pages/HotelPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import { ToastContainer } from 'react-toastify';
import Addnewhotel from './admincomponents/Addnewhotel.jsx';
import SubSuccess from './pages/SubSuccess.jsx';
import ProtectedRoute from "./pages/ProtectedRoute";
import BookingSuccess from './pages/BookingSuccess.jsx';
import StripeCheckout from "./components/Payment.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Appcontent />
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  );
}

function Appcontent() {
  
  const [isAuthenticated, setisAuthenticated] = useState(() => {
    return localStorage.getItem("auth") === "true" || false; 
  });

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated); 
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}> {/* Pass isAuthenticated to ProtectedRoute */}
              <Home setisAuthenticated={setisAuthenticated} />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin setisAuthenticated={setisAuthenticated} />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifycode" element={<Verifycode />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/resetsuccess" element={<Resetsuccess />} />
        <Route path="/hotel/:id" element={<HotelPage setisAuthenticated={setisAuthenticated} />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path="/addnewhotel" element={<Addnewhotel />} />
        <Route path="/subsuccess" element={<SubSuccess />} />
        <Route path="/bookingsuccess" element={<BookingSuccess />} />
        <Route path="/payment" element={<StripeCheckout/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
