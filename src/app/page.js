// "use client"

// import { useState } from 'react';
// import Template from './Components/template.js';
// import Logo from './Components/logo';
// import Creative from './Creative/page.js';
// import Experience from './Experience/page.js'; // Assume this is another page component
// import Contact from './Contact/page.js'; // Assume this is another page component
// import About from './About/page';
// import BlockEffect from './Components/BlockEffect.js';

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
//     <BlockEffect />
//     <Template onMenuSelect={handleMenuSelection}>
//       <CurrentComponent />
//     </Template>
//     </div>
//   );
// };

// export default Home;



// testing block effect. this works. orange part does not

"use client";

import { useState } from 'react';
import Template from './Components/template.js';
import Logo from './Components/logo';
import Creative from './Creative/page.js';
import Experience from './Experience/page.js';
import Contact from './Contact/page.js';
import About from './About/page';
import BlockEffect from './Components/BlockEffect.js';

const componentsMap = {
  creative: Creative,
  experience: Experience,
  contact: Contact,
  about: About,
};

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo
  const [showContent, setShowContent] = useState(false); // Control visibility of content

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
  };

  const handleBlockEffectComplete = () => {
    setShowContent(true); // Show content after block effect is complete
  };

  const CurrentComponent = componentsMap[currentComponent] || Logo;

  return (
    <div>
      {!showContent && <BlockEffect onComplete={handleBlockEffectComplete} />}
      {showContent && (
        <Template onMenuSelect={handleMenuSelection}>
          <CurrentComponent />
        </Template>
      )}
    </div>
  );
};

export default Home;
