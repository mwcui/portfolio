




"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import ArtistAnalytics1 from '/public/ArtistAnalytics/Symphony_1tr-01 (3).svg';
import ArtistAnalytics2 from '/public/ArtistAnalytics/Symphony_2 Outline.svg';
import ArtistAnalytics3 from '/public/ArtistAnalytics/Symphony_3 Outline.svg';
import ArtistAnalyticsTable from '/public/Tables/image (1).svg';

import EngineeringandSciences1 from '/public/EngineeringandSciences/E_S Dashboard 001 outline.svg';
import EngineeringandSciences2 from '/public/EngineeringandSciences/E_S Dashboard 002.svg';
import EngineeringandSciences3 from '/public/EngineeringandSciences/E_S Dashboard.003.svg';
import EngineeringandSciences4 from '/public/EngineeringandSciences/E_S Dashboard.004.svg';
import EngineeringandSciencesTable from '/public/Tables/image.svg';

import DesigntoKit1 from '/public/DesigntoKit/Design_to_Kit.svg';
import DesigntoKitTable from '/public/Tables/image (2).svg';

import ProgramAffordabilityTable from '/public/Tables/image (7).svg';

import SpacecraftBusinessDevelopment1 from '/public/SpacecraftBusinessDevelopment/Business Development Tool-01.svg';
import SpacecraftBusinessDevelopment2 from '/public/SpacecraftBusinessDevelopment/Business Development Tool outline.svg';
import SpacecraftBusinessDevelopment3 from '/public/SpacecraftBusinessDevelopment/Business Development Tool.003 outline_test.svg';
import SpacecraftBusinessDevelopmentTable from '/public/Tables/image (6).svg';

import ElectromechanicalDesign1 from '/public/ElectromechanicalDesign/Mechanical Design_test.svg';
import ElectromechanicalDesign2 from '/public/ElectromechanicalDesign/mechanical_design-1_test.svg';
import ElectromechanicalDesignTable from '/public/Tables/image (5).svg';

import DisneylandTable from '/public/Tables/image (8).svg';

import TechnologyTransfer1 from '/public/TechnologyTransfer/nasa-01.svg';
import TechnologyTransferTable from '/public/Tables/image (9).svg';


const Experience = () => {
  const ArtistAnalyticsImages = [
    { src: ArtistAnalytics1, alt: "First SVG", title: "Artist Analytics 1" },
    { src: ArtistAnalytics2, alt: "Second SVG", title: "Artist Analytics 2" },
    { src: ArtistAnalytics3, alt: "Third SVG", title: "Artist Analytics 3" },
  ];

  const EngineeringandSciencesImages = [
    { src: EngineeringandSciences1, alt: "First SVG", title: "Engineering and Sciences 1" },
    { src: EngineeringandSciences2, alt: "Second SVG", title: "Engineering and Sciences 2" },
    { src: EngineeringandSciences3, alt: "Third SVG", title: "Engineering and Sciences 3" },
    { src: EngineeringandSciences4, alt: "Fourth SVG", title: "Engineering and Sciences 4" },
  ];

  const DesigntoKitImages = [
    { src: DesigntoKit1, alt: "First SVG", title: "DesigntoKit 1" },
  ];

  const SpacecraftBusinessDevelopmentImages = [
    { src: SpacecraftBusinessDevelopment1, alt: "First SVG", title: "Spacecraft Business Development 1" },
    { src: SpacecraftBusinessDevelopment2, alt: "Second SVG", title: "Spacecraft Business Development 2" },
    { src: SpacecraftBusinessDevelopment3, alt: "Third SVG", title: "Spacecraft Business Development 3" },
  ];

  const ElectromechanicalDesignImages = [
    { src: ElectromechanicalDesign1, alt: "First SVG", title: "Electromechanical Design 1" },
    { src: ElectromechanicalDesign2, alt: "Second SVG", title: "Electromechanical Design 2" },
  ];

  const TechnologyTransferImages = [
    { src: TechnologyTransfer1, alt: "First SVG", title: "Technology Transfer 1" },
  ];

  const [selectedArtistAnalyticsImage, setSelectedArtistAnalyticsImage] = useState(ArtistAnalyticsImages[0]);
  const [selectedEngineeringandSciencesImage, setSelectedEngineeringandSciencesImage] = useState(EngineeringandSciencesImages[0]);
  const [selectedDesigntoKitImage, setSelectedDesigntoKitImage] = useState(DesigntoKitImages[0]);
  const [selectedSpacecraftBusinessDevelopmentImage, setSelectedSpacecraftBusinessDevelopmentImage] = useState(SpacecraftBusinessDevelopmentImages[0]);
  const [selectedElectromechanicalDesignImage, setSelectedElectromechanicalDesignImage] = useState(ElectromechanicalDesignImages[0]);
  const [selectedTechnologyTransferImage, setSelectedTechnologyTransferImage] = useState(TechnologyTransferImages[0]);

  return (
    <div className="flex flex-col items-center text-white font-inika pt-20">
      
      
      {/* Artist Analytics */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Artist Analytics</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedArtistAnalyticsImage.src}
            alt={selectedArtistAnalyticsImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {ArtistAnalyticsImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedArtistAnalyticsImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedArtistAnalyticsImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">
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

        <div className="relative mb-20">
          <Image
            src={ArtistAnalyticsTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>

      

      {/* Engineering and Sciences   */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Engineering & Sciences</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedEngineeringandSciencesImage.src}
            alt={selectedEngineeringandSciencesImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {EngineeringandSciencesImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedEngineeringandSciencesImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedEngineeringandSciencesImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">                    
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

        <div className="relative mb-20">
          <Image
            src={EngineeringandSciencesTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>



      {/*Design to Kit*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Design to Kit</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedDesigntoKitImage.src}
            alt={selectedDesigntoKitImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
          Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {DesigntoKitImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedDesigntoKitImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedDesigntoKitImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">                    
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

        <div className="relative mb-20">
          <Image
            src={DesigntoKitTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>


      {/*Program Affordability*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Program Affordability</h1>
        </div>

        <div className="relative mb-20">
          <Image
            src={ProgramAffordabilityTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>


      {/*Spacecraft Business Development*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Spacecraft Business Development</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedSpacecraftBusinessDevelopmentImage.src}
            alt={selectedSpacecraftBusinessDevelopmentImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true} // the first image is large and takes a while to load
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
          Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {SpacecraftBusinessDevelopmentImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedSpacecraftBusinessDevelopmentImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedSpacecraftBusinessDevelopmentImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">                    
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

        <div className="relative mb-20">
          <Image
            src={SpacecraftBusinessDevelopmentTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>


      {/*Electromechanical Design*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Electromechanical Design</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedElectromechanicalDesignImage.src}
            alt={selectedElectromechanicalDesignImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true} // the first image is large and takes a while to load
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            Designs are representations of previous work
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {ElectromechanicalDesignImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedElectromechanicalDesignImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedElectromechanicalDesignImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">                    
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

        <div className="relative mb-20">
          <Image
            src={ElectromechanicalDesignTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>



      {/*Disneyland*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Disneyland</h1>
        </div>

        <div className="relative mb-20">
          <Image
            src={DisneylandTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          />
        </div>
      </div>



      {/*Technology Transfer*/}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Top Text */}
        <div className="mb-4">
          <h1 className="text-2xl">Technology Transfer</h1>
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedTechnologyTransferImage.src}
            alt={selectedTechnologyTransferImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
          Specifics have been omitted due to NDA
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className="w-1/2 overflow-x-auto relative bg-slate-600 scrollbar-hide-auto hover:overflow-x-scroll p-1 rounded-lg">
            <div className="flex space-x-4 place-content-center">
              {TechnologyTransferImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedTechnologyTransferImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedTechnologyTransferImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className="w-32 h-[100%] content-center">                    
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

        <div className="relative mb-20">
          {/* <Image
            src={TechnologyTransferTable}
            alt={"First SVG"}
            width={1000}
            height={450}
            objectFit="cover"
          /> */}

        <p className="px-[2vw]">
        Project Description:
        </p>
        <p className="m-4 px-[5vw]">
        Determine the commercial viability of technology within NASA’s patent portfolio.
        </p>
        <p className="px-[2vw]">
        What was the Challenge?
        </p>
        <p className="m-4 px-[5vw]">
        NASA invests millions annually in research and development, building an extensive patent portfolio. However, only a small portion of these patents were being utilized. The challenge was to prevent the majority of these technologies from remaining underutilized. Our goal was to explore their commercial potential and identify ways NASA could generate revenue by licensing or transferring these technologies for commercial use.
        </p>

        <p className="px-[2vw]">
        What was the Solution and How was it Achieved?
        </p>
        <p className="m-4 px-[5vw]">
        The solution involved gaining a comprehensive understanding of NASA's patented technologies, then identifying potential industries where these innovations could have commercial applications. We conducted in-depth market research using tools like IBISWorld and Statista, combined with insights from subject matter experts (SMEs) to generate relevant use cases. This approach helped us target industries and companies with the greatest potential for commercialization. Ultimately, we facilitated multiple discussions with commercial partners, paving the way for potential licensing opportunities and revenue generation.
        </p>

        </div>
      </div>


    </div>

  );
};

export default Experience;
