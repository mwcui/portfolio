// import React from 'react'

// const Creative = () => {
//   return (
//     <div className="text-white text-4xl">
//       this is the creative page
//     </div>
//   )
// }

// export default Creative



// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// const photoFolderPath = '/public/EverestTheVan/Column1';
// const totalPhotos = 9; // Assuming there are 9 photos per grid

// const Creative = () => {
//   const [photos, setPhotos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     // Assuming the photos are named sequentially (e.g., photo1.jpg, photo2.jpg, etc.)
//     const photoPaths = Array.from({ length: totalPhotos }, (_, i) => `${photoFolderPath}photo${i + 1}.jpg`);
//     setPhotos(photoPaths);
//   }, []);

//   const photosPerPage = 9;
//   const totalPages = Math.ceil(photos.length / photosPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="relative bg-[#0C3B65] min-h-screen flex flex-col items-center">
//       {/* Fixed title section */}
//       <div className="fixed top-0 left-0 right-0 bg-[#0C3B65] z-10 text-center py-5">
//         <h1 className="text-white text-6xl font-bold">CREATIVE</h1>
//         <p className="text-white text-xl">Everest the Van</p>
//         <p className="text-white text-md">
//           Everest was my experience with #vanlife<br />
//           Would I do it again? Probably Not<br />
//           Was it worth doing? definitely
//         </p>
//       </div>

//       {/* Photo grid section */}
//       <div className="mt-48 flex overflow-x-scroll space-x-10 p-5">
//         <div className="flex space-x-10">
//           {Array.from({ length: totalPages }).map((_, pageIndex) => (
//             <div key={pageIndex} className="grid grid-cols-3 gap-4">
//               {photos.slice(pageIndex * photosPerPage, (pageIndex + 1) * photosPerPage).map((photo, index) => (
//                 <div key={index} className="w-40 h-40 relative">
//                   <Image src={photo} alt={`Photo ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Pagination Controls */}
//       <div className="fixed bottom-0 left-0 right-0 flex justify-between p-5 bg-[#0C3B65]">
//         <button onClick={prevPage} disabled={currentPage === 0} className="text-white">Previous</button>
//         <button onClick={nextPage} disabled={currentPage === totalPages - 1} className="text-white">Next</button>
//       </div>
//     </div>
//   );
// };

// export default Creative;



// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const Creative = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Assuming you know the filenames or can retrieve them programmatically
//     const imagePaths = [
//       '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG',
//       '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg',
//       '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg',
//       // Add more image paths here
//     ];
//     setImages(imagePaths);
//   }, []);

//   const gridSize = 3; // Define grid size

//   return (
//     <div className="text-white text-center p-8">
//       <h1 className="text-5xl font-bold">CREATIVE</h1>
//       <h2 className="text-2xl mt-2">Everest the Van</h2>
//       <p className="text-lg mt-4">Everest was my experience with #vanlife</p>
//       <p className="text-lg">Would I do it again? Probably Not</p>
//       <p className="text-lg">Was it worth doing? Definitely</p>

//       <div className="mt-8 overflow-x-auto">
//         <div className="inline-flex space-x-8">
//           {Array.from({ length: Math.ceil(images.length / gridSize ** 2) }).map((_, index) => (
//             <div key={index} className="grid grid-cols-3 gap-4 w-[300px] h-[300px]">
//               {images.slice(index * gridSize ** 2, (index + 1) * gridSize ** 2).map((src, idx) => (
//                 <div key={idx} className="relative w-full h-full">
//                   <Image
//                     src={src}
//                     alt={`Photo ${index * gridSize ** 2 + idx + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creative;



// import React from 'react';
// import Image from 'next/image';

// const Creative = () => {
//   const images = [
//     // Replace with your actual image paths
//     '/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG',
//     '/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg',
//     '/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg',
//     '/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg',
//     '/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg',
//     '/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg',
//     '/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg',
//     '/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg',
//     '/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg',
//     // Add more images as needed
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

//       {/* Add a spacer to push content below the fixed header */}
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



// import React from 'react';
// import Image from 'next/image';

// const Creative = () => {
//   const images = [
//     '/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG',
//     '/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg',
//     '/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg',
//     '/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg',
//     '/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg',
//     '/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg',
//     '/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg',
//     '/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg',
//     '/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg',
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

//       {/* Add a spacer to push content below the fixed header */}
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
//                 priority // This can help ensure images load properly
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creative;


// import React from 'react';
// import Image from 'next/image';

// // Static imports for the images
// import img1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import img2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
// import img3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
// import img4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
// import img5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
// import img6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
// import img7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import img8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
// import img9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

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

//       {/* Add a spacer to push content below the fixed header */}
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
//                 priority // Ensures images load quickly
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Creative;


import React from 'react';
import Image from 'next/image';
import img1 from '/public/EverestTheVan/Column1/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
import img2 from '/public/EverestTheVan/Column1/43526335_540335119773642_3633964151634513646_n.jpg';
import img3 from '/public/EverestTheVan/Column1/43913765_745471489144624_6794989592274714758_n.jpg';
import img4 from '/public/EverestTheVan/Column1/44805728_458688047869595_8855460207580953527_n.jpg';
import img5 from '/public/EverestTheVan/Column1/45299541_276334803085163_2005946314950687511_n.jpg';
import img6 from '/public/EverestTheVan/Column1/45704660_2162830243956641_3297561469725675227_n.jpg';
import img7 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
import img8 from '/public/EverestTheVan/Column1/46556922_1991246224284455_8257869488090615571_n.jpg';
import img9 from '/public/EverestTheVan/Column1/45842265_201957070742904_7103791088184030935_n.jpg';

const Creative = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ];

  return (
    <div className="relative text-white min-h-screen p-8">
      <div className="fixed top-0 left-0 right-0 bg-[#0C3B65] py-4 z-10">
        <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
        <h2 className="text-2xl text-center">Everest the Van</h2>
        <p className="text-center mt-2">Everest was my experience with #vanlife</p>
        <p className="text-center">Would I do it again? Probably Not</p>
        <p className="text-center">Was it worth doing? definitely</p>
      </div>

      <div className="pt-32">
        <div className="grid grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-40">
              <Image
                src={image}
                alt={`Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Creative;
