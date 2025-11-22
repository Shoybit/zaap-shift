import React from 'react';
import Logo from '../../Components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import UseAuth from '../../Hooks/useAuth';

const Navbar = () => {

const { user, logOut } = UseAuth();

const handleLogout = () => {
    logOut()
        .then(() => {
            console.log("Logged out successfully");
        })
        .catch((error) => {
            console.error("Logout Error:", error);
        });
};


    const links = (
        
  <>
    <li>
      <NavLink
        to="/service"
        className={({ isActive }) =>
          isActive
            ? "bg-[#caeb66] text-[#606060] px-3 py-2 rounded-md font-semibold"
            : "px-3 py-2"
        }
      >
        Service
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "bg-[#caeb66] text-[#606060] px-3 py-2 rounded-md font-semibold"
            : "px-3 py-2"
        }
      >
        About Us
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/cover"
        className={({ isActive }) =>
          isActive
            ? "bg-[#caeb66] text-[#606060] px-3 py-2 rounded-md font-semibold"
            : "px-3 py-2"
        }
      >
        Coverage
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/send-parcel"
        className={({ isActive }) =>
          isActive
            ? "bg-[#caeb66] text-[#606060] px-3 py-2 rounded-md font-semibold"
            : "px-3 py-2"
        }
      >
        Send Parcel
      </NavLink>
    </li>
  </>

       
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
        
            {/* Left Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" 
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" 
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <a className="btn btn-ghost text-xl">
                    <Logo />
                </a>
            </div>

            {/* Center Section */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

          <div className='navbar-end'>

        {
          user?
            <a onClick={handleLogout} className='btn'> Log Out</a> :
            <Link className='btn' to='/login'>Login</Link>
        }
        <Link className='btn btn-primary text-black mx-4' to='/rider'>Be a Rider</Link>

          </div>

        </div>
    );
};

export default Navbar;
