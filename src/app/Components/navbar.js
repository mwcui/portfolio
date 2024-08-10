// this is the navbar
// when the navbar is on the home page, hid the logo
// otherwise, always have the logo in the upper left corner


// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">
//           <Link href="/" className="text-gray-800 hover:text-gray-600">
//             MyLogo
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }



// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold">
//           <Link href="/" className="text-gray-800 hover:text-gray-600">
//             MyLogo
//           </Link>
//         </div>
//         <div>
//           <Link href="/menu" passHref>
//             <button className="text-lg text-gray-800 hover:text-gray-600 font-semibold">
//               Menu
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client"

import { useState } from 'react';
import Menu from './menu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <a href="/" className="text-gray-800 hover:text-gray-600">
              MyLogo
            </a>
          </div>
          <div>
            <button
              onClick={toggleMenu}
              className="text-lg text-gray-800 hover:text-gray-600 font-semibold"
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
