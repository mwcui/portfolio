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
//       <Template onMenuSelect={handleMenuSelection}>
//         <CurrentComponent />
//       </Template>
//       <BlockEffect onComplete={() => {}} />
//     </div>
//   );
// };

// export default Home;





"use client";

import { useEffect, useState } from 'react';
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
  const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo

  useEffect(() => {
    const content = document.getElementById("page-content");
    content.style.transition = "opacity 0.5s ease-in-out"; // Add transition for opacity
    content.style.opacity = "0"; // Start with the content hidden

    setTimeout(() => {
      content.style.opacity = "1"; // Fade in the content after a delay
    }, 1500); // Delay matches the block effect animation duration
  }, []);

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
  };

  const CurrentComponent = componentsMap[currentComponent] || Logo;

  return (
    <div>
      <div id="page-content">
        <Template onMenuSelect={handleMenuSelection}>
          <CurrentComponent />
        </Template>
      </div>
      <BlockEffect onComplete={() => {}} />
    </div>
  );
};

export default Home;
