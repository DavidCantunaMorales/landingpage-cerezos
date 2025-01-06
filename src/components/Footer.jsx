import Logo from "../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-md">
      <div className="mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-4">
          <img
            src={Logo}
            alt="Logo"
            className="mx-auto h-64 w-auto object-contain"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaFacebookSquare size={30}/>
          </a>
          <a href="https://www.instagram.com/cerezos1994/" className="text-gray-600 hover:text-pink-500">
          <FaInstagramSquare size={30}/>
          </a>
          <a href="https://wa.link/ro4pvo" className="text-gray-600 hover:text-green-500">
          <FaWhatsapp size={30}/>
          </a>
        </div>

        {/* Copyright */}
        <div className="bg-[#ac2454] py-4">
          <p className="text-white">
            Copyright © 2024 <span className="font-bold">Website</span>. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-2 text-sm">
            <a href="#" className="hover:underline text-white">Terms & Conditions</a>
            <span className="text-white">|</span>
            <a href="#" className="hover:underline text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
