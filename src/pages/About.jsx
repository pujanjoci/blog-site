import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import profileImage from '../assets/profile.png';
import logo from '../assets/logo.png'; // Import the logo image
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const About = () => {
    const navigate = useNavigate(); // Initialize useNavigate for handling navigation

    // Define handleNavigation function for routing
    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="relative flex flex-col items-center mt-3 px-4 md:px-10 space-y-3">
            {/* Logo Section - Positioned in Top-Left */}
            <div className="absolute top-4 left-6">
                <a className="hover:cursor-pointer" onClick={() => handleNavigation('/')}>
                    <img src={logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10" />
                </a>
            </div>

            {/* Main Content Section */}
            <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg mt-16 md:mt-8">
                <h1 className="text-3xl font-bold text-center mb-4">About Me</h1>
                <a href="https://pujan-joshi.com.np" target="_blank" rel="noopener noreferrer">
                    <img 
                        src={profileImage} 
                        alt="Profile Image" 
                        className="w-48 h-48 mt-5 mb-5 rounded-full mx-auto border-4 border-indigo-500 hover:border-gray-500 hover:transition-all hover:duration-500" 
                    />
                </a>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Welcome to my blog! I'm Pujan Joshi, an aspiring web developer. 
                    I created this blog to showcase my creative journey and share my experiences with you.
                </p>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    My interests include playing games and coding. My expertise lies in:
                    <br /> - Web Development
                    <br /> - Video Creation
                    <br /> - Content Writing.
                </p>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    When I'm not working, I enjoy watching YouTube videos and playing games. 
                    I also like to learn new things.
                </p>

                {/* Social Links Section */}
                <div className="flex justify-center space-x-4 mt-6">
                    <a href="https://linkedin.com/in/pujan-joshi-b811071a1/" className="text-gray-500 hover:text-blue-500">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://github.com/pujanjoci" className="text-gray-500 hover:text-gray-800">
                        <FaGithub size={28} />
                    </a>
                    <a href="https://twitter.com/PujanJoshi3" className="text-gray-500 hover:text-blue-400">
                        <FaTwitter size={28} />
                    </a>
                    <a href="https://instagram.com/pujan_joci/" className="text-gray-500 hover:text-pink-700">
                        <FaInstagram size={28} />
                    </a>
                </div>

                <p className="text-lg text-gray-700 mt-4 text-center">
                    You can also contact me at<br />
                    <a href="mailto:pujanjoci01@gmail.com" className="text-green-600 underline hover:text-blue-300">
                        pujanjoci01@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
