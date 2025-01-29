import React from 'react'

/*
import TitanEye from '../assets/TitanEye.png'
import MG from '../assets/1-MG.png'
import GoldJewelleryPCJ from '../assets/GoldJewelleryPCJ.png'
import EmperioArmani from '../assets/EmperioArmani.png'
import HugoBoss from '../assets/HugoBoss.png'
import LunchBox from '../assets/LunchBox.png'
import TheSkinStory from '../assets/TheSkinStory.png'
import SuratDiamondJewellery from '../assets/SuratDiamondJewellery.png'
import aldo from '../assets/aldo.png'
import Aliste from '../assets/Aliste.png'
import AllenSollyGiftCards from '../assets/AllenSollyGiftCards.png'
import AllenSolly from '../assets/Allen-Solly.png'
import AmazonShoppingGiftVoucher from '../assets/Amazon-Shopping-Gift-Voucher.png'
import AmazonFreshShopping from '../assets/AmazonFreshShopping.jpeg'
import AmazonPrimeGiftCard from '../assets/AmazonPrimeGiftCard.png'
import AmericanEagle from '../assets/AmericanEagle.png'
import AppyHighPrime from '../assets/AppyHighPrime.png'
import BakingoSeoShoppingAdsBakingo from '../assets/BakingoSeoShoppingAdsBakingo.jpeg'
import BATH_BODYWORK from '../assets/BATH&BODYWORK.png'
import BehrouzBiryani from '../assets/BehrouzBiryani.png'
import BEVERLYHILLSPOLOCLUB from '../assets/BEVERLYHILLSPOLOCLUB.png'
*/

// import food images 
import { Zomato, Swiggy, PizzaHutt, Kfc, EatSure, Dominos, BehrouzBiryani ,ShoppersStop } from '../FoodImages/FoodImages'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../Context/ProductContext'

function HotDeals() {

 const navigate = useNavigate()
  const { setSelectedProduct } = useProduct()
 /*
  const products = [
    {
      name: "Titan Eye",
     
      offer: "Flat 4% off",
      code: "JM4",
      
      image: TitanEye
    },
    {
      name: "Tata 1MG",
      
      offer: "Flat 5% cashback",
      code: "AMZ5",
     
      image: MG
    },
    {
      name: "Gold Jewellery PCJ",
     
      offer: "Flat 3% off",
      code: "FLK3",
     
      image: GoldJewelleryPCJ
    },
    {
      name: "Emperio Armani",
     
      offer: "Flat 7% off",
      code: "MYN7",
     
      image: EmperioArmani
    },
    {
      name: "Hugo Boss",
     
      offer: "Flat 6% off",
      code: "BB6",
      
      image: HugoBoss
    },
    {
      name: "Lunch Box",
     
      offer: "Flat 10% cashback",
      code: "ZMT10",
      
      image: LunchBox
    },
    {
      name: "The Skin Story",
      
      offer: "Flat 8% off",
      code: "SWG8",
   
      image: TheSkinStory
    },
    {
      name: "Suraj Diamond Jewellery",
      
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: SuratDiamondJewellery
    },
    {
      name: "Aldo",
     
      offer: "Flat 4% off",
      code: "JM4",
      
      image: aldo
    },
    {
      name: "Aliste",
     
      offer: "Flat 4% off",
      code: "JM4",
      
      image: Aliste
    },
    {
      name: "Allen Solly Gift Cards",
      offer: "Flat 4% off",
      code: "JM4",
      
      image: AllenSollyGiftCards
    },
    {
      name: "Allen-Solly",
      offer: "Flat 4% off",
      code: "JM4",
      
      image: AllenSolly
    },
    {
      name: "Amazon Shopping Gift Voucher",
      
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: AmazonShoppingGiftVoucher
    },
    {
      name: "Amazon Fresh Shopping",
      
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: AmazonFreshShopping
    },
    {
      name: "Amazon Prime Gift Card",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: AmazonPrimeGiftCard
    },
    {
      name: "American Eagle",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: AmericanEagle
    },
    {
      name: "Appy High Prime",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: AppyHighPrime
    },
    {
      name: "Bakingo SEO Shopping Ads Bakingo",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: BakingoSeoShoppingAdsBakingo
    },
    {
      name: "BATH & BODYWORK",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: BATH_BODYWORK
    },
    {
      name: "Behrouz Biryani",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: BehrouzBiryani
    },
    {
      name: "BEVERLY HILLS POLOCLUB",
      offer: "Flat 5% off",
      code: "NYK5",
      
      image: BEVERLYHILLSPOLOCLUB
    }
  ];

*/

const products = [
  {
    name: "Zomato",
    offer: "Flat 5% off",
    code: "NYK5",
    
    image: Zomato
  },
  {
    name: "Swiggy",
    offer: "Flat 8% off",
    code: "NYK5",
    
    image: Swiggy
  },
  {
    name: "Pizza Hut",
    offer: "Flat 6% off",
    code: "NYK5",
    
    image: PizzaHutt
  },
  {
    name: "KFC",
    offer: "Flat 2% off",
    code: "NYK5",
    
    image: Kfc
  },
  {
    name: "Eat Sure",
    offer: "Flat 7% off",
    code: "NYK5",
    
    image: EatSure
  },
  {
    name: "Dominos",
    offer: "Flat 2% off",
    code: "NYK5",
    
    image: Dominos
  },
  {
    name: "Shoppers Stop",
    offer: "Flat 15% off",
    code: "NYK5",
    
    image: ShoppersStop
  },
  {
    name: "Behrouz Biryani",
    offer: "Flat 5% off",
    code: "NYK5",
    
    image: BehrouzBiryani
  }
]



  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">
        Hot Deals and Best Sellers
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {  products.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 max-w-sm bg-white group cursor-pointer"
          onClick={() => {
            setSelectedProduct(product)
            localStorage.setItem('selectedProduct', JSON.stringify(product))
            navigate('/product')
          }
           
          }>
            <div className="relative group">
  <img
    src={product.image}
    alt={product.name}
    className="rounded-md w-full object-cover max-h-48 md:h-64 lg:h-72 transition-transform duration-300 ease-in-out group-hover:scale-105"
  />
  <p className="bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white py-2 text-xs font-semibold rounded-s-lg inline-block absolute top-0 left-1 -translate-x-1.5 px-2 transition-all duration-300 ease-in-out group-hover:top-[-0.5rem] group-hover:left-[-0.5rem]">
    {product.offer}
  </p>
</div>
           
           
            <div className="flex items-center flex-col justify-between mt-4 gap-1">
              <h3 className="text-lg font-bold mt-2">{product.name}</h3>
              <div className=" text-zinc-900 border-[1px] border-orange-500 text-sm px-3 py-1 rounded-lg">
                Promo code
              </div>
             
            </div>
          </div>
        ))}
      </div>

      <div className='w-full text-center my-4'>
        <button className='py-3 px-5 font-semibold rounded-lg bg-gradient-to-r from-[#0652c5] to-[#d4418e] text-white'>
          View More
        </button>
      </div>
    </div>
  )
}

export default HotDeals;
