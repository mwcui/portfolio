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


  // this is for the initial page load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true); // Show content after block effect starts
    }, 0); // Delay matches the start of the block effect animation

    return () => clearTimeout(timeout);
  }, []);


  // animation for the menu selection
  const handleMenuSelection = (selection, customMenuText) => {
    setCurrentComponent(selection); // menu selection
    setIsInitialLoad(false); // this triggers the BlockEffect animation
    setMenuText(customMenuText || selection.toUpperCase()); // updates the menu text
  };

  // this is for the page transition (NO BLOCK EFFECT). used for logo and "See My Experience" button
  const handlePageTransition = (selection, customMenuText) => {
    setCurrentComponent(selection);
    setMenuText(customMenuText || selection.toUpperCase());
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
      <BlockEffect 
        onComplete={() => {}} // for testing purposes. how long does it take for the animations to complete
        isInitialLoad={isInitialLoad} // determines if we run animateSquaresHalf() or animateSquaresFull()
        onMidpointCalculated={handleMidpointCalculated} // midpoint of animateSquaresFullMidpoint()
      />
      <div
        className={`transition-opacity duration-600 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
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