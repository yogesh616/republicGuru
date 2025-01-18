import React from "react";
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
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
function CurrentTrendsetters() {
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();
  const products = [
    {
      name: "Amazon Fresh",
      offer: "Flat 5% off",
      code: " ",
      description: "20% Off on Home and Kitchen Appliances",
      referral_url:
        "https://www.amazon.in/Home-Improvement/b?ie=UTF8&node=4286640031&linkCode=ll2&tag=rajvansh017-21&linkId=6ea6043bcd0d23119ef45a1f49022ca7&language=en_IN&ref_=as_li_ss_tl",
      image: AmazonFresh,
    },
    {
      name: "Amazon Seo",
      offer: "Flat 5% off",
      code: " ",
      description: " 500 On Beuty Deals",
      referrral_url:
        "https://www.amazon.in/gp/browse.html?node=1355016031&linkCode=ll2&tag=rajvansh017-21&linkId=02e1628fb0e048bbb1aa035446cfe14c&language=en_IN&ref_=as_li_ss_tl",
      image: AmazonSeoAmazonGiftCard,
    },
    {
      name: "Amazon Shopping Gift",
      offer: "Flat 5% off",
      code: " ",
      description: "20% on Kitchen Electronics",
      referral_url:
        "https://www.amazon.in/Home-Kitchen/b?ie=UTF8&node=976442031&linkCode=ll2&tag=rajvansh017-21&linkId=0287d720a3abad43e326d8bdee813f44&language=en_IN&ref_=as_li_ss_tl",
      image: AmazonShoppingGiftVoucher,
    },
    {
      name: "Amazon Shopping",
      offer: "Flat 5% off",
      code: " ",
      description: "5000 Discount on Aircondition",
      referral_url:
        "https://www.amazon.in/s?k=AC&crid=1NG3OC12U50PE&sprefix=ac%2Caps%2C254&linkCode=ll2&tag=rajvansh017-21&linkId=a06472739130ec28138e299a878bdaff&language=en_IN&ref_=as_li_ss_tl",
      image: AmazonShoppingVoucher,
    },
    {
      name: "Tata Cliq",
      offer: "Flat 5% off",
      code: " ",
      description: "",
      referral_url: "https://bitli.in/r5o7m0c",
      image: TataCliq,
    },
    {
      name: "Flipkart",
      offer: "Flat 5% off",
      code: " ",
      description: "",
      referral_url: "",
      image: FlipkartGiftCard,
    },
    {
      name: "Myntra",
      offer: "Flat 5% off",
      code: " ",
      description: "",
      referral_url: "https://myntr.it/i4LuZh2",
      image: Myntra_Gift_Card,
    },
    {
      name: "Nykaa",
      offer: "Flat 5% off",
      code: " ",
      description: "Get Upto 40% Off on Bestsellers",
      referral_url: "https://bitli.in/Az3SKj9",
      image: Nykaa,
    },
  ];
  return (
    <div className=" bg-gray-100 mt-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Current Trendsetters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 max-w-sm cursor-pointer"
            onClick={() => {
              setSelectedProduct(product);
              navigate("/product");
            }}
          >
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md w-full object-cover max-h-48 md:h-64 lg:h-72 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p className="text-white bg-pink-500 py-2 text-xs font-semibold rounded-s-lg inline-block absolute top-0 left-1 -translate-x-1.5 px-2 transition-all duration-300 ease-in-out group-hover:top-[-0.5rem] group-hover:left-[-0.5rem]">
                {product.offer}
              </p>
            </div>

            <div className="flex items-center flex-col justify-between mt-4 gap-1">
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.description}</p>
              <div className=" text-zinc-900 border-[1px] border-orange-500 text-sm px-3 py-1 rounded-lg">
                Promo code
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" w-full text-center my-4">
        <button className="py-3 px-5 font-semibold rounded-lg bg-pink-500 text-white">
          View More
        </button>
      </div>
    </div>
  );
}

export default CurrentTrendsetters;
