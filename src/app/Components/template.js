// this is the template that is used for every page. it contains the navbar, the interactive blocks, the footer, and the mouse (golden circle)
// the idea is that every page has this template in the background, hence why its called template


"use client";

import { useEffect, useState } from 'react';
import { Mouse } from 'moussejs'; // got this from codegrid youtube video
import InteractiveBlocks from './InteractiveBlocks'; // this is the blueprint background + highlight effect for the mouse
import Navbar from './navbar'; // this is the navbar
import { LogoVisibilityProvider } from './LogoVisibilityContext'; // this is an artifact of the logo visibility. turning on/off the logo in the navbar. keeping in case i want to use it in the future
import Footer from './Footer'; // this is the footer

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


    // this section runs the handleResize function once when the page loads, adds the event listener (which reads the page for size changes) then removes the event listener when the page is unmounted (preventing memory leaks)

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // this is the golden mouse that is on the screen. I found it off of some person from google
  // grabbed the code and plugged it in here
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
        <InteractiveBlocks /> {/* comment this out when debugging/adding items, it makes it way easier to update the code. this effect makes it difficult to using the inspect tool */}
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
        <Footer />
      </div>
    </LogoVisibilityProvider>
  );
};

export default Template;



