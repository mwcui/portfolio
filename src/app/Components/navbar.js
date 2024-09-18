// this is the navbar that appears at the top of every page

import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Menu from './menu';

export default function Navbar({ onMenuSelect, animationMidpoint, menuText, handlePageTransition }) {

  // there is a bunch of nunaced stuff here
  // from delaying the close of the menu UNTIL blockeffectfull gets to the halfway point
  // to the menu text based on the selected page


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const delayedCloseMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, animationMidpoint);
  };

  const handleLogoClick = () => {
    if (menuText !== 'MENU') {
      handlePageTransition('about', 'MENU');
    }
    // If already on 'ABOUT', do nothing
  };

  const handleMenuSelect = (selection) => {
    onMenuSelect(selection);
    delayedCloseMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px]">
        <div className="flex justify-between items-center h-full">
          <div className="h-full flex items-center cursor-pointer" onClick={handleLogoClick}>
            <Image
              src={logo}
              alt="Logo"
              width={125}
              height={125}
              className="object-contain h-full"
            />
          </div>
          <div className="ml-auto pr-4">
            <button
              onClick={toggleMenu}
              className="text-lg text-white hover:text-gray-300 hover:italic font-inika"
            >
              {menuText}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <Menu onMenuSelect={handleMenuSelect} closeMenu={delayedCloseMenu} animationMidpoint={animationMidpoint} />}
    </>
  );
}
