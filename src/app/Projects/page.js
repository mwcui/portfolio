"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import ArtistAnalytics1 from '/public/ArtistAnalytics/Symphony_1tr-01 (3).svg';
import ArtistAnalytics2 from '/public/ArtistAnalytics/Symphony_2 Outline.svg';
import ArtistAnalytics3 from '/public/ArtistAnalytics/Symphony_3 Outline.svg';

import EngineeringandSciences1 from '/public/EngineeringandSciences/E_S Dashboard 001 outline.svg';
import EngineeringandSciences2 from '/public/EngineeringandSciences/E_S Dashboard 002.svg';
import EngineeringandSciences3 from '/public/EngineeringandSciences/E_S Dashboard.003.svg';
import EngineeringandSciences4 from '/public/EngineeringandSciences/E_S Dashboard.004.svg';

import DocktoStock1 from '/public/DesigntoKit/Design_to_Kit.svg';

import ProgramAffordability1 from '/public/ProgramAffordability/2021 Q4 ILR Chart.png';
import ProgramAffordability2 from '/public/ProgramAffordability/Employee Affordability Graph.png';
import ProgramAffordability3 from '/public/ProgramAffordability/ILR Q4 Chart.png';

import SpacecraftBusinessDevelopment1 from '/public/SpacecraftBusinessDevelopment/Business Development Tool-01.svg';
import SpacecraftBusinessDevelopment2 from '/public/SpacecraftBusinessDevelopment/Business Development Tool outline.svg';
import SpacecraftBusinessDevelopment3 from '/public/SpacecraftBusinessDevelopment/Business Development Tool.003 outline_test.svg';

import ElectromechanicalDesign1 from '/public/ElectromechanicalDesign/Mechanical Design_test.svg';
import ElectromechanicalDesign2 from '/public/ElectromechanicalDesign/mechanical_design-1_test.svg';

import Disneyland1 from '/public/Disneyland/Disneyland Map 2024.jpg';
import Disneyland2 from '/public/Disneyland/DCA Map 2024.jpg';

import TechnologyTransfer1 from '/public/TechnologyTransfer/nasa-01.svg';

import DisneyLogo from '/public/Logos/removed_background/Modified Disney from ChatGPT.png';
import NASALogo from '/public/Logos/removed_background/NASA Logo 1975.png';
import NorthropGrummanLogo from '/public/Logos/Northrop Grumman Black Logo.svg';
import SymphonyLogo from '/public/Logos/removed_background/Symphony.png';

const Projects = () => {
  // Define state for responsive text size variables
  const [SymphonyLogoSize, setSymphonyLogoSize] = useState(130); // Default for iPhone
  const [NorthropGrummanLogoSize, setNorthropGrummanLogoSize] = useState(120); // Default for iPhone
  const [SpaceCraftBusinessDevelopmentRenaming, setSpaceCraftBusinessDevelopmentRenaming] = useState('SPACECRAFT BUSINESS DEVELOPMENT');
  const [DisneyLogoSize, setDisneyLogoSize] = useState(170);
  const [NASALogoSize, setNASALogoSize] = useState(55);
  const [ElectromechanicalDesignRenaming, setElectromechanicalDesignRenaming] = useState('ELECTROMECHANICAL DESIGN');
  const [ProjectNameSize, setProjectNameSize] = useState('text'); // Default for iPhone
  const [ProjectDividerSize, setProjectDividerSize] = useState('text-lg'); // Default for iPhone
  const [ProjectTitleSize, setProjectTitleSize] = useState('text'); // Default for iPhone
  const [ProjectTitleSpacing, setProjectTitleSpacing] = useState('pt-6'); // Default for iPhone // spacing between photoslider and project title size
  const [ProjectResponseSize, setProjectResponseSize] = useState('text-sm'); // Default for iPhone
  const [ProjectResponseSpacing, setProjectResponseSpacing] = useState('pt-6'); // Default for iPhone
  const [ProjectDescriptionWidth, setProjectDescriptionWidth] = useState('max-w-[95%]'); // Default for iPhone. using max-w-[95%] instead of w-[90%] bc w-[90%] does not center the text
  const [PhotoSliderImageSize, setPhotoSliderImageSize] = useState('w-32 h-[100%]'); // Default for iPhone


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // iPhone
        setSymphonyLogoSize(130);
        setNorthropGrummanLogoSize(70);
        setDisneyLogoSize(170);
        setNASALogoSize(55);
        setSpaceCraftBusinessDevelopmentRenaming('SPACECRAFT BIZ DEV');
        setElectromechanicalDesignRenaming('ELECTROMECH DESIGN');
        setProjectNameSize('text');
        setProjectDividerSize('text-lg');
        setProjectTitleSize('text');
        setProjectTitleSpacing('pt-6');
        setProjectResponseSize('text-sm');
        setProjectResponseSpacing('pt-10');
        setProjectDescriptionWidth('max-w-[90%]')
        setPhotoSliderImageSize('w-16 h-[100%]');
      } else if (window.innerWidth < 1024) { // iPad
        setSymphonyLogoSize(225);
        setNorthropGrummanLogoSize(110);
        setDisneyLogoSize(270);
        setNASALogoSize(90);
        setSpaceCraftBusinessDevelopmentRenaming('SPACECRAFT BIZ DEV');
        setElectromechanicalDesignRenaming('ELECTROMECHANICAL DESIGN');
        setProjectNameSize('text-3xl');
        setProjectDividerSize('text-2xl');
        setProjectTitleSize('text-2xl');
        setProjectTitleSpacing('pt-16');
        setProjectResponseSize('text-xl');
        setProjectResponseSpacing('pt-16');
        setProjectDescriptionWidth('max-w-[90%]');
        setPhotoSliderImageSize('w-32 h-[100%]');
      } else { // Mac
        setSymphonyLogoSize(250);
        setNorthropGrummanLogoSize(135);
        setDisneyLogoSize(320);
        setNASALogoSize(100);
        setSpaceCraftBusinessDevelopmentRenaming('SPACECRAFT BIZ DEV');
        setElectromechanicalDesignRenaming('ELECTROMECHANICAL DESIGN');
        setProjectNameSize('text-3xl');
        setProjectDividerSize('text-3xl');
        setProjectTitleSize('text-2xl');
        setProjectTitleSpacing('pt-10');
        setProjectResponseSize('text-xl');
        setProjectResponseSpacing('pt-16');
        setProjectDescriptionWidth('max-w-[70%]');
        setPhotoSliderImageSize('w-32 h-[100%]');
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const DocktoStockImages = [
    { src: DocktoStock1, alt: "First SVG", title: "DocktoStock 1" },
  ];

  const ProgramAffordabilityImages = [
    { src: ProgramAffordability1, alt: "First SVG", title: "Program Affordability 1" },
    { src: ProgramAffordability2, alt: "Second SVG", title: "Program Affordability 2" },
    { src: ProgramAffordability3, alt: "Third SVG", title: "Program Affordability 3" },
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

  const DisneylandImages = [
    { src: Disneyland1, alt: "First SVG", title: "Disneyland 1" },
    { src: Disneyland2, alt: "Second SVG", title: "Disneyland 2" },
  ];

  const TechnologyTransferImages = [
    { src: TechnologyTransfer1, alt: "First SVG", title: "Technology Transfer 1" },
  ];

  const [selectedArtistAnalyticsImage, setSelectedArtistAnalyticsImage] = useState(ArtistAnalyticsImages[0]);
  const [selectedEngineeringandSciencesImage, setSelectedEngineeringandSciencesImage] = useState(EngineeringandSciencesImages[0]);
  const [selectedProgramAffordabilityImage, setSelectedProgramAffordabilityImage] = useState(ProgramAffordabilityImages[0]);
  const [selectedDocktoStockImage, setDocktoStockImage] = useState(DocktoStockImages[0]);
  const [selectedSpacecraftBusinessDevelopmentImage, setSelectedSpacecraftBusinessDevelopmentImage] = useState(SpacecraftBusinessDevelopmentImages[0]);
  const [selectedElectromechanicalDesignImage, setSelectedElectromechanicalDesignImage] = useState(ElectromechanicalDesignImages[0]);
  const [selectedDisneylandImage, setSelectedDisneylandImage] = useState(DisneylandImages[0]);
  const [selectedTechnologyTransferImage, setSelectedTechnologyTransferImage] = useState(TechnologyTransferImages[0]);

  return (
    <div className="flex flex-col items-center text-white font-inika pt-20">

      {/* Artist Analytics */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={SymphonyLogo}
            alt="Symphony Logo"
            width={SymphonyLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>ARTIST ANALYTICS</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Enabling musicians and labels to track royalties simply, eliminating information loss from disparate data sources
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
            Figures and numbers are a representation of the project. Some information has been altered for confidentiality.
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {ArtistAnalyticsImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedArtistAnalyticsImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedArtistAnalyticsImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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



        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Develop a tool that enables record labels and artists to view their metrics (royalties, streams, etc.) and integrated a user authentication/management system into the website.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Musicians and record labels currently do not have a way of viewing their royalties data outside of spreadsheets. This is an issue because lots of information that is provided falls through the cracks. So we solved that issue. once solved, we needed to create a login for users on the website to isolate the different use cases so that each user&apos;s data is separated.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    I developed a dashboard that visualizes ingested mechanical royalties data. This was done by using python and SQL on the back end and tableau and visx for visualization on the front end. Once the unique instances were created, javascript/nextjs were used for embedding the tool into our website, then clerk was used for authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Engineering and Sciences */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NorthropGrummanLogo}
            alt="Northrop Grumman Logo"
            width={NorthropGrummanLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>ENGINEERING & SCIENCES</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Empowering executives to make real-time decisions by removing delays from outdated, manually extracted data   
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
            {/* {selectedArtistAnalyticsImage.title} */}
            Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {EngineeringandSciencesImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedEngineeringandSciencesImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedEngineeringandSciencesImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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



        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Develop a tool for the Portfolio Vice President and Directors that provides visibility into the sector&apos;s performance (20,000 + employees).
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Executives are making decisions from data that is both outdated and expensive to produce. The current process involves manpower for extracting data from the databases, distilling down the pertinent information, prepping the data into slides, coordinating with scheduling, then waiting for management to review it. By the time the sectors review the data, it is already stale.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Delivered a real-time performance dashboard that reports metrics across the following pillars: financial, staffing, engineering, and business development. I lead a team of 5 through product design, development, and deployment (Jira/Tableau), managed stakeholder requirements and communication (Confluence/Sharepoint), and developed product strategy/roadmap (Miro/PPT).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Program Affordability */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NorthropGrummanLogo}
            alt="Northrop Grumman Logo"
            width={NorthropGrummanLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>PROGRAM AFFORDABILITY</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Solving staffing inefficiencies with real-time visibility into personnel metrics and budget constraints        
        </div>

        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedProgramAffordabilityImage.src}
            alt={selectedProgramAffordabilityImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Numbers/figures are for representation purposes, actual data is confidential | Source: IRL ICS          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {ProgramAffordabilityImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedProgramAffordabilityImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedProgramAffordabilityImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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

        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Develop a tool that visualizes the different processes within the Dock to Stock workflow and shines a spotlight on the areas that need the most operational improvement.
                  </p>
                </div>
              </div>
            </div>


            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    The current process for the Dock to Stock workflow is manual, with no real-time data visualization. This makes it difficult to identify inefficiencies and areas for improvement.currently management has limited visibility into what is going on between when raw material/parts are delivered at the docks, to when they get kitted (stock) and sent out across the campus, and where the major delay points are at. This has led to kits getting delayed, in some cases over 200+ days, causing major cost and schedule impacts for many programs across Space Park
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    A dashboard that tracks the major process points within the D2S workflow, highlighting impacted programs, age of process, average times, current location of material, etc.. I gathered the data (Nimbus, SAP HANA, Envoia PLM, SME’s), performed analysis/pipeline development (SQL, Python), and built the tool (Tableau).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








      {/* Dock to Stock */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NorthropGrummanLogo}
            alt="Northrop Grumman Logo"
            width={NorthropGrummanLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>DOCK TO STOCK</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Reducing program and schedule impacts through supply chain insights
        </div>


        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedDocktoStockImage.src}
            alt={selectedDocktoStockImage.alt}
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
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {DocktoStockImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedDocktoStockImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedDocktoStockImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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



        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Develop a tool that visualizes the different processes within the Dock to Stock workflow and shines a spotlight on the areas that need the most operational improvement.
                  </p>
                </div>
              </div>
            </div>


            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    The current process for the Dock to Stock workflow is manual, with no real-time data visualization. This makes it difficult to identify inefficiencies and areas for improvement.currently management has limited visibility into what is going on between when raw material/parts are delivered at the docks, to when they get kitted (stock) and sent out across the campus, and where the major delay points are at. This has led to kits getting delayed, in some cases over 200+ days, causing major cost and schedule impacts for many programs across Space Park
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    A dashboard that tracks the major process points within the D2S workflow, highlighting impacted programs, age of process, average times, current location of material, etc.. I gathered the data (Nimbus, SAP HANA, Envoia PLM, SME’s), performed analysis/pipeline development (SQL, Python), and built the tool (Tableau).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Spacecraft Business Development */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NorthropGrummanLogo}
            alt="Northrop Grumman Logo"
            width={NorthropGrummanLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>{SpaceCraftBusinessDevelopmentRenaming}</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Driving new business capture by developing internal marketing and visibility across the organization
        </div>


        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedSpacecraftBusinessDevelopmentImage.src}
            alt={selectedSpacecraftBusinessDevelopmentImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true}
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Numbers and figures have been altered for confidentiality
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {SpacecraftBusinessDevelopmentImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedSpacecraftBusinessDevelopmentImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedSpacecraftBusinessDevelopmentImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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


        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Build a tool to help the spacecraft engineering department generate new business
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    The organization was forecasting softness (not having enough work in the future) and needed to market itself to the rest of the company. There was plenty of work across the company, but without marketing, nobody knew to give it to us.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Developed an internal marketing tool that supported internal business capture. I lead a team of 2 through the design and development of the website (Javascript, Sharepoint), managed stakeholder requirements/expectations and facilitated x-functional communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* Electromechanical Design */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NorthropGrummanLogo}
            alt="Northrop Grumman Logo"
            width={NorthropGrummanLogoSize}
            height={50}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>{ElectromechanicalDesignRenaming}</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Bridging the gap between electrical design and assembly through manufacturability and spatial integration        
        </div>


        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedElectromechanicalDesignImage.src}
            alt={selectedElectromechanicalDesignImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true}
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Numbers/figures are for representation purposes, actual designs are confidential | Source: Google Images
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {ElectromechanicalDesignImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedElectromechanicalDesignImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedElectromechanicalDesignImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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


        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Provide electromechanical component design and development for space programs (ex: James Webb Space Telescope).
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    After the electrical design phase of spacecraft development, components cannot be manufactured or integrated without considering their physical form. The challenge is to translate the electrical designs into 3D models that not only meet the system requirements but also ensure the components are manufacturable, fit within the spacecraft’s physical constraints, and integrate seamlessly with other parts. electromechanical design solves the critical issue of packaging, manufacturability, and spatial integration, bridging the gap between electrical design and final assembly.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    I designed the electrical and mechanical components using creo parametric, performed GD&T/tolerance analysis, managed the assets using Enovia PLM, and managed requirements across the systems, electrical and manufacturing stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Disneyland */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={DisneyLogo}
            alt="Disney Logo"
            width={DisneyLogoSize}
            height={300}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>DCA</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Managing projects, repairs, and maintenance while keeping the magic alive and guest experiences seamless
        </div>


        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedDisneylandImage.src}
            alt={selectedDisneylandImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true}
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Work cannot be disclosed due to NDA | Source: Google Images
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {DisneylandImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedDisneylandImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedDisneylandImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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


        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Development and Maintenance of new and existing infrastructure across Disneyland and California Adventure.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    Disneyland and California Adventure’s park assets endure frequent, high-touch usage, leading to wear and the constant need for maintenance and repair. At the same time, new projects and upgrades are regularly being added to enhance the guest experience. The challenge was finding a way to efficiently balance routine maintenance, unexpected repairs, and ongoing construction, all while ensuring these activities caused minimal disruption to the park&apos;s daily operations and guest enjoyment.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                    The key was to do as much work as possible while guests were not at the park. For the ongoing projects where that was not possible, facades and detours were implemented to minimize experience impact. I managed a number of projects including: Peter Pan Roofing Facade Replacement, Splash Mountain Corrosion Mitigation, Space Mountain Deep Clean, Blue Sky Cellar Renovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* NASA */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          <Image
            src={NASALogo}
            alt="NASA Logo"
            width={NASALogoSize}
            height={300}
            objectFit="contain"
          />
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>TECHNOLOGY TRANSFER</h1>
        </div>
        <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
        Unlocking revenue potential by identifying commercial applications for NASA's underutilized patents
        </div>


        {/* Selected Image Display */}
        <div className="relative">
          <Image
            src={selectedTechnologyTransferImage.src}
            alt={selectedTechnologyTransferImage.alt}
            width={1000}
            height={562}
            objectFit="contain"
            priority={true}
          />
          <p className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-opacity-70 p-1 rounded text-[6px]">
            {/* {selectedArtistAnalyticsImage.title} */}
            Work cannot be disclosed due to NDA
          </p>
        </div>

        <div className="w-full flex justify-center py-3">
          {/* Photo Slider */}
          <div className=" overflow-x-auto relative bg-slate-600 p-1 rounded-lg">
            <div className="flex space-x-2 place-content-center">
              {TechnologyTransferImages.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 overflow-hidden cursor-pointer ${selectedTechnologyTransferImage.src === image.src ? 'opacity-90 hover:opacity-90' : 'opacity-100 hover:opacity-50'}`}
                  onClick={() => setSelectedTechnologyTransferImage(image)}
                >
                  {/* the width and height are restricting the images */}
                  <div className={`${PhotoSliderImageSize} content-center`}>
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


        <div className="z-100 pb-20">
          <div className="flex flex-col items-center">

            {/* Project Description */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectTitleSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>PROJECT DESCRIPTION</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                  Determine the commercial viability of technology within NASA’s patent portfolio.
                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Challenge? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE CHALLENGE?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                  NASA invests millions annually in research and development, building an extensive patent portfolio. However, only a small portion of these patents were being utilized. The challenge was to prevent the majority of these technologies from remaining underutilized. Our goal was to explore their commercial potential and identify ways NASA could generate revenue by licensing or transferring these technologies for commercial use.                  </p>
                </div>
              </div>
            </div>

            {/* What Was the Solution? */}
            <div className={`${ProjectDescriptionWidth}`}>
              <div className={`${ProjectResponseSpacing}`}>
                <div className="text-center">
                  <h2 className={`${ProjectTitleSize}`}>WHAT WAS THE SOLUTION?</h2>
                  <p className={`${ProjectResponseSize} pt-3`}>
                  The solution involved gaining a comprehensive understanding of NASA&apos;s patented technologies, then identifying potential industries where these innovations could have commercial applications. We conducted in-depth market research using tools like IBISWorld and Statista, combined with insights from subject matter experts (SMEs) to generate relevant use cases. This approach helped us target industries and companies with the greatest potential for commercialization. Ultimately, we facilitated multiple discussions with commercial partners, paving the way for potential licensing opportunities and revenue generation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>

  );
};

export default Projects;
