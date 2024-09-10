"use client";

import { useEffect } from 'react';
import { Mouse } from 'moussejs';
import InteractiveBlocks from './InteractiveBlocks';
import Navbar from './navbar';
import { LogoVisibilityProvider } from './LogoVisibilityContext';
import Footer from './Footer';

const Template = ({ children, onMenuSelect, animationMidpoint, menuText, handlePageTransition }) => {
  useEffect(() => {
    const mouse = new Mouse({
      mouse: 'cirle',
      color: '#F5BD02',
      mouseHover: false,
      mousePointer: false,
      el: 'a',
      el_hover: true,
      mouse_clicked: true,
      clrChanged: false,
    });

    mouse.mouse(); // Activate the custom mouse
  }, []);

  return (
    <LogoVisibilityProvider>
      <div className="relative bg-[#0C3B65] min-h-screen flex flex-col">
        <Navbar 
          onMenuSelect={onMenuSelect} 
          animationMidpoint={animationMidpoint} 
          menuText={menuText} 
          handlePageTransition={handlePageTransition}
        />
        <InteractiveBlocks />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </LogoVisibilityProvider>
  );
};

export default Template;



