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
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('about'); // Start with About
  const [animationMidpoint, setAnimationMidpoint] = useState(500); // Default to 500ms
  const [menuText, setMenuText] = useState('MENU');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true); // Show content after block effect starts
    }, 0); // Delay matches the start of the block effect animation

    return () => clearTimeout(timeout);
  }, []);

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
    setIsInitialLoad(false);
    setMenuText(selection.toUpperCase());
  };

  const handleMidpointCalculated = (midpoint) => {
    setAnimationMidpoint(midpoint);
  };

  const CurrentComponent = componentsMap[currentComponent] || About;

  return (
    <div>
      <BlockEffect 
        onComplete={() => {}} 
        isInitialLoad={isInitialLoad}
        onMidpointCalculated={handleMidpointCalculated}
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
          <CurrentComponent onMenuSelect={handleMenuSelection} />
        </Template>
      </div>
    </div>
  );
};

export default Home;