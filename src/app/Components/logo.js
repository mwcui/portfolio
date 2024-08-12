// import React from 'react'
// import Image from 'next/image'
// import logo from '/public/logo.svg';

// const Logo = () => {
//   return (
//     <div className="flex items-center justify-center flex-grow z-10000">
//     <Image src={logo} alt="Logo" width={800} height={800} className="object-contain" />
//   </div>    
//   )
// }

// export default Logo

// src/app/Components/logo.js

"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import { useLogoVisibility } from './LogoVisibilityContext';

const Logo = () => {
  const { setIsLogoVisible } = useLogoVisibility();

  useEffect(() => {
    setIsLogoVisible(false);
    return () => setIsLogoVisible(true); // Reset visibility on unmount
  }, [setIsLogoVisible]);

  return (
    <div className="flex items-center justify-center flex-grow z-10000">
      <Image src={logo} alt="Logo" width={500} height={500} className="object-contain" />
    </div>
  );
};

export default Logo;
