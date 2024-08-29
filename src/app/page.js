// this works with 277 - 303 block effect

// "use client";

// import { useState } from 'react';
// import BlockEffect from './Components/BlockEffect.js';
// import Template from './Components/template.js';
// import Logo from './Components/logo';
// import Creative from './Creative/page.js';
// import Experience from './Experience/page.js';
// import Contact from './Contact/page.js';
// import About from './About/page';


// const componentsMap = {
//   creative: Creative,
//   experience: Experience,
//   contact: Contact,
//   about: About,
// };

// const Home = () => {
//   const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo

//   const handleMenuSelection = (selection) => {
//     setCurrentComponent(selection);
//   };

//   const CurrentComponent = componentsMap[currentComponent] || Logo;

//   return (
//     <div>
//       <BlockEffect onComplete={() => {}} />
//       <Template onMenuSelect={handleMenuSelection}>
//         <CurrentComponent />
//       </Template>
//       {/* <BlockEffect onComplete={() => {}} /> */}
//     </div>
//   );
// };

// export default Home;




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
};

const Home = () => {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true); // Show content after block effect starts
    }, 0); // Delay matches the start of the block effect animation

    return () => clearTimeout(timeout);
  }, []);

  const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo
  const [showContent, setShowContent] = useState(false); // Control visibility of content

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
  };

  const CurrentComponent = componentsMap[currentComponent] || Logo;

  return (
    <div>
      <BlockEffect onComplete={() => {}} />
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Template onMenuSelect={handleMenuSelection}>
          <CurrentComponent />
        </Template>
      </div>
    </div>
  );
};

export default Home;











// sorta works. gives a cool fade effect

// "use client";

// import { useEffect, useState } from 'react';
// import BlockEffect from './Components/BlockEffect.js';
// import Template from './Components/template.js';
// import Logo from './Components/logo';
// import Creative from './Creative/page.js';
// import Experience from './Experience/page.js';
// import Contact from './Contact/page.js';
// import About from './About/page';

// const componentsMap = {
//   creative: Creative,
//   experience: Experience,
//   contact: Contact,
//   about: About,
// };

// const Home = () => {

//   useEffect(() => {
//     const content = document.getElementById("page-content");
//     content.style.transition = "opacity 0.5s ease-in-out"; // Add transition for opacity
//     content.style.opacity = "0"; // Start with the content hidden

//     setTimeout(() => {
//       content.style.opacity = "1"; // Fade in the content after a delay
//     }, 1500); // Delay matches the block effect animation duration
//   }, []);

//   const handleMenuSelection = (selection) => {
//     setCurrentComponent(selection);
//   };

//   const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo

//   const CurrentComponent = componentsMap[currentComponent] || Logo;

//   return (
//     <div>
//             <BlockEffect onComplete={() => {}} />
//       <div id="page-content">
//         <Template onMenuSelect={handleMenuSelection}>
//           <CurrentComponent />
//         </Template>
//       </div>
//       {/* <BlockEffect onComplete={() => {}} /> */}
//     </div>
//   );
// };

// export default Home;


