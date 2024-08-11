const Menu = ({ closeMenu }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center checkered-bg z-50 p-4">
      <div className="bg-white w-full max-w-[calc(100vw-120px)] h-full max-h-[calc(100vh-120px)] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center p-4">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-6 text-3xl font-inika hover:text-gray-600"
        >
          X
        </button>
        <h1 className="text-5xl font-bold font-inika mb-10">MENU</h1>
        <ul className="space-y-6 text-3xl font-inika">
          <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
          <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
          <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
          <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;



// import React, { useEffect } from 'react';
// import { toggleCheckeredBackground } from './toggleCheckeredBackground';

// const Menu = ({ closeMenu }) => {
//   useEffect(() => {
//     // Apply the checkered background when the menu is open
//     toggleCheckeredBackground(true);

//     // Clean up: Remove the checkered background when the menu is closed
//     return () => toggleCheckeredBackground(false);
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 p-4 ">
//       <div className="bg-white w-full max-w-[calc(100vw-120px)] h-full max-h-[calc(100vh-120px)] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center p-4 checkered-bg">
//         <button
//           onClick={closeMenu}
//           className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
//         >
//           X
//         </button>
//         <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
//         <ul className="space-y-6 text-2xl font-inika">
//           <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//           <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//           <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//           <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Menu;


// import React, { useEffect } from 'react';
// import { toggleCheckeredBackground } from './toggleCheckeredBackground';

// const Menu = ({ closeMenu }) => {
//   useEffect(() => {
//     // Apply the checkered background when the menu is open
//     toggleCheckeredBackground(true);

//     // Clean up: Remove the checkered background when the menu is closed
//     return () => toggleCheckeredBackground(false);
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 p-4 checkered-bg">
//       <div className="bg-white w-full max-w-[calc(100vw-120px)] h-full max-h-[calc(100vh-120px)] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center p-4">
//         <button
//           onClick={closeMenu}
//           className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
//         >
//           X
//         </button>
//         <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
//         <ul className="space-y-6 text-2xl font-inika">
//           <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//           <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//           <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//           <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Menu;


// import React, { useEffect } from 'react';
// import { toggleCheckeredBackground } from './toggleCheckeredBackground';

// const Menu = ({ closeMenu }) => {
//   useEffect(() => {
//     // Apply the checkered background to the html and body when the menu is open
//     toggleCheckeredBackground(true);

//     // Clean up: Remove the checkered background when the menu is closed
//     return () => toggleCheckeredBackground(false);
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//       <div className="bg-white w-full max-w-[calc(100vw-120px)] h-full max-h-[calc(100vh-120px)] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center p-4">
//         <button
//           onClick={closeMenu}
//           className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
//         >
//           X
//         </button>
//         <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
//         <ul className="space-y-6 text-2xl font-inika">
//           <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//           <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//           <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//           <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Menu;
