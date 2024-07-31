import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path according to your project structure

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setMenuOpen(false);
    };

    return (
        <header className="relative">
            {/* Desktop and Mobile Grids */}
            <div className="grid grid-cols-2 md:grid-cols-3 items-center mt-3 px-4 md:px-10">
                {/* Left Grid - Logo */}
                <div className="flex items-center">
                    <a className='hover:cursor-pointer' onClick={() => handleNavigation('/')}> 
                        <img src={logo} alt="Logo" className="w-8 h-8" style={{ zIndex: 50 }} />
                    </a>
                </div>

                {/* Middle Grid - Navigation (hidden on mobile) */}
                <ul className="hidden md:flex justify-center gap-4 md:gap-14">
                    <li
                        className="hover:text-white cursor-pointer hover:bg-blue-500 p-1 px-2 rounded-lg"
                        style={{ transition: 'all 0.2s ease' }}
                        onClick={() => handleNavigation('/')}
                    >
                        Home
                    </li>
                    <li
                        className="hover:text-white cursor-pointer hover:bg-blue-500 p-1 px-2 rounded-lg"
                        style={{ transition: 'all 0.2s ease' }}
                        onClick={() => handleNavigation('/contact')}
                    >
                        Contact
                    </li>
                    <li
                        className="hover:text-white cursor-pointer hover:bg-blue-500 p-1 px-2 rounded-lg"
                        style={{ transition: 'all 0.2s ease' }}
                        onClick={() => handleNavigation('/about')}
                    >
                        About
                    </li>
                </ul>

                {/* Right Grid - Hamburger Menu (visible on mobile) */}
                <div className="flex justify-end md:hidden cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center md:hidden">
                    <div className="absolute top-3 right-[16px] cursor-pointer" onClick={toggleMenu}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <ul className="flex flex-col items-center gap-10">
                        <li
                            className="text-xl hover:text-blue-500 hover:font-semibold cursor-pointer"
                            onClick={() => handleNavigation('/')}
                        >
                            Home
                        </li>
                        <li
                            className="text-xl hover:text-blue-500 hover:font-semibold cursor-pointer"
                            onClick={() => handleNavigation('/contact')}
                        >
                            Contact
                        </li>
                        <li
                            className="text-xl hover:text-blue-500 hover:font-semibold cursor-pointer"
                            onClick={() => handleNavigation('/about')}
                        >
                            About
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
