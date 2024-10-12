import React, { useState } from 'react';
import { navLinks } from '../constants';

const NavItems = () => {
  return (
    <ul className='nav-ul'>
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className='nav-li'>
          <a href={href} className='nav-li_a '>{name}</a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div>
        <div className='flex justify-between items-center py-5 c-space'>
          <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
            Aayush Mehta
          </a>
          <button
            onClick={toggleMenu}
            className='sm:hidden flex text-neutral-400 hover:text-white focus:outline-none'
            aria-label='Toggle Menu'
          >
            <img
              src={isOpen ? "assets/close.svg" : 'assets/menu.svg'}
              alt='toggle'
              className='w-6 h-6'
            />
          </button>
          {/* Desktop Menu */}
          <nav className='sm:flex hidden'>
            <NavItems />
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`nav-sidebar sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <nav className='p-5'>
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
