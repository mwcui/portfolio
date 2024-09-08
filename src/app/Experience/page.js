"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ArtistAnalytics1 from '/public/ArtistAnalytics/Symphony_1tr-01 (3).svg';
import ArtistAnalytics2 from '/public/ArtistAnalytics/Symphony_2 Outline.svg';
import ArtistAnalytics3 from '/public/ArtistAnalytics/Symphony_3 Outline.svg';
import ArtistAnalyticsTable from '/public/Tables/image (1).svg';
// Import additional images as needed

const Experience = () => {
  const ArtistAnalyticsImages = [
    { src: ArtistAnalytics1, alt: "First SVG", title: "Artist Analytics 1" },
    { src: ArtistAnalytics2, alt: "Second SVG", title: "Artist Analytics 2" },
    { src: ArtistAnalytics3, alt: "Third SVG", title: "Artist Analytics 3" },
  ];

  const [selectedArtistAnalyticsImage, setSelectedArtistAnalyticsImage] = useState(ArtistAnalyticsImages[0]);

  return (
    <div className="flex flex-col items-center text-white font-inika pt-20">
      <div className="w-[700px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Artist Analytics</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedArtistAnalyticsImage.src}
            alt={selectedArtistAnalyticsImage.alt}
            width={800}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded text-xs">
            {selectedArtistAnalyticsImage.title}
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-4/5 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4">
              {ArtistAnalyticsImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedArtistAnalyticsImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedArtistAnalyticsImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-44 h-[100%] content-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mb-14">
          <Image
            src={ArtistAnalyticsTable}
            alt={"First SVG"}
            width={800}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>

      

      <div className="w-[700px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Engineering & Sciences</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedArtistAnalyticsImage.src}
            alt={selectedArtistAnalyticsImage.alt}
            width={800}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white p-1 rounded text-xs">
            {selectedArtistAnalyticsImage.title}
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-4/5 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4">
              {ArtistAnalyticsImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedArtistAnalyticsImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedArtistAnalyticsImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-44 h-[100%] content-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mb-14">
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

