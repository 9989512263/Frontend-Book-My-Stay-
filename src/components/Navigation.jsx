import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import "../index.css";

const NavBar = ({ homeRef, aboutRef, contactRef, setisAuthenticated }) => {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollTo = (ref) => {
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false); 
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
        <div className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b">
            <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-10">
                <h1
                    onClick={() => scrollTo(homeRef)}
                    className="font-bold cursor-pointer text-xl text-blue-700"
                >
                    BookMyStay
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    <button onClick={() => scrollTo(homeRef)} className="hover:text-blue-500">Home</button>
                    <button onClick={() => scrollTo(contactRef)} className="hover:text-blue-500">Contact</button>
                    <button onClick={() => scrollTo(aboutRef)} className="hover:text-blue-500">About</button>
                    <form onSubmit={handleSearch} className="flex items-center gap-2">
                        <input
                            className="p-2 w-48 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            type="text"
                            placeholder="Search hotels"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                    >
                        Logout
                    </button>
                </div>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-start bg-white px-6 py-4 gap-4 shadow">
                    <button onClick={() => scrollTo(homeRef)} className="hover:text-blue-500 w-full text-left">Home</button>
                    <button onClick={() => scrollTo(contactRef)} className="hover:text-blue-500 w-full text-left">Contact</button>
                    <button onClick={() => scrollTo(aboutRef)} className="hover:text-blue-500 w-full text-left">About</button>
                    <form onSubmit={handleSearch} className="flex flex-col gap-2 w-full">
                        <input
                            className="p-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                            type="text"
                            placeholder="Search hotels"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button
                            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md w-full"
                    >
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default NavBar;
