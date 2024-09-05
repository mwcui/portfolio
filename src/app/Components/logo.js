

"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import { useLogoVisibility } from './LogoVisibilityContext';

const Logo = () => {
  return (
    <div className="flex items-center justify-center flex-grow z-10000">
      <Image src={logo} alt="Logo" width={700} height={700} className="object-contain" />
    </div>
  );
};

export default Logo;
