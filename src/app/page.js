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


import Image from 'next/image';
import InteractiveBlocks from './Components/mouseeffect';
import logo from '/public/logo.svg';
import Navbar from './Components/navbar';

const Home = () => {
  return (
    <div className="relative bg-[#0C3B65] min-h-screen">
      {/* Interactive Blocks as the background layer */}
      <InteractiveBlocks>

      {/* Content layer with Navbar and Logo */}
      <div className="relative z-1000 flex flex-col min-h-screen items-center justify-center">
        <Navbar />
        <div className="flex items-center justify-center flex-grow">
          <Image src={logo} alt="Logo" width={300} height={300} className="object-contain" />
        </div>
      </div>
      </InteractiveBlocks>
    </div>
  );
};

export default Home;

