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


import DisneyLogo from '/public/Logos/removed_background/disney.png';
import NASALogo from '/public/Logos/removed_background/NASA.png';
import NorthropGrummanLogo from '/public/Logos/removed_background/Northrop_Grumman.png';
import SymphonyLogo from '/public/Logos/removed_background/Symphony.png';


import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



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
        {/* Header */}
        <div className="flex items-center pb-2 p-1">
          <Image
            src={SymphonyLogo}
            alt="Symphony Logo"
            width={120}
            height={50}
            objectFit="contain"
          />
          <h1 className="text-lg ml-4 text-white">|</h1>
          {/* <h1 className="text-lg ml-4 text-white"></h1> */}
          <h1 className="text ml-4 text-white">Artist Analytics</h1>
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

        {/* <div className="relative mb-20">

                    <p className="mt-10 px-[2vw] text-center text-3xl">
                        PROJECT
                    </p>
                    <p className="m-4 px-[5vw]">
                        Determine commercial viability of technology within NASA’s patent portfolio.
                    </p>
                    <p className="px-[2vw] text-center text-3xl">
                        PROBLEM
                    </p>
                    <p className="m-4 px-[5vw]">
                        NASA invests millions annually in research and development, building an extensive patent portfolio. However, only a small portion of these patents were being utilized. The challenge was to prevent the majority of these technologies from remaining underutilized. Our goal was to explore their commercial potential and identify ways NASA could generate revenue by licensing or transferring these technologies for commercial use.
                    </p>

                    <p className="px-[2vw] text-center text-3xl">
                        SOLUTION
                    </p>
                    <p className="m-4 px-[5vw]">
                        The solution involved gaining a comprehensive understanding of NASA's patented technologies, then identifying potential industries where these innovations could have commercial applications. We conducted in-depth market research using tools like IBISWorld and Statista, combined with insights from subject matter experts (SMEs) to generate relevant use cases. This approach helped us target industries and companies with the greatest potential for commercialization. Ultimately, we facilitated multiple discussions with commercial partners, paving the way for potential licensing opportunities and revenue generation.
                    </p>

                </div> */}

        <div className="z-100 relative">
          <div className="flex justify-center">
            <Accordion type="single" collapsible className="text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>PROJECT DESCRIPTION</AccordionTrigger>
                <AccordionContent className="text pl-2">
                  Determine the commercial viability of technology within NASA’s patent portfolio.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-center">
            <Accordion type="single" collapsible className=" text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>WHAT WAS THE CHALLENGE?</AccordionTrigger>
                <AccordionContent className="text pl-2">
                  NASA invests millions annually in research and development, building an extensive patent portfolio. However, only a small portion of these patents are being utilized. The challenge was to prevent the majority of these technologies from remaining underutilized. Our goal was to explore their commercial potential and identify ways NASA could generate revenue by licensing or transferring these technologies for commercial use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-center">
            <Accordion type="single" collapsible className=" text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>WHAT WAS THE SOLUTION?</AccordionTrigger>
                <AccordionContent className="text pl-2">
                  First by gaining a comprehensive understanding of NASA&apos;s patented technologies, then identifying potential industries where these innovations could have commercial applications. We conducted in-depth market research using tools like IBISWorld and Statista, combined with insights from subject matter experts (SMEs) to generate relevant use cases. This approach helped us target industries and companies with the greatest potential for commercialization.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="flex justify-center">
            <Accordion type="single" collapsible className=" text-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>WHAT WAS THE RESULT?</AccordionTrigger>
                <AccordionContent className="text pl-2">
                  We facilitated multiple discussions with commercial partners, paving the way for potential licensing opportunities and revenue generation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="hover:no-underline">
          <span className="hover:underline">Is it accessible?</span>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="hover:no-underline">
          <span className="hover:underline">Is it styled?</span>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-0">
        <AccordionTrigger className="hover:no-underline">
          <span className="hover:underline">Is it animated?</span>
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>



    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="hover:no-underline flex flex-col items-center">
          <span className="hover:underline text-center">Is it accessible?</span>
        </AccordionTrigger>
        <AccordionContent className="text-center">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-b-0">
        <AccordionTrigger className="hover:no-underline flex flex-col items-center">
          <span className="hover:underline text-center">Is it styled?</span>
        </AccordionTrigger>
        <AccordionContent className="text-center">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-b-0">
        <AccordionTrigger className="hover:no-underline flex flex-col items-center">
          <span className="hover:underline text-center">Is it animated?</span>
        </AccordionTrigger>
        <AccordionContent className="text-center">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>




        </div>

      </div>






    </div>

  );
};

export default Experience;
