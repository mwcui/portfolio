// export default function Menu({ closeMenu }) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center checkered-bg z-50">
//         <div className="bg-white w-[90%] h-[90%]  text-center relative border-8 border-[#0C3B65]">
//           <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
//           <ul className="space-y-6 text-2xl font-inika">
//             <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//             <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//             <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//             <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//           </ul>
//           <button
//             onClick={closeMenu}
//             className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
//           >
//             X
//           </button>
//         </div>
//       </div>
//     );
//   }
  

// import React from 'react';

// const Menu = ({ closeMenu }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center checkered-bg z-50">
//       <div className="bg-white w-[90%] h-[90%] text-center relative border-8 border-[#0C3B65]">
//         <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
//         <ul className="space-y-6 text-2xl font-inika">
//           <li className="hover:text-gray-600 cursor-pointer">EXPERIENCE</li>
//           <li className="hover:text-gray-600 cursor-pointer">CREATIVE</li>
//           <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
//           <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
//         </ul>
//         <button
//           onClick={closeMenu}
//           className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
//         >
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Menu;



import React from 'react';

const Menu = ({ closeMenu }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center checkered-bg z-50">
      <div className="bg-white w-[90%] h-[90%] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-3xl font-inika hover:text-gray-600"
        >
          X
        </button>
        <h1 className="text-4xl font-bold font-inika mb-8">MENU</h1>
        <ul className="space-y-6 text-2xl font-inika">
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

