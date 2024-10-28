import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white text-neutral-600 pb-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <a href="https://linkedin.com" className="text-neutral-600 hover:text-blue-700" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com" className="text-neutral-600 hover:text-blue-400" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-neutral-600 hover:text-pink-500" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="flex space-x-4">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Pujan-Joshi. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
