import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useProduct } from '../Context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { Bigbasket } from '../EcommerseImages/EcommerseImages'; // Ensure Bigbasket is imported correctly
import './product.css';

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
      image: Bigbasket,
    },
    {
      id: 2,
      title: "Adopt bbSOL for chance at $1.2M Prizepool",
      description:
        "Users must register for the event via the Adopt Now button on the event page to be eligible for rewards",
      uses: 9209,
      image: Bigbasket,
    },
    {
      id: 3,
      title: "Up To 100% Fee Rebates On Copy Trading",
      uses: 701,
      image: Bigbasket,
    },
  ];

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat, diam a efficitur pellentesque.",
    },
  ];

  const [faqOpen, setFaqOpen] = useState(Array(faqs.length).fill(false));

  const toggleFaq = (index) => {
    setFaqOpen((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  const productRef = useRef(null);
  useEffect(() => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow w-full sm:mt-[50px]">
        {/* Product Section */}
        <div
          className="min-h-[45vh] bg-cover bg-center"
          style={{
            backgroundImage: `url('https://shipthedeal.com/build/assets/body_bg.9cc5b477.jpg')`,
          }}
        >
          <div className="p-8">
            <nav className="text-gray-600 text-lg mb-4">
              <span>Home</span> &gt;{' '}
              <span>Clothing & Accessories</span> &gt;{' '}
              <span className="text-[#05205c]">Adidas</span>
            </nav>

            <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[188px_1fr_358px] gap-y-2 gap-x-4 lg:gap-x-10 lg:mt-8 lg:mb-7 mt-3 mb-2 sm:px-4 py-10">
              <div
                style={{ cursor: 'pointer' }}
                className="lg:row-[1/span_2] lg:w-[188px] lg:h-[188px] w-[90px] h-[90px] p-3 lg:p-6 flex items-center justify-center bg-white rounded-md overflow-hidden"
              >
                {selectedProduct?.image && (
                  <img
                    src={selectedProduct.image}
                    alt="Adidas Logo"
                    width="140"
                    height="140"
                    decoding="async"
                  />
                )}
              </div>
              <h1 className="text-[18px] md:text-[32px] leading-tight text-gradient flex items-center">
                Adidas Coupons And Discount Codes | Jan. 2025
              </h1>
              <div className="max-lg:col-[1/3] lg:row-[2/4] xl:max-w-[670px]">
                <div className="hidden lg:block text-justify text-base mb-2 opacity-70">
                  Adidas total of active coupons today: 1. The date of the last
                  update Jan 21, 2025; The best active coupon: -. You can use it
                  to get the biggest discount &amp; Deal &amp; free shipping on
                  Adidas, 100% verification of each Coupon &amp; Deal.
                </div>
                <div className="hidden lg:flex text-[15px] md:text-[18px] opacity-70 gap-x-5 flex-wrap">
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">1</span> Offers
                    Available
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">0</span> Coupon
                    Code(s)
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="text-[#05205C] font-bold">53</span> Sales
                  </div>
                </div>
              </div>
              <div className="sm:flex max-lg:col-[1/3] lg:row-[1/span_2] hidden items-center">
                <a
                  rel="nofollow"
                  href="https://wct-2.com/r?data=0xF7PJiHrxzTjclI42BWv3BJ1YCHrwAKfMrYuszY9gDZzKmL02BJ5cBHvgzLHgDWLgAZzKmLyKmLe0mLmhC0rhAIOJiSjxDIWIiPvZBuT2DIOJiKLwDIWIi5etnXudn3mZnX4In1atnZiJmYiJi6iczPn2zIWIi1qtn5etnXudn3mZnXiIoIqwAZjYE&amp;afflink=https%3A%2F%2Fadidas.njih.net%2FKnzLz"
                  className="btn btn-dark px-8 py-4 md:py-[18px] lg:w-full max-xs:w-full block text-lg"
                >
                  Go To Adidas
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Relative Section */}
        <div className="bg-[#F6F8FE] ">
          <div className="container max-lg:max-w-none ">
            <div className="grid sm:grid-cols-[306px_1fr] grid-rows-[auto_1fr] grid-flow-dense gap-y-6 gap-x-5 lg:gap-x-8 mt-4 lg:mt-8 mb-7 py-0 md:py-5 lg:py-11">
              {/* Right Section */}
              <div className="sm:col-[2/3] sm:row-[1/3]">
                <div className="flex gap-[22px] flex-wrap mt-4 lg:mt-0">
                  {/* Adidas Signup */}
                  <div className="border border-gray-200 rounded-2xl bg-white p-3 sm:px-3 sm:py-3 w-full flex flex-wrap gap-5 items-center position-relative min-h-150 ">
                    <div className="hidden sm:block grow-0 shrink-0 w-[100px] h-[100px] p-2 items-center justify-center max-xs:-mb-4 text-prim-light text-2xl">
                      <img
                        id="getCode23_image"
                        src="https://shipthedeal.com/assets/uploads/store/adidas-coupon-20233.png"
                        alt="15% Off With Email Signup"
                      />
                    </div>
                    <div className="flex-1 basis-[300px] justify-evenly">
                      <div
                        id="getCode23_name"
                        className="font-bold text-xl mb-[10px]"
                      >
                        15% Off With Email Signup
                      </div>
                      <div className="flex-row flex flex-wrap">
                        <div className="flex flex-column coupon-badge items-center gap-1 text-xs">
                          <img
                            style={{ width: '30px' }}
                            src="https://a.slack-edge.com/production-standard-emoji-assets/14.0/google-medium/1f64c@2x.png"
                            alt="15% Off With Email Signup Best Coupon"
                          />
                          <span className='font-[400]'>Best Coupon</span>
                        </div>
                      </div>

                      <div
                        id="getCode23_description"
                        className="uppercase text-prim-light mb-[10px]"
                      ></div>
                      <span>35 uses</span> |{' '}
                      <span className="uppercase text-prim-exlight">
                        <span id="getCode23_storename">Adidas</span> coupons
                      </span>
                    </div>
                    <span className="hidden" id="getCode23_link">
                      https://adidas.njih.net/KnzLz
                    </span>
                    <div
                      className="btn grow-1 shrink-0 basis-[202px] text-[14px] px-4 py-3 max-xs:basis-full bg-none bg-prim-dark"
                      data-target="#getCode23"
                    >
                      Get Deal
                    </div>
                  </div>
                  {/* Adidas Information */}
                  <div className="max-w-[93vw] content border border-gray-200 rounded-2xl bg-white py-2 lg:py-4 px-4 lg:px-7 my-9">
                    <h2 className="h1">Adidas Information</h2>
                    <p>
                      Welcome to our Adidas coupon and promo code page. Below
                      you’ll find everything you need to know about how to save
                      on your online order at Adidas.
                    </p>
                  </div>
                </div>
              </div>
              {/* Left Section */}
              <div className="sm:col-[1/2] sm:row-[1/2] flex flex-col gap-y-6">
                {/* Rating Div */}
                <div className="border border-gray-200 rounded-2xl bg-white py-6 px-7">
                  <div className="text-lg font-medium text-prim">
                    You rated Adidas!
                  </div>
                  <div className="text-lg opacity-80 my-2">
                    Average rating: 2.4 of 5
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <img
                        src=" https://shipthedeal.com/build/assets/star.3fb9470e.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/star.3fb9470e.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/nostar.8815b900.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/nostar.8815b900.svg "
                        alt=""
                      />
                      <img
                        src=" https://shipthedeal.com/build/assets/nostar.8815b900.svg "
                        alt=""
                      />
                    </div>
                    <span className="text-lg opacity-80">(5 votes)</span>
                  </div>
                </div>
                {/* Submit Coupon Div */}
                <div className="border border-gray-200 rounded-2xl bg-[#abfbed] py-4 lg:py-5 px-2 lg:px-6 faqs-left-sidebar">
                  <div>
                    Have a great Adidas code we are missing? Share it with your
                    fellow Bargain Shoppers!
                  </div>
                  <div className="flex flex-col mt-4">
                    <div
                      id=""
                      data-te-toggle="modal"
                      data-te-target="#login"
                      className="btn grow-1 shrink-0 text-[14px] px-4 py-3 max-xs:basis-full"
                    >
                      SUBMIT A COUPON
                    </div>
                  </div>
                </div>
                {/* Offer & Promotion */}
                <div className="border border-gray-200 rounded-2xl bg-white py-4 px-7">
                  <ul>
                    <li className="border-b border-gray-200 last:border-b-0 flex justify-between py-[17px]">
                      Total Offers
                      <span className="text-[#05205C] font-medium">1</span>
                    </li>
                    <li className="border-b border-gray-200 last:border-b-0 flex justify-between py-[17px]">
                      Promotion
                      <span className="text-[#05205C] font-medium">1</span>
                    </li>
                  </ul>
                </div>
                {/* Discount */}
                <div className="border border-gray-200 rounded-2xl bg-white py-4 px-7">
                  <ul>
                    <li className="flex justify-between py-[13px]">
                      <span>💰 Average saving:</span>
                      <span className="text-[#05205C] font-medium">$9.90</span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>✅ Coupons available:</span>
                      <span className="text-[#05205C] font-medium"></span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>🙌 Best coupon:</span>
                      <span className="text-[#05205C] font-medium">-</span>
                    </li>
                    <li className="flex justify-between py-[13px]">
                      <span>⏰ Last updated:</span>
                      <span className="text-[#05205C] font-medium">
                        Jan 21, 2025
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Product;
