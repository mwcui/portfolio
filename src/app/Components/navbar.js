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
//       <nav className="fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <Image src={logo} alt="Logo" width={125} height={125} className="object-contain cursor-pointer" />
//           </Link>
//           <div className="ml-auto px-4">
//             <button
//               onClick={toggleMenu}
//               className="text-lg text-white hover:text-gray-300 font-inika"
//             >
//               MENU
//             </button>
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && <Menu closeMenu={toggleMenu} />}
//     </>
//   );
// }


// src/app/Components/navbar.js

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '/public/logo.svg';
// import Menu from './menu';
// import { useLogoVisibility } from './LogoVisibilityContext';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isLogoVisible } = useLogoVisibility();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             {isLogoVisible && (
//               <Image src={logo} alt="Logo" width={125} height={125} className="object-contain cursor-pointer" />
//             )}
//           </Link>
//           <div className="ml-auto px-4">
//             <button
//               onClick={toggleMenu}
//               className="text-lg text-white hover:text-gray-300 font-inika"
//             >
//               MENU
//             </button>
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && <Menu closeMenu={toggleMenu} />}
//     </>
//   );
// }



// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '/public/logo.svg';
// import Menu from './menu';
// import { useLogoVisibility } from './LogoVisibilityContext';

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isLogoVisible } = useLogoVisibility();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px]">
//         <div className="flex justify-between items-center h-full">
//           <Link href="/">
//             <div className="h-full flex items-center">
//               {isLogoVisible ? (
//                 <Image
//                   src={logo}
//                   alt="Logo"
//                   width={125}
//                   height={125}
//                   className="object-contain cursor-pointer h-full"
//                 />
//               ) : (
//                 <div style={{ width: '125px' }} /> 
//               )}
//             </div>
//           </Link>
//           <div className="ml-auto px-4">
//             <button
//               onClick={toggleMenu}
//               className="text-lg text-white hover:text-gray-300 font-inika"
//             >
//               MENU
//             </button>
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && <Menu closeMenu={toggleMenu} />}
//     </>
//   );
// }



// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import logo from '/public/logo.svg';
// import Menu from './menu';
// import { useLogoVisibility } from './LogoVisibilityContext';

// export default function Navbar({ onMenuSelect }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isLogoVisible } = useLogoVisibility();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleMenuSelect = (selection) => {
//     onMenuSelect(selection);
//     setIsMenuOpen(false); // Close the menu after selection
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px]">
//         <div className="flex justify-between items-center h-full">
//           <Link href="/">
//             <div className="h-full flex items-center">
//               {isLogoVisible ? (
//                 <Image
//                   src={logo}
//                   alt="Logo"
//                   width={125}
//                   height={125}
//                   className="object-contain cursor-pointer h-full"
//                 />
//               ) : (
//                 <div style={{ width: '125px' }} /> 
//               )}
//             </div>
//           </Link>
//           <div className="ml-auto px-4">
//             <button
//               onClick={toggleMenu}
//               className="text-lg text-white hover:text-gray-300 font-inika"
//             >
//               MENU
//             </button>
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && <Menu onMenuSelect={handleMenuSelect} closeMenu={toggleMenu} />}
//     </>
//   );
// }


// this stuff works. pre-routing

import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Menu from './menu';
import { useLogoVisibility } from './LogoVisibilityContext';
import InteractiveBlocks from './mouseeffect'; 

  // added this into the navbar bc when i started scrolling on the creative page, the text and photos
  // would overlap with the navbar
  // by adding the bg and InteractiveBlocks to the navbar, the contents of the page now get hidden below as i scroll

export default function Navbar({ onMenuSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogoVisible } = useLogoVisibility();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    onMenuSelect('logo');
  };

  const handleMenuSelect = (selection) => {
    onMenuSelect(selection);
    setIsMenuOpen(false); // Close the menu after selection
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px] bg-[#0C3B65]">
        <div className="flex justify-between items-center h-full">
          <div className="h-full flex items-center cursor-pointer" onClick={handleLogoClick}>
            {isLogoVisible ? (
              <Image
                src={logo}
                alt="Logo"
                width={125}
                height={125}
                className="object-contain h-full"
              />
            ) : (
              <div style={{ width: '125px' }} />
            )}
          </div>
          <div className="ml-auto pr-4">
            <button
              onClick={toggleMenu}
              className="text-lg text-white hover:text-gray-300 font-inika"
            >
              MENU
            </button>
          </div>
        </div>
      <InteractiveBlocks />
      </nav>
      {isMenuOpen && <Menu onMenuSelect={handleMenuSelect} closeMenu={toggleMenu} />}
    </>
  );
}


