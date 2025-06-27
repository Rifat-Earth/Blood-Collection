import React, { use } from 'react';
import { FaBars, FaTint } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { CgProfile } from 'react-icons/cg';
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user,logOutUser} = use(AuthContext)

    const handleLogOut =()=>{
      logOutUser()
            .then(() => {
                Swal.fire({
                    title: "logged Out",
                    icon: "success",
                    draggable: true
                });
                console.log('sign out')
                    .catch(error => {
                        console.log(error)
                    })
            })
    }


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
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <div className="divider my-1" />
                        {!user ? (
                            <>
                                <li><Link to="/login" className="text-blue-500">Login</Link></li>
                                <li><Link to="/register" className="text-green-500">Register</Link></li>
                            </>
                        ) : (
                            <li><button onClick={handleLogOut} className="text-red-500">Logout</button></li>
                        )}
                    </ul>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                    <li><Link to="/about" className="hover:text-red-500">About</Link></li>
                    <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
                </ul>

                <div className="flex gap-2 items-center">
                    {user && (
                        <NavLink
                            to="/myProfile"
                            className={({ isActive }) => isActive ? "text-green-400 font-bold flex gap-2" : "flex gap-2"}
                        >
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    title={user.name || "My Profile"}
                                    className="rounded-full w-8 h-8 object-cover border border-gray-300"
                                />
                            ) : (
                                <CgProfile size={24} />
                            )}
                            <span className="font-semibold hidden sm:inline p-2">{user.name || 'My Profile'}</span>
                        </NavLink>
                    )}

                    {user ? (
                        <button onClick={handleLogOut} className="btn btn-outline btn-sm text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                            Log out
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-outline btn-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                                Login
                            </Link>
                            <Link to="/register" className="btn btn-outline btn-sm text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;