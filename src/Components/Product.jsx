import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useProduct } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { Bigbasket } from '../EcommerseImages/EcommerseImages'

function Product() {
  const { selectedProduct, setSelectedProduct } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedProduct) {
      const storedProduct = localStorage.getItem('selectedProduct');
      if (storedProduct) {
        setSelectedProduct(JSON.parse(storedProduct));
      } else {
        navigate('/');
      }
    } else {
      localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
    }
  }, [selectedProduct, setSelectedProduct, navigate]);

  const coupons = [
    {
      id: 1,
      title: "Up To $1050 Extra ByBit Referral",
      code: "27347",
      uses: 9209,
      image: Bigbasket
    },
    {
      id: 2,
      title: "Adopt bbSOL for chance at $1.2M Prizepool",
      description: "Users must register for the event via the Adopt Now button on the event page to be eligible for rewards",
      uses: 9209,
      image: Bigbasket
    },
    {
      id: 3,
      title: "Up To 100% Fee Rebates On Copy Trading",
      uses: 701,
      image: Bigbasket
    },
  ];

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, diam a efficitur pellentesque.",
    },
  ];

  const [faqOpen, setFaqOpen] = useState(Array(faqs.length).fill(false));

  const toggleFaq = (index) => {
    setFaqOpen((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow w-full sm:mt-[88px] py-10 ">
        <div className="min-h-5/6 px-4 py-4 pb-8 sm:pb-20 sm:px-10 bg-gray-100">
          <nav className="text-gray-500 text-sm mb-8 ps-10">
            Home &nbsp; | &nbsp; Blockchain & Web3 &nbsp; | &nbsp;
            <span className="text-pink-500">ByBit</span>
          </nav>

          <div className="rounded-lg ps-10">
            <div className="flex flex-col sm:flex-row items-center  gap-4">
              <img
                src={Bigbasket}
                alt="ByBit Logo"
                className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
              />
              <div className="flex flex-col  sm:items-start">
                <h2 className="text-red-500 font-bold text-lg">Jan 2025</h2>
                <h1 className="text-2xl font-bold mt-1">
                  $1,025 USDT Bybit Referral Code and Promo Code: 27347
                </h1>
                <div className="flex flex-col sm:ml-4">
                  <p className="text-gray-600 text-sm">
                    ByBit total of active coupons today: <strong>4</strong>. The date of the last update Dec 30, 2024.
                  </p>
                  <p className="text-gray-600 text-sm">The best active coupon: 1050%.</p>
                  <p className="text-gray-600 text-sm">You can use it to get the biggest discount & deal & free shipping on ByBit,</p>
                  <p className="text-gray-600 text-sm">100% verification of each Coupon & Deal.</p>
                </div>
                <div className="flex flex-wrap justify-start gap-2 mt-6 text-gray-700">
                  <p className="flex items-center gap-1 font-medium">
                    <span className="text-pink-500">⚡</span> <strong>04</strong> Offers Available
                  </p>
                  <p className="flex items-center gap-1 font-medium">
                    <span className="text-pink-500">🎟️</span> <strong>03</strong> Coupon Code(s)
                  </p>
                  <p className="flex items-center gap-1 font-medium">
                    <span className="text-pink-500">💰</span> <strong>38</strong> Sales
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-between mt-4 ">
                
                <button className="bg-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-pink-600 transition">
                  Go to ByBit
                </button>
              </div>
            </div>

           
          </div>
        </div>

        <div className="flex mt-6 gap-3 sm:gap-4 w-full flex-col sm:flex-row items-center  sm:ps-10 h-12">
            <div className='flex items-center gap-3'>
            {["Total Offers 4", "Coupons Code 3", "Promotion 1"].map((text, i) => (
                <div key={i} className="border-[1px] text-xs  sm:text-sm text-gray-500 border-gray-200 px-4 py-2 rounded-md font-normal whitespace-nowrap">
                  {text.split(" ").slice(0, -1).join(" ")} <strong className="text-black">{text.split(" ").pop()}</strong>
                </div>
              ))}
            </div>
             <div className='flex items-center gap-4'>
             <div className="flex sm:flex-row flex-col  gap-4 text-gray-700 ">
                {[{ label: "Average saving:", value: "$10.80" }, { label: "Coupons available:", value: "02" }, { label: "Best coupon:", value: "$50" }, { label: "Last updated:", value: "Dec 30, 2024" }]
                  .map(({ label, value }, i) => (
                    <p key={i} className="text-xs sm:text-base whitespace-nowrap"><strong>{label}</strong> <span>{value}</span></p>
                  ))}
              </div>
             </div>
            </div>

            <div className="mt-28 flex flex-col sm:flex-row items-center justify-start gap-3 ms-3">
              <h3 className="text-lg font-bold mr-6">ByBit Discount Tips</h3>
              <div className="flex justify-start sm:items-center mr-8 w-full sm:w-8/12  h-16 rounded-md sm:justify-between sm:gap-10 mt-2 bg-pink-100">
                {[1, 2, 3].map((step, index) => (
                  <div key={index} className="bg-pink-100 px-4 py-2 rounded-md font-medium flex items-center gap-2">
                    
                    <span className="bg-pink-500 text-white w-6 h-6 flex items-center justify-center rounded-full">
                      {step}
                    </span>{" "}Step
                  </div>
                
                ))}
                 
              </div>
            </div>

        <div className='w-full bg-gray-300 h-[1px] mt-4 sm:mt-8' />

        <div className="p-4 w-full gap-5 flex flex-col sm:flex-row">
          <div className="flex flex-col gap-4 sm:w-1/3">
            <div className="flex gap-5">
              <button className="border-[1px] text-xs text-pink-500 border-pink-300 px-4 py-3 rounded-md font-bold">Related Store</button>
              <button className="border-[1px] text-xs text-pink-500 border-pink-300 px-4 py-3 rounded-md font-bold">Top Stores</button>
            </div>
            <div className="bg-zinc-900 text-white p-6 rounded-lg mb-6 max-w-72 max-h-64 flex flex-col items-center justify-start">
              <h2 className="text-lg font-bold">Submit a Coupon</h2>
              <p className="">Have a great ByBit code we are missing? Share it with your fellow Bargain Shoppers</p>
              <button className="bg-white text-black px-10 font-semibold py-2 mt-6 rounded">Submit Coupon</button>
            </div>
            <div className="flex flex-col border-[1px] px-3 py-2 max-w-72">
              {['ByBit Information', 'Super6Bybit: Celebrating 6 Years With Bybit', 'Best ByBit Referral Code', 'How to Redeem a Bybit Referral Code', 'How ShipTheDeal Finds the Best Bybit Referral Codes', 'Here Are Some Useful Resources to Find Bybit Referral Codes'].map((text, index) => (
                <div key={index}>
                  <div className="flex justify-between gap-4 items-center py-2">
                    <p className="text-sm font-medium text-gray-900">{text}</p>
                    <i className="fa-solid fa-chevron-down text-gray-900 text-xs"></i>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>

          <div className="sm:w-5/6">
            <div className="space-y-4">
              {coupons.map((coupon) => (
                <div key={coupon.id} className="border p-4 py-8 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between relative">
                  <div className='absolute flex gap-1 top-2 left-0'>
                    <p className='bg-orange-500 text-[8px] text-white px-2'>New</p>
                    <p className='bg-green-400 text-[8px] text-white px-2'>Verified</p>
                  </div>
                  <div className='flex gap-5'>
                    <div >
                      <img className='rounded-md w-20'  src={coupon.image} alt="" />
                    </div>
                   <div>
                   <h3 className="font-bold">{coupon.title}</h3>
                    {coupon.description && (
                      <p className="text-xs sm:text-sm font-semibold text-pink-400 mt-1 ">{coupon.description}</p>
                    )}
                    {coupon.code && <p className="text-sm font-semibold text-pink-400 mt-1 ">Use Code: {coupon.code}</p>}
                   </div>
                  
                  </div>
                  <div className='flex flex-col items-center sm:items-end'>
                  <button className="bg-pink-500 text-white rounded-lg px-6 py-2 mt-4 sm:divmt-0 hover:bg-pink-600">Show Code</button>
                  <p className="text-xs whitespace-nowrap text-gray-500 mt-2">{coupon.uses} uses left | ByBit Coupons</p>
                  </div>
                  
                  
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-5">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between gap-4 py-4 cursor-pointer" onClick={() => toggleFaq(index)}>
                    <h4 className="text-lg font-semibold">{faq.question}</h4>
                    <i className={`fa-solid ${faqOpen[index] ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                  </div>
                  {faqOpen[index] && <p className="text-sm text-gray-600">{faq.answer}</p>}
                  <hr className="my-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
