import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {};

const Navbar = ({ }: Props) =>
{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: 'Projects', href: '/projects' },
        { label: 'About', href: '/about' },
        { label: 'Community', href: '/community' },
        { label: 'Impact', href: '/impact' }
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center space-x-12">
                        {/* Modernized Logo */}
                        <Link to="/">
                            <div className="flex items-center cursor-pointer">
                                <span className="font-black text-3xl tracking-tight">
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">G</span>
                                    <span className="relative !text-black">T</span>
                                    <span className="relative !text-black">F</span>
                                </span>
                                <div className="ml-1 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            </div>
                        </Link>

                        {/* Simplified Desktop Menu Items */}
                        <div className="hidden md:flex space-x-10">
                            {menuItems.map((item) => (
                                <Link to={item.href}>
                                    <button
                                        key={item.label}
                                        className="relative text-gray-600 hover:text-green-600 font-medium transition-colors duration-200 outline-none focus:outline-none group"
                                    >
                                        <span className="relative py-2">
                                            {item.label}
                                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                                        </span>
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Modern Connect Wallet Button */}
                        <button className="hidden md:flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md">
                            Connect Wallet
                        </button>

                        {/* Refined Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-600" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Refined Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                            >
                                {item.label}
                            </button>
                        ))}
                        <button className="w-full mt-4 mb-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium text-sm shadow-sm">
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;