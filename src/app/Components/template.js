"use client";

import { useEffect, useState } from 'react';
import { Mouse } from 'moussejs';
import InteractiveBlocks from './InteractiveBlocks';
import Navbar from './navbar';
import { LogoVisibilityProvider } from './LogoVisibilityContext';
import Footer from './Footer';

const Template = ({ children, onMenuSelect, animationMidpoint, menuText, handlePageTransition }) => {
  const [mouseInstance, setMouseInstance] = useState(null);
  const [isMouseEffectActive, setIsMouseEffectActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMouseEffectActive(false);
      } else {
        setIsMouseEffectActive(true);
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMouseEffectActive && !mouseInstance) {
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
      setMouseInstance(mouse);
    } else if (!isMouseEffectActive && mouseInstance) {
      // Since we can't use .destroy(), we'll remove the custom cursor styles
      document.body.style.cursor = 'auto';
      const customCursor = document.querySelector('.mouse-cursor');
      if (customCursor) {
        customCursor.remove();
      }
      setMouseInstance(null);
    }
  }, [isMouseEffectActive, mouseInstance]);

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



