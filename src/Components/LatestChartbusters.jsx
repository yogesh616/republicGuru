import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reward_program_d1 from "../BannerImages/Reward_program_d1.png";

function LatestChartbusters() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    Reward_program_d1,
    "https://static.woohoo.in/media/assets/banner/unipin_voucher_-1440x274.jpg",
    "https://static.woohoo.in/media/assets/banner/nykaa-1440x274_1.jpg",
    "https://static.woohoo.in/media/assets/banner/1440x274_202.jpg"
  ];

  return (
    <div className="w-full bg-[#291022] py-6 md:py-12 px-4 sm:px-8 lg:px-14">
      <Slider {...settings}>
        {products.map((image, index) => (
          <div key={index} className='w-full bg-white md:p-4 block text-center border-0 rounded-lg'>
            <img 
              src={image} 
              className='rounded-lg w-full object-cover h-64 sm:h-72 md:h-96 lg:h-80 mx-auto' 
              alt="banner" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default LatestChartbusters;
