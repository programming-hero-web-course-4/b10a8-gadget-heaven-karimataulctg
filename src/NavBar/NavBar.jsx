import React from 'react';
import shoppingCart from '../assets/shopping-cart-NavIcon.png';
import heartIcon from '../assets/heartNavIcon.png';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Check if the current route matches the special pages
  const isSpecialPage = location.pathname.startsWith('/gadgets/') || 
                        location.pathname === '/dashboard' || 
                        location.pathname === '/wishlist' ||
                        location.pathname === '/statistics' ||
                        location.pathname === '/gadgetslide';

  return (
    <div className={`navbar mt-6 rounded-t-xl ${isSpecialPage ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Home</NavLink></li>
            <li><NavLink to="/statistics" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Statistics</NavLink></li>
            <li><NavLink to="/dashboard" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Dashboard</NavLink></li>
            <li><NavLink to="/gadgetslide" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Gadget Slide</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className='font-bold underline mr-2'><NavLink to="/" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Home</NavLink></li>
          <li><NavLink to="/statistics" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Statistics</NavLink></li>
          <li className='ml-2'><NavLink to="/dashboard" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Dashboard</NavLink></li>
          <li className='ml-2'><NavLink to="/gadgetslide" className={isSpecialPage ? 'text-[#9538E2]' : 'text-white'}>Gadget Slide</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/dashboard" className={`p-2 rounded-full mr-2 hover:cursor-pointer ${isSpecialPage ? 'bg-gray-200 text-[#9538E2]' : 'bg-white text-[#9538E2]'}`}>
          <img className='h-4 w-4' src={shoppingCart} alt="Cart" />
        </NavLink>
        <NavLink to="/wishlist" className={`p-2 rounded-full hover:cursor-pointer ${isSpecialPage ? 'bg-gray-200 text-[#9538E2]' : 'bg-white text-[#9538E2]'}`}>
          <img className='h-4 w-4' src={heartIcon} alt="Wishlist" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
