import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className="flex justify-between items-center mt-3 px-4">
                <ul className="hidden md:flex gap-4 md:gap-14 md:mr-[38%] mx-auto">
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

                <div className="md:hidden cursor-pointer absolute right-[10px] mt-8" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
                    <div className="absolute top-4 right-[10px] cursor-pointer" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <ul className="flex flex-col items-center gap-6">
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
