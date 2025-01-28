import React from 'react';
import Header from './Header'
import './about.css'


function About() {
  return (
    <div>
       <Header />
       {/* About us image container */}
       <div className='w-full flex items-center justify-center  mt-36'
         style={{height: "65vh", backgroundImage: "url(https://wallpaperaccess.com/full/4486611.jpg)"}}>
          <h1 className='text-8xl font-bold'>About Us</h1>
       </div>
       { /* Welcome page */}
       <div className='flex flex-col items-center mt-10'>
         <h2 className='text-5xl font-bold'>Welcome to <span className='linear-text-gradient'>Republic Guru</span></h2>
         <div className='px-4 sm:w-1/3 w-3/4 my-4 '>
           <p className='text-lg text-gray-500 '>
               A leading content creation agency based in Jaipur, Rajasthan. 
               With over 5 years of industry expertise, we specialize in delivering top-notch solutions in SMO, 
               SEO, graphic designing, video editing, app development, and website development.
            </p>
         </div>
         {/* description with image */}
         <div className='flex flex-col sm:flex-row items-center gap-8 max-w-4xl'>
          {/* description */}
          <div className='flex flex-col gap-5'>
            <p>
             Our journey has been marked by the successful execution of 2000+ projects for clients across diverse industries,
             making us a trusted partner for businesses worldwide.
            </p>
            <p>
             At Sharvin Management, creativity meets strategy to craft impactful content that connects,
             engages, and drives measurable results. 
             Whether you’re a budding entrepreneur or an established brand,
             we’re here to bring your vision to life with personalized and innovative solutions.
            </p>
            <p>
            Let’s grow together and transform your ideas into remarkable digital experiences.
            </p>
          </div>
          {/* image */}
          <div className='px-2'>
            <img className='w-full rounded-lg' src="https://nzie.ac.nz/wp-content/uploads/2022/07/about-us-page-1024x683.jpg" alt="" />
          </div>

         </div>
         {/* Testimonials */}
         <div className='flex flex-col gap-10 sm:flex-row items-center mt-10'>
          <div className='w-60'>
            <h1 className='text-2xl'>High-Quality Content</h1>
          </div>
          <div className='w-60'>
            <h1 className='text-2xl'>
              Full-Funnel Solution
            </h1>
          </div>
          <div className='w-60'>
            <h1 className='text-2xl'>
              100% Result Guarantee
            </h1>
          </div>
         </div>
       </div>
       {/* Why choose us */}
       <div className='flex flex-col items-center'>
        <div>
          <h1>
            Why Choose Us?
          </h1>
        </div>
        <div>
          <p>
            Transforming Your Business with Strategic Expertise
          </p>
        </div>
        <div>
          <p>
             At Sharvin Management Pvt Ltd, we are more than a digital marketing and 
             content creation agency—we are your growth partners. 
             Here’s what makes us the best choice:
          </p>
        </div>
        <div>
          <p>
            <strong>Partner with Sharvin Management Pvt Ltd</strong> and experience the power of innovative, 
            data-driven, and client-centric digital marketing that transforms businesses into industry leaders.


          </p>
        </div>
       </div>

       {/* Services */}
       <div className='bg-[#E5E5E5] w-full h-screen '>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col sm:flex-row items-center'>
           <div>
            <h1 className='text-5xl font-bold'>Services We're Offering</h1>
           </div>
           <div>
            <p>
               Experience the power of innovative, data-driven,
                and client-centric digital marketing that
                 transforms businesses into industry leaders.
            </p>
           </div>
          </div>
          <div>
            <p>Go to discover more services &nbsp;
            <strong>More Services</strong></p>
          </div>
        </div>
       </div>

       {/* Philosophy section */}
      
       <div className="flex flex-col items-center w-full p-4 space-y-12">

       {/* our philosophy*/}
      <div
  
  className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-6 w-full max-w-4xl"
>
  {/* Text Content */}
  <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
      Our Philosophy
    </h1>
    <p className="text-center sm:text-left text-gray-600">
      At Sharvin Management Pvt Ltd, we believe in the transformative power of genuine, captivating content. 
        Our approach centers on building deep, meaningful connections between brands and their audiences through 
        innovative digital strategies that leave a lasting impact. We craft stories that don’t just attract attention 
        but foster authentic engagement, turning audiences into loyal communities. By blending creativity, quality, 
        and forward-thinking in the dynamic digital world, we strive to set new benchmarks and redefine what’s possible
        for our clients.
    </p>
  </div>

  {/* Image */}
  <div className="flex justify-center w-full sm:w-1/2">
    <img
      className="w-full h-auto max-w-[283px] sm:max-w-full"
      src='https://sharvinmanagement.com/wp-content/uploads/2025/01/360_F_86928498_AJ2q2x9DyeRyZuLwg0px66usx56sh8ii.jpg'
      alt=''
    />
  </div>
      </div>

        {/* our mission */}
        <div
  
  className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-6 w-full max-w-4xl"
>

   {/* Image */}
   <div className="flex justify-center w-full sm:w-1/2">
    <img
      className="w-full h-auto max-w-[283px] sm:max-w-full"
      src='https://sharvinmanagement.com/wp-content/uploads/2025/01/our-mission-1024x655.jpg'
      alt=''
    />
  </div>
  {/* Text Content */}
  <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
    Our Mission

    </h1>
    <p className="text-center sm:text-left text-gray-600">
      Our mission is to empower businesses by creating impactful digital 
      experiences that engage audiences and drive tangible results. We aspire to be
      the trusted partner for brands aiming to amplify their presence and thrive online.
      By combining innovative creativity with data-driven insights, we help our clients 
      achieve meaningful, long-term success in the ever-evolving digital landscape.

    </p>
  </div>

 
</div>


       {/* our vision */}
       <div
  
  className="flex flex-col-reverse sm:flex-row sm:items-center sm:space-x-6 w-full max-w-4xl"
>
  {/* Text Content */}
  <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
    Our Vision

    </h1>
    <p className="text-center sm:text-left text-gray-600">
    We envision a future where businesses of all sizes can access innovative,
     high-impact digital marketing solutions. Our goal is to become a 
     trailblazing content creation and digital marketing agency, celebrated for our creativity,
      innovation, and commitment to delivering outstanding value. By setting new benchmarks 
      for excellence, we aim to help businesses not just achieve but surpass their digital ambitions.

    </p>
  </div>

  {/* Image */}
  <div className="flex justify-center w-full sm:w-1/2">
    <img
      className="w-full h-auto max-w-[283px] sm:max-w-full"
      src='https://sharvinmanagement.com/wp-content/uploads/2025/01/our-mission-1.png'
      alt=''
    />
  </div>
       </div>
 


       </div>


       {/* Statistics Section */}
       <div className="flex justify-center items-center w-full mt-12">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-14 w-full max-w-4xl">
        {[
          { number: "45k+", text: "Happy Clients" },
          { number: "80%", text: "Increase in organic traffic" },
          { number: "24", text: "Awards" },
          { number: "22+", text: "Worldwide branches" },
          { number: "250+", text: "Active team members" },
        ].map((stat, index) => (
          <div key={index} className="flex items-center space-x-4 border-t-2 border-black pb-4 mx-8">
            <h3 className="text-4xl font-bold text-gray-900">{stat.number}</h3>
            <p className="text-lg text-black">{stat.text}</p>
          </div>
        ))}
      </div>
      </div>

      {/* Founders */}

      <div className="w-full text-center py-8">
  <h1 className="text-3xl font-bold mb-8">Sharvin Founders</h1>
  <div className="flex flex-col items-center justify-center  ">
    {/* Member 1 */}
    <div className="flex flex-col items-center justify-between p-4 shadow-md hover:shadow-xl transition-shadow rounded-lg w-2/3 h-96">
      <img
        className="founder-img h-auto mb-4"
        
        
        src="https://cdn.howold.co/uploads/photo/600x600/52/richard-s-newcombe.jpg"
        alt="Shreya Goswami"
      />
      <div>
      <h3 className="text-lg font-medium">Rajiv Kumar</h3>
      <p className="text-sm text-gray-500">Co-Founder</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-10'>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-facebook"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-instagram"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-youtube"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-linkedin-in"></i></span>
      </div>
    </div>

    {/* Member 2 */}
    <div className="flex flex-col items-center justify-between p-4 shadow-md hover:shadow-xl transition-shadow rounded-lg w-2/3 h-96">
      <img
        className="founder-img h-auto mb-4"
        width={100}
        src="https://cdn.howold.co/uploads/photo/600x600/52/richard-s-newcombe.jpg"
        alt="Rajiv Kumar"
      />
      <div>
      <h3 className="text-lg font-medium">Rajiv Kumar</h3>
      <p className="text-sm text-gray-500">Co-Founder</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-10'>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-facebook"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-instagram"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-youtube"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-linkedin-in"></i></span>
      </div>
    </div>

    {/* Member 3 */}
    <div className="flex flex-col items-center justify-between p-4 shadow-md hover:shadow-xl transition-shadow rounded-lg w-2/3 h-96">
      <img
        className="founder-img h-auto mb-4"
        width={100}
        src="https://cdn.howold.co/uploads/photo/600x600/52/richard-s-newcombe.jpg"
        alt="Anjali Verma"
      />
      <div>
      <h3 className="text-lg font-medium">Rajiv Kumar</h3>
      <p className="text-sm text-gray-500">Co-Founder</p>
      </div>
      <div className='flex flex-col sm:flex-row gap-10'>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-facebook"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-instagram"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-youtube"></i></span>
        <span className='w-10 h-10'><i className=" hover:text-blue-500 transition-all duration-300 cursor-pointer text-gray-400 text-3xl fa-brands fa-linkedin-in"></i></span>
      </div>
    </div>
    <div className="flex flex-col items-start justify-start p-4  w-2/3 h-96">
      <h2 className='text-8xl font-bold'>Get in touch</h2>
      <div className='flex justify-between gap-12 items-center mt-8'>
        <div className='cursor-pointer rounded-full items-center border-2 border-black px-12 py-5 flex gap-4'>
          <span className='text-4xl'><i className="  fa-brands fa-linkedin-in"></i></span>
          <span className='text-2xl hidden sm:inline-block'>Linkedin</span>
        </div>

        <div className='cursor-pointer rounded-full items-center border-2 border-black px-12 py-5 flex gap-4'>
          <span className='text-4xl'><i className="  fa-solid fa-envelope"></i></span>
          <span className='text-2xl hidden sm:inline-block'>Email</span>
        </div>

        <div className='cursor-pointer rounded-full items-center border-2 border-black px-12 py-5 flex gap-4'>
          <span className='text-4xl'><i className="  fa-solid fa-phone"></i></span>
          <span className='text-2xl hidden sm:inline-block'>Phone</span>
        </div>

        <div className='cursor-pointer rounded-full items-center border-2 border-black px-12 py-5 flex gap-4'>
          <span className='text-4xl'><i className="fa-brands fa-instagram"></i></span>
          <span className='text-2xl hidden sm:inline-block'>Instagram</span>
        </div>

      </div>
      
    </div>
  </div>

  
      
      
      </div>

      {/* Form */}

      <div className="w-full min-h-screen bg-[#C5CCDD] flex items-center justify-center p-6 sm:p-12">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl w-full  rounded-2xl  p-8 sm:p-16">
        {/* Left Side - Image Section */}
        <div className="relative w-full sm:w-1/2 flex items-center justify-center">
          <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500 to-green-400 rounded-full opacity-50"></div>
          <img 
            src="https://sharvinmanagement.com/wp-content/uploads/2023/08/banner-2.png" 
            alt="Contact" 
            className="relative z-10 w-72 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full sm:w-1/2 p-4 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Send Message</h1>
          <form className="flex flex-col space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              SEND NOW
            </button>
          </form>
        </div>
      </div>
    </div>





    </div>
  )
}

export default About
