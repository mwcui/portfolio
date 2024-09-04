// testing. this works perfect

"use client";

import { useState, useEffect } from 'react';
import BlockEffect from './Components/BlockEffect.js';
import Template from './Components/template.js';
import Logo from './Components/logo';
import Creative from './Creative/page.js';
import Experience from './Experience/page.js';
import Contact from './Contact/page.js';
import About from './About/page';

const componentsMap = {
  creative: Creative,
  experience: Experience,
  contact: Contact,
  about: About,
  logo: Logo,
};

const Home = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true); // this is used for the block effect animation
  const [showContent, setShowContent] = useState(false); // this is used for initial page load
  const [currentComponent, setCurrentComponent] = useState('about'); // Start with About
  const [animationMidpoint, setAnimationMidpoint] = useState(500); // Default to 500ms. used for initial page load
  const [menuText, setMenuText] = useState('MENU');
  const [runBlockEffect, setRunBlockEffect] = useState(true); // New state to control block effect
  const [isFading, setIsFading] = useState(false);

  // Initial page load effect
  useEffect(() => {
    if (isInitialLoad) {
      const timeout = setTimeout(() => {
        setShowContent(true); // Show content after block effect starts
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [isInitialLoad, animationMidpoint]);

  // animation for the menu selection
  const handleMenuSelection = (selection, customMenuText) => {
    setCurrentComponent(selection); // menu selection
    setIsInitialLoad(false); // this triggers the BlockEffect animation
    setMenuText(customMenuText || selection.toUpperCase()); // updates the menu text
    setRunBlockEffect(true); // Enable block effect for menu selections
  };

  // Modified page transition function
  const handlePageTransition = (selection, customMenuText) => {
    setIsFading(true);
    setRunBlockEffect(false);
    
    setTimeout(() => {
      setCurrentComponent(selection);
      setMenuText(customMenuText || selection.toUpperCase());
      
      // Use requestAnimationFrame to ensure the DOM has updated before we start fading in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsFading(false);
        });
      });
    }, 300); // Adjust this value to match your desired fade duration
  };

  const handleBlockEffect = () => {
    setIsInitialLoad(false)
  };

  // this updates the animationMidpoint based on the BlockEffect animation animatesquaresfullmidpoint
  const handleMidpointCalculated = (midpoint) => {
    setAnimationMidpoint(midpoint);
  };

  const CurrentComponent = componentsMap[currentComponent] || About;

  return (
    <div>
      {runBlockEffect && (
        <BlockEffect 
          onComplete={() => {}} // for testing purposes. how long does it take for the animations to complete
          isInitialLoad={isInitialLoad} // determines if we run animateSquaresHalf() or animateSquaresFull()
          onMidpointCalculated={handleMidpointCalculated} // midpoint of animateSquaresFullMidpoint()
        />
      )}
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          (showContent && !isFading) ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Template 
          onMenuSelect={handleMenuSelection} 
          animationMidpoint={animationMidpoint}
          menuText={menuText}
        >
          <CurrentComponent 
            handlePageTransition={handlePageTransition}
            handleBlockEffect={handleBlockEffect}
            animationMidpoint={animationMidpoint}
          />
        </Template>
      </div>
    </div>
  );
};

export default Home;