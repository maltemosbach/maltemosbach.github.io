// src/components/navBar.tsx
import React from 'react';
import { Link } from 'gatsby';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            {/* Menu open: "hidden", Menu closed: "block" */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/* Icon when menu is open. */}
                            {/* Menu open: "block", Menu closed: "hidden" */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link to="/" className="text-xl font-bold text-gray-800">My Site</Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link to="/work" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Work</Link>
                                <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state. */}
            {/* Menu open: "block", Menu closed: "hidden" */}
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link to="/work" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">Work</Link>
                    <Link to="/about" className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
