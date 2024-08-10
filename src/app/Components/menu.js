

// import React from 'react';

// const Menu = () => {
//   return (
//     <div className="h-screen flex items-center justify-center bg-white">
//       <div className="bg-gray-100 border-8 border-indigo-800 p-8 text-center relative">
//         <h1 className="text-4xl font-bold mb-8">MENU</h1>
//         <ul className="space-y-6 text-2xl font-serif">
//           <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//           <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//           <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//           <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//         </ul>
//         <button className="absolute top-4 right-4 text-3xl font-bold hover:text-gray-600">X</button>
//       </div>
//     </div>
//   );
// };

// export default Menu;


import React from 'react';

const Menu = ({ closeMenu }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="bg-gray-100 border-8 border-indigo-800 p-8 text-center relative">
        <h1 className="text-4xl font-bold mb-8">MENU</h1>
        <ul className="space-y-6 text-2xl font-serif">
          <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
          <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
          <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
          <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
        </ul>
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-3xl font-bold hover:text-gray-600"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Menu;
