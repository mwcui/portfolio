// this is the home page of the website; what is seen on initial load

// the way the site works is that the home page has the the about page loaded up initially
// selections from the button (see my projects) or selections from the menu, changes the content of the home page

// in the background the template is always loaded. the idea is that the content on the page can change, while the template stays the same

"use client";

import { useState, useEffect, useRef } from 'react';
import BlockEffect from './Components/BlockEffect.js';
import Template from './Components/template.js';
import Logo from './Components/logo';
import Projects from './Projects/page.js';
import About from './About/page';


// this is for the menu. props that get used elsewhere in the app
const componentsMap = {
  projects: Projects,
  about: About,
  logo: Logo,
};

const Home = () => {

  // all initial states for the page
  const [isInitialLoad, setIsInitialLoad] = useState(true); // this is used for the block effect animation
  const [showContent, setShowContent] = useState(false); // this is used for initial page load. i wanted a slight delay before the content is shown so the block effect feels more natural
  const [currentComponent, setCurrentComponent] = useState('about'); // Start with About
  const [animationMidpoint, setAnimationMidpoint] = useState(500); // Default to 500ms. used for initial page load
  const [menuText, setMenuText] = useState('MENU'); // sets the menu text in the navbar
  const [runBlockEffect, setRunBlockEffect] = useState(true); // tool to control the block effect
  const [isFading, setIsFading] = useState(false); // fade transition selecting the "see my projects" button and the logo in the navbar

  // this entire section covers the different animations that happen when you select a different page, what occurs on intial page load, and some other stuff

  // makes sure the content on the page is always at the top when you select a different page
  // what having issues where i scrolled down projects, switched to about (home), and would have to scroll back up to see the about content
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentComponent]);

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
    // Always trigger the block effect, even if it's the same page
    setRunBlockEffect(true);
    setIsInitialLoad(false);

    // Use setTimeout to ensure the block effect starts before changing the component
    setTimeout(() => {
      setCurrentComponent(selection);
      setMenuText(customMenuText || selection.toUpperCase());
      window.scrollTo(0, 0); // Scroll to top immediately
    }, 0);
  };

  // Modified page transition function
  const handlePageTransition = (selection, customMenuText) => {
    setIsFading(true);
    setRunBlockEffect(false);
    
    setTimeout(() => {
      setCurrentComponent(selection);
      setMenuText(customMenuText || selection.toUpperCase());
      window.scrollTo(0, 0); // Scroll to top immediately
      
      // Use requestAnimationFrame to ensure the DOM has updated before we start fading in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsFading(false);
        });
      });
    }, 325); // Adjust this value to match your desired fade duration
  };

  const handleBlockEffect = () => {
    setIsInitialLoad(false)
  };

  // this updates the animationMidpoint based on the BlockEffect animation animatesquaresfullmidpoint
  const handleMidpointCalculated = (midpoint) => {
    setAnimationMidpoint(midpoint);
  };


  // starts the current component based on about
  const CurrentComponent = componentsMap[currentComponent] || About;


  // so the page is broken up like this:
  // block effect which runs on initial page load (animateSquaresHalf()) and when you select a different page (animateSquaresFull())
  // the template is the background for the page (so the bachground stays consistent)
  // the current component is the content of the page, which changes depending on what is selected (see my projects button, menu, or logo in the navbar)

  // all the props get passed down to the child components, there are a lot of them bc there are a lot of states that need to be managed/effects that need to be run

  return (
    <div>
      {runBlockEffect && (
        <BlockEffect 
          onComplete={() => {
            // Reset runBlockEffect after the animation completes
            setRunBlockEffect(false);
          }}
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
          handlePageTransition={handlePageTransition}
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