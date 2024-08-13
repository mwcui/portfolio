// "use client"

// import { useEffect } from 'react';
// import { Mouse } from 'moussejs';
// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg';
// import Navbar from './Components/navbar';

// const Home = () => {
//   useEffect(() => {
//     const mouse = new Mouse({
//       mouse: 'cirle', // Set the shape of the mouse ('defult', 'cirle', or 'point')
//       color: '#F5BD02', // Set the color of the mouse
//       mouseHover: false, // No hover effect
//       mousePointer: false, // Hide the default system cursor
//       el: 'a', // Elements that should have hover effects
//       el_hover: true, // Enable hover effects on elements
//       mouse_clicked: true, // Enable click effects
//       clrChanged: false, // Disable automatic color changes
//     });

//     mouse.mouse(); // Activate the custom mouse
//   }, []);

//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen flex flex-col">
//       <Navbar />
//       <InteractiveBlocks />
//         {/* <div className="flex items-center justify-center flex-grow z-10000">
//           <Image src={logo} alt="Logo" width={500} height={500} className="object-contain" />
//         </div> */}
//     </div>
//   );
// };

// export default Home;



// import Template from './Components/template';
// import Logo from './Components/logo';

// const Home = () => {
//   return (
//     <Template>
//       <Logo />
//   </Template>
//   );
// };

// export default Home;





// "use client"

// import { useState } from 'react';
// import Template from './Components/template.js';
// import Logo from './Components/logo';
// import Creative from './Creative/page.js';
// import Experience from './Experience/page.js'; // Assume this is another page component
// import Contact from './Contact/page.js'; // Assume this is another page component
// import About from './About/page';
// import Menu from './Components/menu.js';

// const componentsMap = {
//   logo: Logo,
//   creative: Creative,
//   experience: Experience,
//   contact: Contact,
//   about: About,
// };

// const Home = () => {
//   const [currentComponent, setCurrentComponent] = useState('logo'); // Default to logo

//   const handleMenuSelection = (selection) => {
//     setCurrentComponent(selection);
//   };

//   const CurrentComponent = componentsMap[currentComponent] || Logo;

//   return (
//     <Template>
//       <CurrentComponent />
//       <Menu onMenuSelect={handleMenuSelection} />
//     </Template>
//   );
// };

// export default Home;


"use client"

import { useState } from 'react';
import Template from './Components/template.js';
import Logo from './Components/logo';
import Creative from './Creative/page.js';
import Experience from './Experience/page.js'; // Assume this is another page component
import Contact from './Contact/page.js'; // Assume this is another page component
import About from './About/page';

const componentsMap = {
  creative: Creative,
  experience: Experience,
  contact: Contact,
  about: About,
};

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState('logo'); // Start with Logo

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
  };

  const CurrentComponent = componentsMap[currentComponent] || Logo;

  return (
    <Template onMenuSelect={handleMenuSelection}>
      <CurrentComponent />
    </Template>
  );
};

export default Home;
