import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiGooglecolab } from "react-icons/si";

import LogoColored from "../../../assets/logo/logo-colored.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = ["Tentang", "Cara Kerja", "Visualisasi Data", "Demo"];

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="mx-auto py-2 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={LogoColored} alt="Logo" className="w-52"/>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                            className="text-gray-700 hover:text-primary transition"
                        >
                            {item}
                        </a>
                    ))}
                    
                </div>
                
                {/* Social Media */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href="https://colab.research.google.com/drive/1MU4ql2vNMBxWMJkAXCrWMZGEd6NrVQJh?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                        <SiGooglecolab size={24} className="text-lg" />
                        <span>GColab</span>
                    </a>
                    <a href="https://github.com/irsyamokta/frontend-neuroinsight" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                        <FaGithub className="text-lg" />
                        <span>Github</span>
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                        {isOpen ? <LuX size={24} /> : <LuMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden px-4 pb-4 space-y-2">
                    {menuItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                            className="block text-gray-700 hover:text-primary transition"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="https://colab.research.google.com" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                        <SiGooglecolab className="text-lg" />
                        <span>GColab</span>
                    </a>
                    <a href="https://github.com" className="flex items-center space-x-1 text-gray-700 hover:text-primary">
                        <FaGithub className="text-lg" />
                        <span>Github</span>
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;