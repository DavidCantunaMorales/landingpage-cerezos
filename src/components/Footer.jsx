import Logo from "../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-md py-8">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-4">
          <img
            src={Logo}
            alt="Logo"
            className="mx-auto h-56 w-auto object-contain"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="#" className="text-gray-600 hover:text-blue-500">
          <FaFacebookSquare size={30}/>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
          <FaInstagramSquare size={30}/>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500">
          <FaYoutube size={30}/>
          </a>
        </div>

        {/* Copyright */}
        <div className="bg-pink-200 py-4">
          <p className="text-gray-500">
            Copyright © 2024 <span className="font-bold">Website</span>. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-2 text-sm">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
