// this works with 277 - 303 block effect

"use client";

import { useState } from 'react';
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

  const handleMenuSelection = (selection) => {
    setCurrentComponent(selection);
  };

  const CurrentComponent = componentsMap[currentComponent] || Logo;

  return (
    <div>
      <Template onMenuSelect={handleMenuSelection}>
        <CurrentComponent />
      </Template>
      <BlockEffect onComplete={() => {}} />
    </div>
  );
};

export default Home;
