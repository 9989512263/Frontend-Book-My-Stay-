import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const NavBar = ({ homeRef, aboutRef, contactRef, setisAuthenticated }) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");

    const scrollToHome = () => {
        if (homeRef?.current) {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToAbout = () => {
        if (aboutRef?.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToContact = () => {
        if (contactRef?.current) {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchInput);
    };

    const handleLogout = () => {
        localStorage.removeItem("auth");
        setisAuthenticated(false);
        navigate("/signin");
    };

    return (
        <div className="w-screen fixed top-0 left-0 z-50 flex border-b py-4 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-10">
                <h1
                    onClick={scrollToHome}
                    className="font-bold cursor-pointer text-xl text-blue-700"
                >
                    BookMyStay
                </h1>
                <div className="flex space-x-6">
                    <button
                        onClick={scrollToHome}
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Home
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        Contact
                    </button>
                    <button
                        onClick={scrollToAbout}
                        className="text-gray-700 hover:text-blue-500 transition"
                    >
                        About
                    </button>
                </div>
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                    <input
                        className="p-2 w-60 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                        type="text"
                        placeholder="Search for hotels"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-md"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition rounded-md"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default NavBar;
