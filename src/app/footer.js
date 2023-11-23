import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="Fbg p-8 sm:p-12 lg:p-20">
      <div className="max-w-6xl mC grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-sm text-gray-500 font-semibold mb-4">FREELANCER</h2>
          <div className="flex items-center mb-5">
            <span className="text-3xl text-gray-500"><sup> $</sup></span>
            <span className="text-7xl font-bold text-gray-200">19</span>
            <span className="ml-1 text-gray-500"><sub>/mo</sub></span>
          </div>
          <ul className="text-gray-500 leading-8">
            <li><span className="text-gray-300">5 Psd</span> files included</li>
            <li> <span className="text-gray-300">37 hours</span> files support</li>
            <li> <span className="text-gray-300">50 Psd</span> 50 Psd files support</li>
            <li> <span className="text-gray-300">Multiple</span> feature included</li>
            <li> <span className="text-gray-300">100 </span> element PSD + AI</li>
          </ul>
          <button className="btnFooter">CLICK ME</button>
        </div>

        {/* Column 2 */}
        <div>
        <h2 className="text-sm text-gray-500 font-semibold mb-4">CORPRATE</h2>
        <div className="flex items-center mb-5">
            <span className="text-3xl text-gray-500"><sup> $</sup></span>
            <span className="text-7xl font-bold text-gray-200">29</span>
            <span className="ml-1 text-gray-500"><sub>/mo</sub></span>
          </div>
          <ul className="text-gray-500 leading-8">
            <li><span className="text-gray-300">10 Psd</span> files included</li>
            <li> <span className="text-gray-300">307 hours</span> files support</li>
            <li> <span className="text-gray-300">50 Psd</span> 50 Psd files support</li>
            <li> <span className="text-gray-300">Multiple</span> feature included</li>
            <li> <span className="text-gray-300">1000 </span> element PSD + AI</li>
          </ul>
          <button className="btnFooter">CLICK ME</button>
        </div>

        {/* Column 3 */}
        <div>
        <h2 className="text-sm text-gray-500 font-semibold mb-4">AGENCY</h2>
        <div className="flex items-center mb-5">
            <span className="text-3xl text-gray-500"><sup> $</sup></span>
            <span className="text-7xl font-bold text-gray-200">39</span>
            <span className="ml-1 text-gray-500"><sub>/mo</sub></span>
          </div>
          <ul className="text-gray-500 leading-8">
            <li><span className="text-gray-300">30 Psd</span> files included</li>
            <li> <span className="text-gray-300">370 hours</span> files support</li>
            <li> <span className="text-gray-300">50 Psd</span> 50 Psd files support</li>
            <li> <span className="text-gray-300">Multiple</span> feature included</li>
            <li> <span className="text-gray-300">100 </span> element PSD + AI</li>
          </ul>
          <button className="btnFooter">CLICK ME</button>
        </div>
        <div>
        <h2 className="text-sm text-gray-500 font-semibold mb-4">ENTERPRISE</h2>
        <div className="flex items-center mb-5">
            <span className="text-3xl text-gray-500"><sup> $</sup></span>
            <span className="text-7xl font-bold text-gray-200">49</span>
            <span className="ml-1 text-gray-500"><sub>/mo</sub></span>
          </div>
          <ul className="text-gray-500 leading-8">
            <li><span className="text-gray-300">150 Psd</span> files included</li>
            <li> <span className="text-gray-300">37 hours</span> files support</li>
            <li> <span className="text-gray-300">50 Psd</span> 50 Psd files support</li>
            <li> <span className="text-gray-300">Multiple</span> feature included</li>
            <li> <span className="text-gray-300">100 </span> element PSD + AI</li>
          </ul>
          <button className="btnFooter">CLICK ME</button>
        </div>
        {/* Social Media Icons */}
      </div>
      
      
    
    </footer>
     <div className="Fbg sm:p-12 lg:p-5">
      <div className=" max-w-6xl mC grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-gray-600 p-4">
      {/* Left Column */}
      <div className="mt-6 flex gap-6 max-w-xl text-gray-400 font-semibold"> 
        
       <p>Home </p> 
       <p> Privacy </p>
       <p>Terms & Condition </p> 
       <p> About Us </p>
       <p> Contact Us </p>
       
      </div>

      {/* Right Column */}
      <div>
      <div className="flex justify-end mt-5">
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-white mx-2 hover:text-gray-400">
          <FaLinkedin size={20} />
        </a>
      </div>
      </div>
      <div className="flex text-gray-500 font-semibold text-sm">
      © A New era 2016.Awesome wireframe & coding by Abdrei Dorin 
      </div>
      </div>
      </div>
    </>
  
  );
};

export default Footer;
