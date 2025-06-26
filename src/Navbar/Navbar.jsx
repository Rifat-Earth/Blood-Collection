import React from 'react';
import { FaBars, FaTint } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl text-red-500">
                    <FaTint className="mr-2" /> Blood Collection
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className="flex-none lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <FaBars size={20} />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <div className="divider my-1" />
                        <li>
                            <Link to="/login" className="text-blue-500">Login</Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-green-500">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/" className="hover:text-red-500">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                    </li>
                </ul>
                <div className="flex gap-2">
                    <Link to="/login" className="btn btn-outline btn-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                        Login
                    </Link>
                    <Link to="/register" className="btn btn-outline btn-sm text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;