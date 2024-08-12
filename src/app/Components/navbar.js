// this is the navbar
// when the navbar is on the home page, hid the logo
// otherwise, always have the logo in the upper left corner

// "use client"

// import { useState } from 'react';
// import Menu from './menu';
// import Image from 'next/image';
// import Link from 'next/link'; // Import the Link component from Next.js
// import logo from '/public/logo.svg';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//     <nav className="fixed top-0 left-0 right-0 border">
//         <div className="flex justify-between items-center">
//         <Link href="/">
//             <Image src={logo} alt="Logo" width={125} height={125} className="object-contain cursor-pointer" />
//         </Link>
//         <div className="ml-auto px-4">
//             <button
//             onClick={toggleMenu}
//             className="text-lg text-white hover:text-gray-600 font-inika"
//             >
//             Menu
//             </button>
//         </div>
//         </div>
//     </nav>
//     {isMenuOpen && <Menu closeMenu={toggleMenu} />}
//     </>
//   );
// }


"use client"

import { useState } from 'react';
import Menu from './menu';
import Image from 'next/image';
import Link from 'next/link'; // Import the Link component from Next.js
import logo from '/public/logo.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" width={125} height={125} className="object-contain cursor-pointer" />
          </Link>
          <div className="ml-auto px-4">
            <button
              onClick={toggleMenu}
              className="text-lg text-white hover:text-gray-300 font-inika"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <Menu closeMenu={toggleMenu} />}
    </>
  );
}