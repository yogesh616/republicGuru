import React from 'react';
import Header from './Header';
import Footer from './Footer';
import hero_circle from '../assets/logo/about-us-hero-circle.png';

function About() {
  return (
    <div>
      <Header />

      {/* About Us Hero Section */}
      <div className="w-full flex justify-center  mt-24 sm:-mt-0.5">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center">
          <div className="relative w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1461 331.3"
              className="w-full h-auto absolute sm:top-32 "
            >
              <ellipse cx="473.5" cy="-349.2" rx="674.5" ry="680.5" fill="#282870" />
              <circle cx="1125" cy="-114.7" r="225" fill="#412db2" />
              <circle cx="1382.89" cy="262.57" r="26.75" fill="#ffce03" />
              <text x="30%" y="35%" textAnchor="middle" fontSize="50" fill="white" fontWeight="bold">
                About Us
              </text>
              <text x="50%" y="50%" textAnchor="middle" fontSize="24" fill="white">
                <tspan x="31%" dy="0">We believe in the power of gifts.</tspan>
                <tspan x="32%" dy="1.5em">It looks like a smile, feels like a hug,</tspan>
                <tspan x="33%" dy="1.5em">and sounds like an ecstatic “Thank you!”</tspan>
              </text>
            </svg>
            <img className="absolute top-10 right-10 sm:top-44 sm:right-28 w-40 sm:w-48" src={hero_circle} alt="Hero Circle" />
          </div>
        </div>
      </div>

      {/* About Us Description */}
      <div className='sm:mt-96 mt-20 flex flex-col sm:flex-row  items-start justify-start w-full sm:ps-14'>
          <section className="w-full max-w-5xl mx-auto px-6 py-10 bg-[#F6F6F6] text-[#3B1A6E]">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p>
          Welcome to Republic Guru, your ultimate destination for exclusive deals, discounts, and savings. We believe that shopping should be rewarding, and that’s why we provide our customers with the best coupon codes to help them save big on their favorite brands and services.
        </p>
        <br />
        <p>
          At Republic Guru, we are dedicated to making online shopping more affordable and enjoyable. Whether you’re looking for discounts on fashion, electronics, travel, or daily essentials, our platform ensures that you get the best deals every time you shop.
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Mission</h2>
        <p>
          Our mission is to help customers save money effortlessly by providing the latest and most valuable coupon codes. We aim to bridge the gap between brands and shoppers by offering verified and exclusive discounts that enhance the shopping experience.
        </p>
        <br />
        <p>
          We believe in making savings accessible to everyone by continuously updating our platform with fresh offers, special promotions, and limited-time deals.
        </p>

        {/* What We Offer */}
        <h2 className="text-2xl font-bold mt-6 mb-4">What We Offer</h2>
        <ul className="list-disc ml-5">
          <li>Verified Coupon Codes: We provide authentic and regularly updated discount codes from top brands and e-commerce platforms.</li>
          <li>Exclusive Deals: Enjoy special promotions and limited-time offers that you won’t find anywhere else.</li>
          <li>Wide Range of Categories: From fashion and electronics to travel and food, we have discounts for every need.</li>
          <li>User-Friendly Experience: Our platform makes it easy to find and apply the best coupons, ensuring maximum savings with minimal effort.</li>
        </ul>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-bold mt-6 mb-4">Why Choose Republic Guru?</h2>
        <ul className="list-disc ml-5">
          <li>Save More, Shop Smart: We bring you the latest discounts so you can enjoy great deals without compromising on quality.</li>
          <li>Trust & Reliability: All our coupons are carefully curated and tested to ensure they work.</li>
          <li>Exclusive Rewards: Sign up for special member-only offers and extra savings on your favorite brands.</li>
          <li>Daily Updates: We keep our platform updated with fresh deals, ensuring you never miss out on a great offer.</li>
        </ul>

        {/* Call to Action */}
        <h2 className="text-2xl font-bold mt-6 mb-4">Start Saving Today!</h2>
        <p>
          Unlock amazing discounts with Republic Guru and make every purchase more rewarding. Browse our latest deals, grab the best coupon codes, and enjoy unbeatable savings.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4 ">Happy Shopping!</h2>
          </section>
          <div className=' w-full max-w-5xl  flex items-center justify-center gap-1'>
            {/*image */}
            <div>
              <svg width="109" height="109" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="gc-header-logo-purple"><title id="gc-header-logo-purple">Giftcards.com link</title><mask id="mask0_4360_89399" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="109" height="109"><path fillRule="evenodd" clipRule="evenodd" d="M0 0H109V108.999H0V0Z" fill="white"></path></mask><g mask="url(#mask0_4360_89399)"><path fillRule="evenodd" clipRule="evenodd" d="M109 54.4997C109 84.5994 84.5994 108.999 54.5003 108.999C24.4006 108.999 0 84.5994 0 54.4997C0 24.4001 24.4006 0 54.5003 0C84.5994 0 109 24.4001 109 54.4997Z" fill="#3C286D"></path></g><path fillRule="evenodd" clipRule="evenodd" d="M32.7388 33.7377C32.7388 28.6833 36.7362 24.5303 41.8689 24.5303C44.6798 24.5303 47.1301 25.7168 48.6773 27.574L45.6857 30.0754C44.7315 28.9662 43.3905 28.2959 41.8689 28.2959C39.0058 28.2959 36.8134 30.7717 36.8134 33.7377C36.8134 36.6525 38.9541 39.3089 41.9979 39.3089C43.9835 39.3089 46.1759 38.1997 46.1759 36.4458H41.1726V33.1703H50.5862C50.5862 39.9019 46.8461 42.9195 42.1007 42.9195C36.6334 42.9195 32.7388 38.741 32.7388 33.7377Z" fill="white"></path><mask id="mask1_4360_89399" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="109" height="109"><path fillRule="evenodd" clipRule="evenodd" d="M0 109H109V0H0V109Z" fill="white"></path></mask><g mask="url(#mask1_4360_89399)"><path fillRule="evenodd" clipRule="evenodd" d="M52.874 42.6099H56.6914V30.5654H52.874V42.6099Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M67.1339 27.5475C65.2511 27.5475 64.6064 28.5278 64.5809 29.9205V30.5652H67.1595V33.4533H64.5809V42.6096H60.7635V33.4533H58.52V30.5652H60.7635V29.8171C60.7635 26.0259 62.8525 24.0142 66.3342 24.0142H67.8558V27.5475H67.1339Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M76.94 30.5652V33.454H74.4125V42.6097H70.5951V33.454H68.4033V30.5652H70.5951V26.2583H74.4125V30.5652H76.94Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M22.1245 57.1823C22.1245 53.365 25.2711 50.8892 28.7783 50.8892C31.0996 50.8892 32.8791 52.024 34.04 53.7262L31.0735 55.5834C30.6095 54.8615 29.6297 54.4225 28.8044 54.4225C27.0505 54.4225 26.0191 55.6868 26.0191 57.1823C26.0191 58.7039 27.0505 60.0193 28.8044 60.0193C29.6297 60.0193 30.6095 59.5808 31.0735 58.8584L34.04 60.7157C32.8791 62.4179 31.0996 63.5527 28.7783 63.5527C25.2711 63.5527 22.1245 60.9996 22.1245 57.1823Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M44.6379 57.234C44.6379 55.6607 43.3997 54.4225 41.852 54.4225C40.2276 54.4225 39.0928 55.6868 39.0928 57.234C39.0928 58.7039 40.2276 60.0193 41.8781 60.0193C43.4253 60.0193 44.6379 58.7039 44.6379 57.234ZM44.7668 51.1987H48.5842V63.2431H44.7668V61.7215C43.9416 62.8563 42.4716 63.5527 40.9495 63.5527C37.5712 63.5527 35.1987 60.9996 35.1987 57.234C35.1987 53.4428 37.5712 50.8892 41.0012 50.8892C42.4716 50.8892 43.9416 51.5338 44.7668 52.6431V51.1987Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M60.4992 51.2504L59.5967 54.8871C58.8487 54.4486 58.2557 54.4225 57.8689 54.4225C56.3729 54.4225 55.1347 55.6868 55.1347 59.2457V63.2431H51.3174V51.1987H55.083V53.7523C55.7794 51.7661 57.2243 50.8892 58.6942 50.8892C59.2611 50.8892 59.8807 50.9408 60.4992 51.2504Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M70.5112 57.2081C70.5112 55.6609 69.1958 54.4228 67.7515 54.4228C66.256 54.4228 64.9661 55.6871 64.9661 57.2081C64.9661 58.7297 66.256 60.0196 67.7515 60.0196C69.2214 60.0196 70.5112 58.7558 70.5112 57.2081ZM70.6663 44.6479H74.4575V63.2434H70.6663V61.9024C69.7893 63.0628 68.1644 63.5529 66.9262 63.5529C63.9347 63.5529 61.0977 61.1027 61.0977 57.2081C61.0977 53.3135 63.9347 50.8894 66.9262 50.8894C68.1644 50.8894 69.7893 51.3796 70.6663 52.5144V44.6479Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M76.4561 59.349H80.0667C80.0667 59.942 80.5051 60.6389 81.5883 60.6389C82.3874 60.6389 83.0587 60.226 83.0587 59.6586C83.0587 59.2713 82.7748 59.0906 81.8717 58.885L80.299 58.4721C76.7656 57.5179 76.6622 55.5061 76.6622 54.5003C76.6622 52.7208 78.674 50.8896 81.5883 50.8896C83.8579 50.8896 86.6177 51.9467 86.566 54.9643H82.9554C82.9554 54.1907 82.4135 53.8039 81.6655 53.8039C81.0209 53.8039 80.4796 54.1135 80.4796 54.6292C80.4796 55.0938 80.8919 55.3516 81.5105 55.5061L83.6 56.0735C86.6177 56.8988 86.875 58.8078 86.875 59.633C86.875 62.2894 84.1158 63.5526 81.6911 63.5526C79.0091 63.5526 76.4561 62.0827 76.4561 59.349Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M32.0293 76.526C32.0293 72.7087 35.1759 70.2329 38.6831 70.2329C41.0044 70.2329 42.7844 71.3677 43.9448 73.0699L40.9788 74.9272C40.5143 74.2053 39.5345 73.7663 38.7092 73.7663C36.9553 73.7663 35.9239 75.0306 35.9239 76.526C35.9239 78.0477 36.9553 79.3631 38.7092 79.3631C39.5345 79.3631 40.5143 78.9246 40.9788 78.2022L43.9448 80.0594C42.7844 81.7616 41.0044 82.8964 38.6831 82.8964C35.1759 82.8964 32.0293 80.3434 32.0293 76.526Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M54.2047 76.5777C54.2047 74.9272 53.0182 73.7663 51.5483 73.7663C50.0784 73.7663 48.8919 74.9272 48.8919 76.5777C48.8919 78.2283 50.0784 79.3631 51.5483 79.3631C53.0182 79.3631 54.2047 78.2283 54.2047 76.5777ZM45.0234 76.5777C45.0234 72.7604 48.1183 70.2329 51.5483 70.2329C54.9783 70.2329 58.0993 72.7604 58.0993 76.5777C58.0993 80.369 54.9783 82.8964 51.5483 82.8964C48.1183 82.8964 45.0234 80.369 45.0234 76.5777Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M79.5362 76.1136V82.5874H75.7194V76.217C75.7194 74.3597 74.7908 73.7668 73.8105 73.7668C72.6245 73.7668 71.7476 74.592 71.7476 76.7066V82.5874H67.9308V76.2942C67.9308 74.4375 67.0021 73.7668 66.0479 73.7668C65.016 73.7668 63.9584 74.2825 63.9584 76.2942V82.5874H60.1416V70.5424H63.9584V72.8898C64.1907 71.0587 65.9963 70.2334 67.2083 70.2334C68.9878 70.2334 70.3032 71.0848 71.0251 72.5286C71.8509 70.9297 73.7076 70.2334 74.9714 70.2334C77.989 70.2334 79.5362 72.4252 79.5362 76.1136Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M51.9702 26.1791C51.9702 24.6314 53.2601 23.3677 54.73 23.3677C56.226 23.3677 57.5153 24.6575 57.5153 26.1791C57.5153 27.7007 56.226 28.9645 54.73 28.9645C53.2856 28.9645 51.9702 27.7268 51.9702 26.1791Z" fill="#3CD57A"></path><path fillRule="evenodd" clipRule="evenodd" d="M25.4634 80.1147C25.4634 78.567 26.7532 77.3032 28.2232 77.3032C29.7192 77.3032 31.0085 78.5931 31.0085 80.1147C31.0085 81.6363 29.7192 82.9 28.2232 82.9C26.7788 82.9 25.4634 81.6624 25.4634 80.1147Z" fill="#FF8A00"></path></g></svg>
            </div>
            {/* content */}
            <div className='flex flex-col text-[#3B1A6E]'>
              <h2 className='font-bold'>Republic Guru</h2>
              <p>Blackhawk Network</p>
              <p>6220 Stoneridge Mall Road</p>
              <p>Pleasanton, CA 94588</p>
              <p>Customer Support #:</p>
              <p>(833) 800-0550</p>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
