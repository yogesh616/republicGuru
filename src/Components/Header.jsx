
import React, { useState, useEffect } from "react";
import logo from '../assets/logo/logo.jpeg'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null); // Tracks which category dropdown is open
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // Tracks timeout for closing dropdown
  const [storeDropdownVisible, setStoreDropdownVisible] = useState(false); // App dropdown state
  const [mobileNavVisible, setMobileNavVisible] = useState(false); // Mobile side drawer
  const navigate = useNavigate();
  // Categories and Subcategories Data
  const categories = [
    {
      label: "Education",
      icon: '<i class="fa-solid fa-school"></i>',
      subcategories: [
        { name: "Edureka", url: "#" },
        { name: "Coursera", url: "#" },
        { name: "Udemy", url: "#" },
        { name: "Skill Share", url: "#" },
      ],
    },
    {
      label: "Food",
      icon: '<i class="fa-solid fa-bowl-food"></i>',
      subcategories: [
        { name: "Swiggy", url: "#" },
        { name: "Zomato", url: "#" },
        { name: "Pizza Hut", url: "#" },
        { name: "KFC", url: "#" },
      ],
    },
    {
      label: "E-Commerce",
      icon: '<i class="fa-solid fa-cart-shopping"></i>',
      subcategories: [
        { name: "Amazon", url: "#" },
        { name: "Flipkart", url: "#" },
        { name: "Nykaa", url: "#" },
        { name: "AJIO", url: "#" },
      ],
    },
    {
      label: "Health & Beauty",
      icon: '<i class="fa-solid fa-user-doctor"></i>',
      subcategories: [
        { name: "The Body Shop", url: "#" },
        { name: "Mama Earth", url: "#" },
        { name: "The Man Company", url: "#" },
        { name: "Wow Skin Care", url: "#" },
      ],
    },
    {
      label: "Finance/Crypto",
      icon: '<i class="fa-solid fa-coins"></i>',
      subcategories: [
        { name: "Binance", url: "#" },
        { name: "KuCoin", url: "#" },
        { name: "Pocket Option", url: "#" },
        { name: "Phemex", url: "#" },
      ],
    },
    {
      label: "Fashion",
      icon: '<i class="fa-solid fa-shirt"></i>',
      subcategories: [
        { name: "Shoppers Stop", url: "#" },
        { name: "WildCraft", url: "#" },
        { name: "The Souled Store", url: "#" },
        { name: "XYXX", url: "#" },
      ],
    },
    {
      label: "Marketing",
      icon: '<i class="fa-solid fa-chart-simple"></i>',
      subcategories: [
        { name: "Get Response", url: "#" },
        { name: "Vid IQ", url: "#" },
      ],
    },
  ];

  // Function to show the dropdown when hovering
  const handleMouseEnter = (index) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout); // Clear existing timeout
    setDropdownVisible(index); // Show dropdown for the hovered category
  };

  // Function to hide the dropdown with a delay of 3 seconds
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setDropdownVisible(null), 1000); // Set delay of 3 seconds
    setDropdownTimeout(timeout); // Save timeout so we can clear it if needed
  };

  // Cleanup timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);

  return (
    <div className="w-full fixed top-0 z-50 shadow-md">
      {/* Navbar */}
      <header className="text-white  p-3 bg-[#19141a] bg-white flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate('/')}>
          {logo ? (
             <img 
               className="max-w-full h-auto rounded-lg" 
               src={logo} 
               alt="Logo" 
               style={{ width: '145px', maxWidth: '100%' }} 
            />
          ) : (
             <span>Republic Guru</span>
          )}
       </div>


        {/* Hamburger Menu for Mobile */}
        <button
          className=" text-black text-2xl sm:hidden"
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Search Bar */}
        <div className="hidden sm:block w-1/3">
          <div className="relative">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search here"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        {/* App Button */}
        <div className="hidden md:block">
          <div className="relative store-dropdown">
            <button
              className="flex items-center gap-2 bg-white  text-black px-4 py-1 rounded-lg  bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white"
              onClick={() => setStoreDropdownVisible(!storeDropdownVisible)}
            >
              <img
                width="20"
                height="20"
                src="/images/icon_app_download.svg"
                alt="store"
              />
              <span>App</span>
            </button>
            {storeDropdownVisible && (
              <div className="absolute bg-white text-black mt-2 right-0 shadow-lg rounded-md p-2 w-44 ">
                <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md ">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/fluency/48/google-play-store-new.png"
                    alt="google-play-store"
                  />
                  Google Play
                </button>
                <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                  <img
                    width="20"
                    height="20"
                    src="https://img.icons8.com/ios-filled/50/mac-os.png"
                    alt="app-store"
                  />
                  App Store
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Categories & Navigation */}
      <div className="hidden bg-[#e5e7eb] bg-[#ffd1dc] md:flex  text-balck p-4 justify-center">
        <div className="flex justify-around items-center gap-10 w-[70vw] ">
          {categories.map((category, index) => (
            <div key={index} className="relative dropdown">
              <button
                className="relative text-gray-700  cursor-pointer text-lg hover:text-brown-300 transition"
                onMouseEnter={() => handleMouseEnter(index)} // Show dropdown
                onMouseLeave={handleMouseLeave}
              >
                {category.label}
              </button>
              {dropdownVisible === index && (
                <div className="absolute bg-white text-black mt-2 shadow-lg rounded-md w-48 p-2">
                  {category.subcategories.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href={sub.url}
                      className="block p-2 hover:bg-[#ffd1dc] rounded-md "
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#19141a] text-white w-[75%] transform ${
          mobileNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            className="text-white text-2xl mb-4"
            onClick={() => setMobileNavVisible(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Mobile Navigation Links */}
          <nav>
            {/* Categories with Subcategories */}
            {categories.map((category, index) => (
              <div key={index} className="mb-4">
                <button
                  className="block w-full text-left hover:underline font-bold"
                  onClick={() =>
                    setDropdownVisible(dropdownVisible === index ? null : index)
                  }
                >
                  {category.label}
                </button>
                {dropdownVisible === index && (
                  <div className="ml-4 space-y-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <a
                        key={subIndex}
                        href={sub.url}
                        className="block hover:underline"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* App Button for Mobile */}
            <div className="mt-6">
              <div className="relative store-dropdown">
                <button
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg w-full  bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white"
                  onClick={() => setStoreDropdownVisible(!storeDropdownVisible)}
                >
                  <img
                    width="20"
                    height="20"
                    src="/images/icon_app_download.svg"
                    alt="store"
                  />
                  <span>Download App</span>
                </button>

                {/* App Dropdown */}
                {storeDropdownVisible && (
                  <div className="bg-white text-black mt-2 shadow-lg rounded-md p-2 w-full">
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/fluency/48/google-play-store-new.png"
                        alt="google-play-store"
                      />
                      Google Play
                    </button>
                    <button className="w-full flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
                      <img
                        width="20"
                        height="20"
                        src="https://img.icons8.com/ios-filled/50/mac-os.png"
                        alt="app-store"
                      />
                      App Store
                    </button>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop for Mobile Drawer */}
      {mobileNavVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileNavVisible(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;
