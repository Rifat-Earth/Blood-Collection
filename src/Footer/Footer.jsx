import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content px-6 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-xl font-bold text-red-500 mb-2">Blood Collection</h2>
                    <p className="text-sm">
                        A safe and reliable way to connect donors and recipients. Donate blood, save lives.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                        <li><Link to="/about" className="hover:text-red-500">About</Link></li>
                        <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
                        <li><Link to="/login" className="hover:text-red-500">Login</Link></li>
                        <li><Link to="/register" className="hover:text-red-500">Register</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sky-400 hover:text-sky-600">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:text-pink-700">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-800 hover:text-blue-900">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Blood Collection. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;