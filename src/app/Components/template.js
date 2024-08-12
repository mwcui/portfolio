"use client";

import { useEffect } from 'react';
import { Mouse } from 'moussejs';
import InteractiveBlocks from './mouseeffect';
import Navbar from './navbar';

const Template = ({ children }) => {
  useEffect(() => {
    const mouse = new Mouse({
      mouse: 'cirle', // Set the shape of the mouse ('defult', 'cirle', or 'point')
      color: '#F5BD02', // Set the color of the mouse
      mouseHover: false, // No hover effect
      mousePointer: false, // Hide the default system cursor
      el: 'a', // Elements that should have hover effects
      el_hover: true, // Enable hover effects on elements
      mouse_clicked: true, // Enable click effects
      clrChanged: false, // Disable automatic color changes
    });

    mouse.mouse(); // Activate the custom mouse
  }, []);

  return (
    <div className="relative bg-[#0C3B65] min-h-screen flex flex-col">
      <Navbar />
      <InteractiveBlocks />
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Template;
