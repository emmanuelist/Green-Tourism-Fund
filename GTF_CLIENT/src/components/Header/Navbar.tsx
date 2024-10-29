import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () =>
{
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Handle mounting animation
    useEffect(() =>
    {
        setIsMounted(true);
    }, []);

    // Close menu when resizing to desktop view
    useEffect(() =>
    {
        const handleResize = () =>
        {
            if (window.innerWidth >= 768)
            {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                <div className="flex justify-between items-center h-16 md:h-20">
                    <div className="flex items-center space-x-6 md:space-x-12">
                        {/* Logo */}
                        <Link to="/">
                            <div className="flex items-center cursor-pointer">
                                <span className="font-black text-2xl md:text-3xl tracking-tight">
                                    <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">G</span>
                                    <span className="relative !text-black">T</span>
                                    <span className="relative !text-black">F</span>
                                </span>
                                <div className="ml-1 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                            </div>
                        </Link>

                        {/* Desktop Menu Items */}
                        <div className="hidden md:flex space-x-10">
                            {menuItems.map((item) => (
                                <Link key={item.label} to={item.href}>
                                    <button
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

                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Connect Wallet Button */}
                        <button className="hidden md:flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md">
                            Connect Wallet
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-gray-600" />
                            ) : (
                                <Menu className="h-6 w-6 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed left-0 right-0 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${isMounted ? 'transform' : 'transform translate-y-[-10px] opacity-0'
                        } ${isOpen
                            ? 'opacity-100 translate-y-0 visible'
                            : 'opacity-0 translate-y-[-10px] invisible'
                        }`}
                    style={{
                        top: '64px', // Matches the mobile header height
                        maxHeight: isOpen ? '100vh' : '0',
                        boxShadow: isOpen ? '0 4px 6px -1px rgb(0 0 0 / 0.1)' : 'none'
                    }}
                >
                    <div className="px-4 py-3 space-y-1">
                        {menuItems.map((item) => (
                            <Link key={item.label} to={item.href}>
                                <button
                                    className="block w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </button>
                            </Link>
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