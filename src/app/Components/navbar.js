// this is the navbar
// when the navbar is on the home page, hid the logo
// otherwise, always have the logo in the upper left corner




// import { useState } from 'react';
// import Image from 'next/image';
// import logo from '/public/logo.svg';
// import Menu from './menu';
// import { useLogoVisibility } from './LogoVisibilityContext';
// import InteractiveBlocks from './mouseeffect'; 

//   // added this into the navbar bc when i started scrolling on the creative page, the text and photos
//   // would overlap with the navbar
//   // by adding the bg and InteractiveBlocks to the navbar, the contents of the page now get hidden below as i scroll

// export default function Navbar({ onMenuSelect }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { isLogoVisible } = useLogoVisibility();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleLogoClick = () => {
//     onMenuSelect('logo');
//   };

//   const handleMenuSelect = (selection) => {
//     onMenuSelect(selection);
//     setIsMenuOpen(false); // Close the menu after selection
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px]">
//         <div className="flex justify-between items-center h-full">
//           <div className="h-full flex items-center cursor-pointer" onClick={handleLogoClick}>
//             {isLogoVisible ? (
//               <Image
//                 src={logo}
//                 alt="Logo"
//                 width={125}
//                 height={125}
//                 className="object-contain h-full"
//               />
//             ) : (
//               <div style={{ width: '125px' }} />
//             )}
//           </div>
//           <div className="ml-auto pr-4">
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



import { useState } from 'react';
import Image from 'next/image';
import logo from '/public/logo.svg';
import Menu from './menu';
import { useLogoVisibility } from './LogoVisibilityContext';

export default function Navbar({ onMenuSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogoVisible } = useLogoVisibility();
  const [selectedMenu, setSelectedMenu] = useState('MENU'); // State for the selected menu item

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const delayedCloseMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 500);
  };

  const handleLogoClick = () => {
    onMenuSelect('logo');
    setSelectedMenu('MENU'); // Reset to default when logo is clicked
  };

  const handleMenuSelect = (selection) => {
    onMenuSelect(selection);
    setSelectedMenu(selection.toUpperCase()); // Update the navbar text with the selected menu item
    delayedCloseMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[64.43px]">
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
              className="text-lg text-white hover:text-gray-300 hover:italic font-inika"
            >
              {selectedMenu} {/* Display the selected menu item */}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && <Menu onMenuSelect={handleMenuSelect} closeMenu={delayedCloseMenu} />}
    </>
  );
}
