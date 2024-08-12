// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg'
// import Navbar from './Components/navbar';
// import { Inter } from 'next/font/google';


// const Home = () => {
//   return (
    
//     <div className="bg-[#0C3B65] min-h-screen flex items-center justify-center">
//       {/* <InteractiveBlocks> */}
//       <Navbar />
//       {/* <AspectRatio> */}
//         <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
//       {/* </AspectRatio> */}
//       {/* </InteractiveBlocks> */}
//     </div>
//   );
// };

// export default Home;

// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg';
// import Navbar from './Components/navbar';

// const Home = () => {
//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen">
//       {/* Interactive Blocks as the background layer */}
//       <InteractiveBlocks />

//       {/* Content layer with Navbar and Logo */}
//       <div className="relative z-10 flex flex-col min-h-screen items-center justify-center">
//         <Navbar />
//         <div className="flex items-center z-10 justify-center flex-grow">
//           <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg';
// import Navbar from './Components/navbar';

// const Home = () => {
//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen">
//       {/* Interactive Blocks as the background layer */}
//       <InteractiveBlocks />

//       {/* Content layer with Navbar and Logo */}
//       <div className="relative z-20 flex flex-col min-h-screen items-center justify-center">
//         <Navbar />
//         <div className="flex items-center justify-center flex-grow">
//           <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg';
// import Navbar from './Components/navbar';

// const Home = () => {
//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen">
//       {/* Interactive Blocks as the background layer */}
//       <div className="flex items-center justify-center flex-grow">
//           <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
//       </div>
//       <Navbar />


//       <InteractiveBlocks>

//       {/* Content layer with Navbar and Logo */}
//       {/* <div className="relative z-1000 flex flex-col min-h-screen items-center justify-center">
        

//       </div> */}
//       </InteractiveBlocks>


//     </div>
//   );
// };

// export default Home;



// import Image from 'next/image';
// import InteractiveBlocks from './Components/mouseeffect';
// import logo from '/public/logo.svg';
// import Navbar from './Components/navbar';

// const Home = () => {
//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen flex flex-col">
//       <Navbar />
//       <InteractiveBlocks>
//         {/* Content layer with Logo */}
//         <div className="flex items-center justify-center flex-grow">
//           <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
//         </div>
//       </InteractiveBlocks>
//     </div>
//   );
// };

// export default Home;


"use client"

import { useEffect } from 'react';
import { Mouse } from 'moussejs';
import Image from 'next/image';
import InteractiveBlocks from './Components/mouseeffect';
import logo from '/public/logo.svg';
import Navbar from './Components/navbar';

const Home = () => {
  useEffect(() => {
    const mouse = new Mouse({
      mouse: 'cirle', // Set the shape of the mouse ('defult', 'cirle', or 'point')
      color: '#F5BD02', // Set the color of the mouse
      mouseHover: false, // No hover effect
      mousePointer: false, // Hide the default system cursor
      el: 'a', // Elements that should have hover effects
      el_hover: true, // Enable hover effects on elements
      mouse_clicked: true, // Enable click effects
      clrChanged: false, // Disable automatic color changes
    });

    mouse.mouse(); // Activate the custom mouse
  }, []);

  return (
    <div className="relative bg-[#0C3B65] min-h-screen flex flex-col">
      <Navbar />
      <InteractiveBlocks />
        <div className="flex items-center justify-center flex-grow z-10000">
          <Image src={logo} alt="Logo" width={500} height={500} className="object-contain" />
        </div>
    </div>
  );
};

export default Home;
