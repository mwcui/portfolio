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





