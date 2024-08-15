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




import React from 'react';
import Image from 'next/image';

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

  return (
    <div className="relative text-white min-h-screen p-8">
      {/* Sticky Creative Header */}
      <div className="font-inika top-0 py-4 z-10">
        <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
      </div>

      {/* Non-sticky Subheader and Text */}
      <div className="pt-8 font-inika">
        <h2 className="text-2xl text-center">Everest the Van</h2>
        <hr className="my-4  border-gray-500" />
        <p className="text-center mt-2">Everest was my experience with #vanlife</p>
        <p className="text-center">Would I do it again? Probably Not</p>
        <p className="text-center">Was it worth doing? definitely</p>
      </div>

      {/* Grid of Images */}
      {/* <div className="pt-8 grid grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image}
              alt={`Photo ${index + 1}`}
              // layout="fill"
              objectFit="cover"
              className="rounded-lg"
              width={300}
              height={300}
            />
          </div>
        ))}
      </div> */}

<div className="pt-8 grid grid-cols-3 gap-8">
  {images.map((image, index) => (
    <div key={index} className="relative w-full" style={{ paddingBottom: '100%' }}>
      <div className="absolute inset-0">
        <Image
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
  );
};

export default Creative;














// import Image from 'next/image';
// import Column1Photo from '/public/images/Everest_the_Van/Column1.jpeg';
// import Column2Photo from '/public/images/Everest_the_Van/Column2.jpeg';
// import Column3Photo from '/public/images/Everest_the_Van/Column3.JPG';
// import Column4Photo from '/public/images/Everest_the_Van/Column4.jpeg';
// import Column5Photo from '/public/images/Everest_the_Van/Column5.JPG';

// const EverestTheVan = ({ setSelectedPage }) => {

//   const handleColumn1Click = () => {
//     setSelectedPage('Column1');
//   };

//   return (
//     <div className="flex flex-col w-full h-screen bg-black text-white">
//       {/* Text Area at the Top */}
//       {/* <div className="flex flex-col items-center justify-center py-8">
//         <h1 className="text-4xl font-mono">Everest_the_Van</h1>
//         <hr className="my-4 w-1/3 border-gray-500" />
//         <p className="mt-1 text-center font-mono">
//           Everest was my experience with #vanlife <br />
//           <br />
//           Would I do it again? Probably not <br />
//           Was it worth doing? Definitely <br />
//           <br />
//           Sept 2018 - Mar 2021
//         </p>
//       </div> */}

// <div className="flex flex-col items-center justify-center py-[2%]">
//   <h1 className="font-mono text-[2vw]">Everest_the_Van</h1>
//   <hr className="my-[1%] w-1/3 border-gray-500" />
//   <p className="text-center font-mono text-[1vw]">
//     Everest was my experience with #vanlife <br />
//     <br />
//     Would I do it again? Probably not <br />
//     Was it worth doing? Definitely <br />
//     <br />
//     Sept 2018 - Mar 2021
//   </p>
// </div>



      
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