// import React from 'react'

// const Creative = () => {
//   return (
//     <div className="text-white text-4xl">
//       this is the creative page
//     </div>
//   )
// }

// export default Creative



// import React from 'react';
// import Image from 'next/image';
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const images = [
//     img1,
//     img2,
//     img3,
//     img4,
//     img5,
//     img6,
//     img7,
//     img8,
//     img9,
//   ];

//   return (
//     <div className="relative text-white min-h-screen p-8">
//       <div className="fixed top-0 left-0 right-0 bg-[#0C3B65] py-4 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <p className="text-center mt-2">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="pt-32">
//         <div className="grid grid-cols-3 gap-8">
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full h-40">
//               <Image
//                 src={image}
//                 alt={`Photo ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creative;





// this code works

// import React from 'react';
// import Image from 'next/image';

// // Importing the images
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//   ];

//   return (
//     <div className="relative text-white min-h-screen ">
//       <div className="font-inika top-0 pt-28 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>
//       <div className="pt-8 font-inika">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4  border-gray-500" />
//         <p className="text-center mt-2">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

// <div className="pt-8 grid grid-cols-3 gap-2">
//   {images.map((image, index) => (
//     <div key={index} className="relative w-full" style={{ paddingBottom: '100%' }}>
//       <div className=" ">
//         <Image
//           src={image}
//           alt={`Photo ${index + 1}`}
//           objectFit="cover"
//           className="rounded-lg"
//           layout="fill"
//         />
//       </div>
//     </div>
//   ))}
// </div>


      
//     </div>
//   );
// };

// export default Creative;


// test 1

// import React from 'react';
// import Image from 'next/image';

// // Importing the images
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//   ];

//   return (
//     <div className="relative text-white min-h-screen">
//       <div className="font-inika top-0 pt-28 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>
//       <div className="pt-8 font-inika">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4 border-gray-500" />
//         <p className="text-center mt-2">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
//         {images.map((image, index) => (
//           <div key={index} className="relative w-full" style={{ paddingBottom: '100%' }}>
//             <div>
//               <Image
//                 src={image}
//                 alt={`Photo ${index + 1}`}
//                 objectFit="cover"
//                 className="rounded-lg"
//                 layout="fill"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Creative;



// test 2

// import React from 'react';
// import Image from 'next/image';

// // Importing the images
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//   ];

//   return (
//     <div className="relative text-white min-h-screen">
//       <div className="font-inika top-0 pt-28 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>
//       <div className="pt-8 font-inika">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4 border-gray-500" />
//         <p className="text-center mt-2">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100%', margin: '0 auto' }}>
//         {images.map((image, index) => (
//           <div key={index} className="relative w-full" style={{ paddingBottom: '100%' }}>
//             <div>
//               <Image
//                 src={image}
//                 alt={`Photo ${index + 1}`}
//                 objectFit="cover"
//                 className="rounded-lg"
//                 layout="fill"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Creative;


// test 3

// import React from 'react';
// import Image from 'next/image';

// // Importing the images
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//   ];

//   return (
//     <div className="font-inika text-white justify-center place-self-center text-wrap">
//       <div className="top-0 pt-28 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>
//       <div className="pt-8">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4 border-gray-500" />
//         <p className="text-center">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="flex justify-center">
//         <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw'}}>
//           {images.map((image, index) => (
//             <div key={index} className="relative justify-center" style={{ paddingBottom: '100%' }}>
//               <div>
//                 <Image
//                   src={image}
//                   alt={`Photo ${index + 1}`}
//                   objectFit="cover"
//                   className="rounded-lg"
//                   layout="fill"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creative;




// testing the image feature

// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';

// // Importing the images
// import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

// const Creative = () => {
//   const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

//   const images = [
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     image7,
//     image8,
//     image9,
//   ];

//   const handleImageClick = (image) => {
//     setSelectedImage(image); // Set the selected image
//   };

//   const handleClose = () => {
//     setSelectedImage(null); // Clear the selected image
//   };

//   return (
//     <div className="font-inika text-white justify-center place-self-center text-wrap">
//       <div className="top-0 pt-28 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>
//       <div className="pt-8">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4 border-gray-500" />
//         <p className="text-center">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="flex justify-center">
//         <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw'}}>
//           {images.map((image, index) => (
//             <div key={index} className="relative justify-center" style={{ paddingBottom: '100%' }}>
//               <div onClick={() => handleImageClick(image)} className="cursor-pointer">
//                 <Image
//                   src={image}
//                   alt={`Photo ${index + 1}`}
//                   objectFit="cover"
//                   className="rounded-lg"
//                   layout="fill"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Full-screen Image View */}
//       {selectedImage && (
//         <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
//           <div className="relative">
//             <Image
//               src={selectedImage}
//               alt="Selected Photo"
//               className="rounded-lg"
//               width={350} // Adjust the width as needed
//               height={350} // Adjust the height as needed
//               objectFit="contain" // Ensure the image is contained within the given dimensions
//             />
//             <button
//               onClick={handleClose}
//               className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Creative;





"use client";

import React, { useState, useEffect } from 'react';
import NextImage from 'next/image';  // Renaming Next.js Image component to avoid conflict

// Importing the images
import image1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
import image2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
import image3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
import image4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
import image5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
import image6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
import image7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
import image8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
import image9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

const Creative = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  // Preload images on component mount
  useEffect(() => {
    images.forEach((image) => {
      const img = new window.Image(); // Using native Image constructor for preloading
      img.src = image.src;
    });
  }, [images]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="font-inika text-white justify-center place-self-center text-wrap">
      <div className="top-0 pt-28 z-10">
        <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
      </div>
      <div className="pt-8">
        <h2 className="text-2xl text-center">Everest the Van</h2>
        <hr className="my-4 border-gray-500" />
        <p className="text-center">Everest was my experience with #vanlife</p>
        <p className="text-center">Would I do it again? Probably Not</p>
        <p className="text-center">Was it worth doing? definitely</p>
      </div>

      <div className="flex justify-center">
        <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw' }}>
          {images.map((image, index) => (
            <div key={index} className="relative justify-center" style={{ paddingBottom: '100%' }}>
              <div onClick={() => handleImageClick(image)} className="cursor-pointer">
                <NextImage
                  src={image}
                  alt={`Photo ${index + 1}`}
                  objectFit="cover"
                  className="rounded-lg"
                  layout="fill"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative">
            <NextImage
              src={selectedImage}
              alt="Selected Photo"
              className="rounded-lg"
              width={350} // Adjust the width as needed
              height={350} // Adjust the height as needed
              objectFit="contain" // Ensure the image is contained within the given dimensions
              priority // Ensure the image is loaded with priority
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Creative;




























      
//       {/* Image Columns */}
//       <div className="flex flex-row flex-grow items-end pb-[2%]">
//         <div className="flex-1 ml-[2%] mr-[1%] flex items-center justify-center h-full">
//           <button className="w-full h-full relative group" onClick={handleColumn1Click}>
//             <Image
//               src={Column1Photo}
//               alt="Everest_the_Van Image 1"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full rounded-full filter saturate-50 transition duration-300 group-hover:saturate-100 group-hover:transform group-hover:translate-y-2"
//             />
//           </button>
//         </div>
//         <div className="flex-1 mx-3 flex items-center justify-center h-full">
//           <button className="w-full h-full relative group">
//             <Image
//               src={Column2Photo}
//               alt="Everest_the_Van Image 2"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full rounded-full filter saturate-50 transition duration-300 group-hover:saturate-100 group-hover:transform group-hover:translate-y-2"
//             />
//           </button>
//         </div>
//         <div className="flex-1 mx-3 flex items-center justify-center h-full">
//           <button className="w-full h-full relative group">
//             <Image
//               src={Column3Photo}
//               alt="Everest_the_Van Image 3"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full rounded-full filter saturate-50 transition duration-300 group-hover:saturate-100 group-hover:transform group-hover:translate-y-2"
//             />
//           </button>
//         </div>
//         <div className="flex-1 mx-3 flex items-center justify-center h-full">
//           <button className="w-full h-full relative group">
//             <Image
//               src={Column4Photo}
//               alt="Everest_the_Van Image 4"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full rounded-full filter saturate-50 transition duration-300 group-hover:saturate-100 group-hover:transform group-hover:translate-y-2"
//             />
//           </button>
//         </div>
//         <div className="flex-1 ml-3 mr-6 flex items-center justify-center h-full">
//           <button className="w-full h-full relative group">
//             <Image
//               src={Column5Photo}
//               alt="Everest_the_Van Image 5"
//               layout="fill"
//               objectFit="cover"
//               className="w-full h-full rounded-full filter saturate-50 transition duration-300 group-hover:saturate-100 group-hover:transform group-hover:translate-y-2"
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EverestTheVan;



