
import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logo/logo.jpeg'
import { useNavigate } from "react-router-dom";
import { Zomato, Swiggy, PizzaHutt, Kfc, EatSure, Dominos, BehrouzBiryani ,ShoppersStop } from '../FoodImages/FoodImages'
import {
  AmazonFresh,
  AmazonSeoAmazonGiftCard,
  AmazonShoppingGiftVoucher,
  AmazonShoppingVoucher,
  Bigbasket,
  FlipkartGiftCard,
  Myntra_Gift_Card,
  Nykaa,
  TataCliq,
} from "../EcommerseImages/EcommerseImages.js";
import { useProduct } from '../Context/ProductContext'

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null); // Tracks which category dropdown is open
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // Tracks timeout for closing dropdown
  const [storeDropdownVisible, setStoreDropdownVisible] = useState(false); // App dropdown state
  const [mobileNavVisible, setMobileNavVisible] = useState(false); // Mobile side drawer
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();

  // Product Searching Function
  const [ searchQuery, setSearchQuery ] = useState('');
   
  const [searchedData, setSearchedData] = useState([]);
   function searchProduct(query) {
      if (!query.trim()) {
        setSearchedData([]); // Clear search results if query is empty
        return;
      }
      const results = categories.flatMap((category) =>
        category.subcategories.filter((sub) =>
          sub.name.toLowerCase().includes(query.toLowerCase())
        )
      );
      setSearchedData(results);
    }
  
    // Debounce search (runs after 500ms delay)
    useEffect(() => {
      const timer = setTimeout(() => {
        searchProduct(searchQuery);
      }, 500);
      return () => clearTimeout(timer);
    }, [searchQuery]);
  


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
        { name: "SimpliLearn", url: "#" },
        { name: "growthschool.io", url: "#"}
      ],
    },
    {
      label: "Food",
      icon: '<i class="fa-solid fa-bowl-food"></i>',
      subcategories: [
        {  name: "Swiggy",
            offer: "Flat 8% off",
            code: "NYK5",
            image: Swiggy,
             url: "#"
        },
        {   name: "Zomato",
            offer: "Flat 5% off",
            code: "NYK5",
            image: Zomato, 
            url: "#" 
        },
        {   name: "Pizza Hut",
            offer: "Flat 6% off",
            code: "NYK5",
            image: PizzaHutt, 
            url: "#" 
        },
        {   name: "KFC",
            offer: "Flat 2% off",
            code: "NYK5",
            image: Kfc, 
            url: "#" 
        },
        {
          name: "Burger King",
            offer: "Flat 7% off",
            code: "NYK5",
            
            url: "#"
        },
        {
            name: "Dominos",
            offer: "Flat 2% off",
            code: "NYK5",
            image: Dominos,
            url: "#"
        },
        {
            name: "Eat Sure	",
            offer: "Flat 5% off",
            code: "NYK5",
            image: EatSure,
            url: "#"
        },
        {
            name: "Behrouz Biryani",
            offer: "Flat 5% off",
            code: "NYK5",
            image: BehrouzBiryani,
            url: "#"
        }
      ],
    },
    {
      label: "E-Commerce",
      icon: '<i class="fa-solid fa-cart-shopping"></i>',
      subcategories: [
        {     name: "Amazon Shopping",
              offer: "Flat 5% off",
              code: " ",
              description: "5000 Discount on Aircondition",
              referral_url:
                "https://www.amazon.in/s?k=AC&crid=1NG3OC12U50PE&sprefix=ac%2Caps%2C254&linkCode=ll2&tag=rajvansh017-21&linkId=a06472739130ec28138e299a878bdaff&language=en_IN&ref_=as_li_ss_tl",
              image: AmazonShoppingVoucher,
               url: "#" },
        {     name: "Flipkart",
              offer: "Flat 5% off",
              code: " ",
              description: "",
              referral_url: "",
              image: FlipkartGiftCard,
               url: "#" },
        {      name: "Nykaa",
              offer: "Flat 5% off",
              code: " ",
              description: "Get Upto 40% Off on Bestsellers",
              referral_url: "https://bitli.in/Az3SKj9",
              image: Nykaa,
              url: "#" },
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
        { name: "Bombay Shaving Company", url: "#" },
        { name: "Wow Skin Care", url: "#" },
      ],
    },
    {
      label: "Finance/Crypto",
      icon: '<i class="fa-solid fa-coins"></i>',
      subcategories: [
        { name: "Binance", url: "#" },
        { name: "KuCoin", url: "#" },
        { name: "MEXC", url: "#" },
        { name: "BingX", url: "#" },
        { name: "Bitget", url: "#" },
        { name: "Weex", url: "#" },
        { name: "Bitvavo", url: "#" },
        { name: "QX Broker", url: "#" },
        { name: "Alpha Capital", url: "#" },
        { name: "Maven Trading", url: "#" },
        { name: "Funder Pro", url: "#" },
        { name: "Safe Pal", url: "#" },
        { name: "Pocket Option", url: "#" },
        { name: "E8", url: "#" },
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
        { name: "SareesKart", url: "#" },
        { name: "Ola", url: "#" },
        { name: "Uber", url: "#" },
      
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
    const timeout = setTimeout(() => setDropdownVisible(null), 1200); // Set delay of 3 seconds
    setDropdownTimeout(timeout); // Save timeout so we can clear it if needed
  };

  // Cleanup timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };
  }, [dropdownTimeout]);




  // offcanvas closing]g

  const closeBtn = useRef(null);
  const closeMenu = () => {
    closeBtn.current.click();
  };

  return (
    <div className="w-full fixed top-0 z-50 shadow-md">
      {/* Navbar */}
      <header className="relative text-white px-3  py-[1px] bg-[#19141a] bg-white flex items-center justify-between">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 "
              placeholder="Search here"
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             
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
              className="hidden flex items-center gap-2 bg-white  text-black px-4 py-1 rounded-lg  bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white"
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
                <div className="absolute bg-white text-black mt-2 shadow-lg rounded-md w-48 p-2 max-h-80 overflow-y-auto hide-scrollbar">
                  {category.subcategories.map((product, subIndex) => (
                    <a
                      key={subIndex}
                      
                      className="block p-2 hover:bg-[#ffd1dc] rounded-md cursor-pointer"

                      onClick={() => {
                        setSelectedProduct(product)
                        localStorage.setItem('selectedProduct', JSON.stringify(product))
                        navigate('/product')
                      }}
                    >
                      {product.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

       {/* Search Results */}
       <div className="flex justify-around sm:ps-36 w-full items-center">
        <ul className="bg-gray-100 rounded-md min-w-[334px] sm:min-w-[450px] max-h-60 overflow-y-auto hide-scrollbar">
          {searchedData.length > 0 &&
            searchedData.map((product, index) => (
              <li
                key={index}
                className="py-2 px-4 hover:bg-gray-300 border-b cursor-pointer"
                onClick={() => {
                    setSelectedProduct(product)
                    localStorage.setItem('selectedProduct', JSON.stringify(product))
                    navigate('/product')
                    setSearchedData([])
                  }}
              >
                <h3>{product.name}</h3>
              </li>
            ))}
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#19141a] text-white w-[75%] transform ${
          mobileNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button ref={closeBtn}
            className="text-white text-2xl mb-4"
            onClick={() => setMobileNavVisible(false)}
          >
            <i className="fa-solid fa-times"></i>
          </button>

          {/* Mobile Navigation Links */}
          <nav>
          <div className="hidden w-full">
          <div className="relative">
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5 "
              placeholder="Search here"
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
             
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <i className="text-gray-400 fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
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
                        onClick={() => {
                          setSelectedProduct(sub)
                          localStorage.setItem('selectedProduct', JSON.stringify(sub))
                          navigate('/product')
                          closeMenu()
                          setDropdownVisible(false)
                        }}
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
              <div className="relative store-dropdown hidden ">
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
