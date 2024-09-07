"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ArtistAnalytics1 from '/public/ArtistAnalytics/Symphony_1tr-01 (3).svg';
import ArtistAnalytics2 from '/public/ArtistAnalytics/Symphony_2 Outline.svg';
import ArtistAnalytics3 from '/public/ArtistAnalytics/Symphony_3 Outline.svg';
import ArtistAnalyticsTable from '/public/Tables/image (1).svg';
// Import additional images as needed

const Experience = () => {
  const images = [
    { src: ArtistAnalytics1, alt: "First SVG", title: "Artist Analytics 1" },
    { src: ArtistAnalytics2, alt: "Second SVG", title: "Artist Analytics 2" },
    { src: ArtistAnalytics3, alt: "Third SVG", title: "Artist Analytics 3" },
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center text-white font-inika py-10 px-4">
        <div className="w-[700px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4 ">
        <h1 className="text-2xl font-bold">Project: Artist Analytics</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={800}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded text-xs">
            {selectedImage.title}
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
        {/* Photo Slider */}
        <div className="w-4/5 overflow-x-auto relative bg-gray-600">
          <div className="flex space-x-4 min-w-max">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0  overflow-hidden cursor-pointer ${selectedImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="h-28 w-48 relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="relative">
          <Image
                src={ArtistAnalyticsTable}
                alt={"First SVG"}
                width={800}
                height={450}
                objectFit="cover"
              />
          </div>
              </div>

    </div>



    





  );
};

export default Experience;






// {/* SVG Files */}
// <div className="w-full mx-auto">
// <div className="mb-8">
// <Image
//  src={ArtistAnalytics1}
//  alt="First SVG"
//  layout="responsive"
//  width={600}
//  height={360} // Adjust the height proportionally to the width
//  className="object-cover"
// />
// </div>


// {/* Photo Slider */}
// <div className="w-full overflow-x-auto pb-2 relative"> {/* relative allows me to put the images on top of the blocks. I dunno why */}
// <div className="flex space-x-4 min-w-max">
//  {images.map((image, index) => (
//    <div key={index} className="flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
//      <Image
//        src={image.src}
//        alt={image.alt}
//        width={800}
//        height={450}
//        objectFit="cover"
//      />
//    </div>
//  ))}
// </div>
// </div>

// <div className="mt-4">
// <Image
//        src={ArtistAnalyticsTable}
//        alt={"First SVG"}
//        width={800}
//        height={450}
//        objectFit="cover"
//      />
// </div>
// </div>
// </div>