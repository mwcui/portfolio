// this is the navbar
// when the navbar is on the home page, hid the logo
// otherwise, always have the logo in the upper left corner

"use client"

import { useState } from 'react';
import Menu from './menu';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component from Next.js
import logo from '/public/logo.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} className="object-contain cursor-pointer" />
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              className="text-lg text-gray-800 hover:text-gray-600 font-semibold"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <Menu closeMenu={toggleMenu} />}
    </>
  );
}
