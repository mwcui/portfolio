"use client";

import { useEffect } from 'react';
import { Mouse } from 'moussejs';
import InteractiveBlocks from './mouseeffect';
import Navbar from './navbar';
import { LogoVisibilityProvider } from './LogoVisibilityContext';

const Template = ({ children, onMenuSelect, animationMidpoint, menuText }) => {
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
        />
        <InteractiveBlocks />
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </LogoVisibilityProvider>
  );
};

export default Template;



