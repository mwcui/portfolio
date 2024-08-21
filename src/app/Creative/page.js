// "use client";

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';  // Renaming Next.js Image component to avoid conflict

// // Importing EverestImages
// import image1 from '/public/EverestTheVan/Column4.jpeg';
// import image2 from '/public/EverestTheVan/45991404_717704181939089_8783923192192249374_n.jpg';
// import image3 from '/public/EverestTheVan/IMG_5602.jpeg';
// import image4 from '/public/EverestTheVan/52670261_863556043982887_8109390835054743669_n.jpg';
// import image5 from '/public/EverestTheVan/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
// import image6 from '/public/EverestTheVan/Column1.jpeg';
// import image7 from '/public/EverestTheVan/IMG_8273.jpeg';
// import image8 from '/public/EverestTheVan/img044.jpg';
// import image9 from '/public/EverestTheVan/IMG_8928.jpeg';


// // Importing YPS assets
// import ypslogo from '/public/YourPersonalStory/Your_personal_story.svg';
// import image10 from '/public/YourPersonalStory/Collage.jpg';
// import image11 from '/public/YourPersonalStory/collage02.JPG';
// import image12 from '/public/YourPersonalStory/Collage20201208.JPG';
// import image13 from '/public/YourPersonalStory/Collage20210104_0001.JPG';
// import image14 from '/public/YourPersonalStory/Collage20210113_0001.JPG';
// import image15 from '/public/YourPersonalStory/Collage20210220_0001.JPG';
// import image16 from '/public/YourPersonalStory/Collage20210220_0002.jpg';
// import image17 from '/public/YourPersonalStory/IMG_1440.jpg';
// import image18 from '/public/YourPersonalStory/Collage20210221_0002.jpg';


// const Creative = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const EverestImages = [
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

//   const YPSImages = [
//     image10,
//     image11,
//     image12,
//     image13,
//     image14,
//     image15,
//     image16,
//     image17,
//     image18,
//   ];

//   // Preload EverestImages on component mount
//   useEffect(() => {
//     EverestImages.forEach((image) => {
//       const img = new window.Image(); // Using native Image constructor for preloading
//       img.src = image.src;
//     });
//   }, [EverestImages]);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleClose = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className="font-inika text-white justify-center place-self-center text-wrap">


//       <div className="top-0 pt-16 z-10">
//         <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
//       </div>

      
//       <div className="pt-12">
//       <div className="flex justify-center m-4">
//         <Image 
//           src={ypslogo} 
//           alt="Your Personal Story" 
//           width={200} 
//           height={300} 
//         />
//       </div>
//         <h2 className="text-2xl text-center ">Your Personal Story</h2>
//         <hr className="my-4 border-t-2 border-white w-[80%] mx-auto" />
//         <p className="text-center">Your Personal Story is a project that tells the stories behind photos.</p>
//         <p className="text-center mt-4">“If a picture is worth a thousand words, then a collage tells an entire story”</p>
//       </div>

//       <div className="flex justify-center">
//         <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw' }}>
//           {YPSImages.map((image, index) => (
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
//               width={400} // Adjust the width as needed
//               height={400} // Adjust the height as needed
//               objectFit="contain" // Ensure the image is contained within the given dimensions
//               priority // Ensure the image is loaded with priority
//             />
//             <button
//               onClick={handleClose}
//               className="absolute top-0 right-0 m-4 text-white text-3xl"
//             >
//               X
//             </button>
//           </div>
//         </div>
//       )}

//             {/* Everest the Van */}
//       <div className="pt-20">
//         <h2 className="text-2xl text-center">Everest the Van</h2>
//         <hr className="my-4 border-t-4 border-white w-[80%] mx-auto" />
//         <p className="text-center">Everest was my experience with #vanlife</p>
//         <p className="text-center">Would I do it again? Probably Not</p>
//         <p className="text-center">Was it worth doing? definitely</p>
//       </div>

//       <div className="flex justify-center">
//         <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw' }}>
//           {EverestImages.map((image, index) => (
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
//               priority // Ensure the image is loaded with priority
//             />
//             <button
//               onClick={handleClose}
//               className="absolute top-0 right-0 m-4 text-white text-3xl"
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
import Image from 'next/image';

// Importing images
import image1 from '/public/EverestTheVan/Column4.jpeg';
import image2 from '/public/EverestTheVan/45991404_717704181939089_8783923192192249374_n.jpg';
import image3 from '/public/EverestTheVan/IMG_5602.jpeg';
import image4 from '/public/EverestTheVan/52670261_863556043982887_8109390835054743669_n.jpg';
import image5 from '/public/EverestTheVan/4D2FC80D-BBD9-406E-AA75-3EE5766E0602.JPG';
import image6 from '/public/EverestTheVan/Column1.jpeg';
import image7 from '/public/EverestTheVan/IMG_8273.jpeg';
import image8 from '/public/EverestTheVan/img044.jpg';
import image9 from '/public/EverestTheVan/IMG_8928.jpeg';

import ypslogo from '/public/YourPersonalStory/Your_personal_story.svg';
import image10 from '/public/YourPersonalStory/Collage.jpg';
import image11 from '/public/YourPersonalStory/collage02.JPG';
import image12 from '/public/YourPersonalStory/Collage20201208.JPG';
import image13 from '/public/YourPersonalStory/Collage20210104_0001.JPG';
import image14 from '/public/YourPersonalStory/Collage20210113_0001.JPG';
import image15 from '/public/YourPersonalStory/Collage20210220_0001.JPG';
import image16 from '/public/YourPersonalStory/Collage20210220_0002.jpg';
import image17 from '/public/YourPersonalStory/IMG_1440.jpg';
import image18 from '/public/YourPersonalStory/Collage20210221_0002.jpg';

const Creative = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const EverestImages = [
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

  const YPSImages = [
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
  ];

  // Preload images on component mount
  useEffect(() => {
    EverestImages.concat(YPSImages).forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="font-inika text-white justify-center place-self-center text-wrap">
      <div className="top-0 pt-16 z-10">
        <h1 className="text-6xl font-bold text-center">CREATIVE</h1>
      </div>

      <div className="pt-12">
        <div className="flex justify-center m-4">
          <Image 
            src={ypslogo} 
            alt="Your Personal Story" 
            width={200} 
            height={300} 
            priority // Load the logo with high priority
          />
        </div>
        <h2 className="text-2xl text-center">Your Personal Story</h2>
        <hr className="my-4 border-t-2 border-white w-[80%] mx-auto" />
        <p className="text-center">Your Personal Story is a project that tells the stories behind photos.</p>
        <p className="text-center mt-4">“If a picture is worth a thousand words, then a collage tells an entire story”</p>
      </div>

      <div className="flex justify-center">
        <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw' }}>
          {YPSImages.map((image, index) => (
            <div key={index} className="relative justify-center" style={{ paddingBottom: '100%' }}>
              <div onClick={() => handleImageClick(image)} className="cursor-pointer">
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  placeholder="blur" // Use blur-up placeholder
                  blurDataURL={image.blurDataURL || image.src} // Provide a blur-up placeholder
                  priority={index < 3} // Prioritize the first 3 images for faster loading
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
            <Image
              src={selectedImage}
              alt="Selected Photo"
              className="rounded-lg"
              width={400}
              height={400}
              objectFit="contain"
              priority // Ensure the image is loaded with priority
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-white text-3xl"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Everest the Van */}
      <div className="pt-20">
        <h2 className="text-2xl text-center">Everest the Van</h2>
        <hr className="my-4 border-t-4 border-white w-[80%] mx-auto" />
        <p className="text-center">Everest was my experience with #vanlife</p>
        <p className="text-center">Would I do it again? Probably Not</p>
        <p className="text-center">Was it worth doing? definitely</p>
      </div>

      <div className="flex justify-center">
        <div className="pt-8 grid grid-cols-3 gap-2" style={{ width: '500px', maxWidth: '100vw' }}>
          {EverestImages.map((image, index) => (
            <div key={index} className="relative justify-center" style={{ paddingBottom: '100%' }}>
              <div onClick={() => handleImageClick(image)} className="cursor-pointer">
                <Image
                  src={image}
                  alt={`Photo ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  placeholder="blur" // Use blur-up placeholder
                  blurDataURL={image.blurDataURL || image.src} // Provide a blur-up placeholder
                  priority={index < 3} // Prioritize the first 3 images for faster loading
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
            <Image
              src={selectedImage}
              alt="Selected Photo"
              className="rounded-lg"
              width={350}
              height={350}
              objectFit="contain"
              priority // Ensure the image is loaded with priority
            />
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-white text-3xl"
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
