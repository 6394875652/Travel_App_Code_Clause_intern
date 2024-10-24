
import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <React.Fragment>
      <div className="w-full h-screen relative">
        <img
          src="images/mesuem.jpg"
          alt="Museum"
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        {/* Left side */}
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">TripNest</h1>
        </div>

        {/* Right side */}
        <div>
          <ul className="hidden sm:flex space-x-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Popular</li>
            <li className="hover:text-white">Explore</li>
            <button
              onClick={openLoginModal}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
            >
              Login
            </button>
          </ul>


            
          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer text-white" />
            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full text-white"
              type="text"
              placeholder="Search"
            />
          </div>     


          {/* Hamburger Icon for mobile */}
          <div className="sm:hidden">
            <AiOutlineMenu
              size={30}
              className="cursor-pointer"
              onClick={toggleSidebar}
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 w-[75%] h-full bg-black z-50 p-5 transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <AiOutlineClose
            size={30}
            className="text-white cursor-pointer mb-5"
            onClick={toggleSidebar}
          />
          <ul className="flex flex-col space-y-5 font-bold cursor-pointer text-gray-300">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">Popular</li>
            {/* <li className="hover:text-white"><Link to="popular" spy={true} smooth={true} offset={50} duration={500}>Popular</Link></li>
             */}
            <li className="hover:text-white">Explore</li>
            <li onClick={openLoginModal} className="hover:text-white">
              Login
            </li>
          </ul>

          <div className="flex items-center space-x-2 mt-5">
            <AiOutlineSearch className="text-xl cursor-pointer text-white" />
            <input
              className="bg-inherit border-b outline-0 border-gray-300 p-1 w-full text-white"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Social Media Icons */}
          <div className="text-white flex space-x-5 mt-5">
            <AiFillFacebook size={"2rem"} className="cursor-pointer" />
            <AiFillInstagram size={"2rem"} className="cursor-pointer" />
            <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg w-[90%] sm:w-[400px]">
            <AiOutlineClose
              size={30}
              className="cursor-pointer ml-auto"
              onClick={closeModal}
            />
            <h2 className="text-2xl font-bold mb-5">Login</h2>
            <input
              type="text"
              placeholder="Email"
              className="w-full border p-2 mb-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-5"
            />
            <button className="bg-blue-500 w-full py-2 text-white rounded-md mb-5">
              Login
            </button>
            <p className="text-center">Don't have an account?</p>
            <button
              onClick={openSignupModal}
              className="bg-blue-500 w-full py-2 text-white rounded-md"
            >
              Signup
            </button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-10 rounded-lg w-[90%] sm:w-[400px]">
            <AiOutlineClose
              size={30}
              className="cursor-pointer ml-auto"
              onClick={closeModal}
            />
            <h2 className="text-2xl font-bold mb-5">Signup</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 mb-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border p-2 mb-5"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-5"
            />
            <button className="bg-blue-500 w-full py-2 text-white rounded-md">
              Signup
            </button>
          </div>
        </div>
      )}

      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold cursor-default">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold cursor-default">T R I P</h1>
          <p className="mx-10 text-gray-400 cursor-default">
            Discover new destinations with ease using TripNest. Plan, book,
            and explore your dream trips with personalized recommendations,
            real-time updates, and seamless navigation—your ultimate travel
            companion for every adventure.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-gray-300 py-2 px-5 rounded-md hover:bg-white hover:duration-300">
            Road Map
          </button>
          <button className="text-gray-300 border rounded-md py-2 px-5 hover:bg-white hover:text-black hover:duration-300">
            Book a Trip
          </button>
        </div>

        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"} className="cursor-pointer" />
          <AiFillInstagram size={"2rem"} className="cursor-pointer" />
          <AiFillTwitterSquare size={"2rem"} className="cursor-pointer" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
