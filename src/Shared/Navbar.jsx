import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  let links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Contact", link: "/" },
  ]

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 md:px-36">
      <div className="md:flex justify-between items-center  py-4 ">

        <div className="font-bold text-lg">BlueSky </div>


        <div onClick={() => setIsOpen(!isOpen)} className='text-black text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>

          {isOpen ? <FaTimes></FaTimes> : <FaBars />}

        </div>


        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-18' : 'top-[-490px]'}`}>

          {
            links.map((link) => (
              <li className='md:ml-8 text-xl md:my-0 my-7'>
                <Link key={link.name} to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link></li>
            ))
          }

        </ul>

        <div className='md:flex md:items-center hidden'>
          <button><FaSearch /></button> 
          <Link to={`/`} className=' px-4'>LOG-IN</Link>
          <p>|</p>
          <Link to={`/`} className=' px-4'>SIGN UP</Link>
        </div>

        



      </div>
    </nav>
  );
};

export default Navbar;


