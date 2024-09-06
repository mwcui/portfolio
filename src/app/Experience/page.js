import React, { useState } from 'react';
import Image from 'next/image';
import ArtistAnalytics1 from '/public/ArtistAnalytics/Symphony_1tr-01 (3).svg';
import ArtistAnalyticsTable from '/public/Tables/image.svg';
// Import additional images as needed

const Experience = () => {
  const images = [
    { src: ArtistAnalytics1, alt: "First SVG", title: "Artist Analytics 1" },
    { src: ArtistAnalyticsTable, alt: "Second SVG", title: "Artist Analytics Table" },
    { src: ArtistAnalytics1, alt: "Third SVG", title: "Artist Analytics 2" },
    { src: ArtistAnalyticsTable, alt: "Fourth SVG", title: "Another Table" },
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
        <div className="flex flex-col items-center text-white font-inika py-10 px-4">
        <div className="w-[800px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Project: Design to Kit</h1>
        </div>

        {/* Selected Image Display */}
        <div className="w-full mx-auto">
        <div className="mb-8">
          <Image
            src={selectedImage.src}
            alt={selectedImage.alt}
            width={800}
            height={562}
            objectFit="contain"
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-xl">{selectedImage.title}</p>
        </div>
        </div>

        {/* Photo Slider */}
        <div className="w-full overflow-x-auto pb-2 relative">
          <div className="flex space-x-4 min-w-max">
            {images.map((image, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${selectedImage.src === image.src ? 'ring-4 ring-blue-500' : 'hover:ring-2 hover:ring-blue-300'}`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={112}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
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
</div>