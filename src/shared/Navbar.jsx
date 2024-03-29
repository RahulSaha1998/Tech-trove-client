import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "../components/NavItem";
import DarkMode from "../components/DarkMode";

const Navbar = () => {

    // toggle the navbar for responsive display
    const [isOpen, setIsOpen] = useState(false);
     

    //   navbar menu items
    const navItems = (
        <>
            <NavItem route="/" name="Home"></NavItem>
            <NavItem route="/addproduct" name="Add Product"></NavItem>
            <NavItem route="/allproducts" name="All Products"></NavItem>
            <NavItem route="/cart" name="Cart"></NavItem>
            <div className="text-gray-300"><DarkMode></DarkMode></div>
        </>
    );

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <span className="text-white text-xl uppercase font-semibold tracking-wider">
                                    Tꍟch <span className="text-yellow-500">Trove</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center">
                            <ul className="flex space-x-4">{navItems}</ul>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <ul className="flex flex-col">{navItems}</ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;