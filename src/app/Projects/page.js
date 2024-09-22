// this is the projects pages. aka where all my experience is listed

"use client"

// these are all the imports. they're broken down into categories, from most recent to oldest projects

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
  // nextjs requires initial states for all variables. this is the section that defines all of them
  // the idea here is that i built as a mobile first design, hence why the inital states are for the iphone

  // there are a ton of variables because of the number of projects (8) and the different screen sizes (3). rather than update each variable manually, i can just update the state, and the useEffect will handle the rest


  const [SymphonyLogoSize, setSymphonyLogoSize] = useState(130); // title logo size
  const [NorthropGrummanLogoSize, setNorthropGrummanLogoSize] = useState(120); // title logo size
  const [SpaceCraftBusinessDevelopmentRenaming, setSpaceCraftBusinessDevelopmentRenaming] = useState('SPACECRAFT BUSINESS DEVELOPMENT'); // title logo size
  const [DisneyLogoSize, setDisneyLogoSize] = useState(170); // title logo size
  const [NASALogoSize, setNASALogoSize] = useState(55); // title logo size
  const [ElectromechanicalDesignRenaming, setElectromechanicalDesignRenaming] = useState('ELECTROMECHANICAL DESIGN'); // Electromechanical design title renaming. too long for iPhone
  const [ProjectNameSize, setProjectNameSize] = useState('text'); // this is the name of the project, next to the title logo
  const [ProjectDividerSize, setProjectDividerSize] = useState('text-lg'); // this is the divider between the title and the title logo
  const [TagLineSize, setTagLineSize] = useState('text-vvs'); // this is the tagline under the title logo/project name
  const [ProjectTitleSize, setProjectTitleSize] = useState('text'); // these are the sizes of the project titles (project description, what was the challenge, what was the solution)
  const [ProjectTitleSpacing, setProjectTitleSpacing] = useState('pt-6'); // spacing between photoslider and project title size
  const [ProjectResponseSize, setProjectResponseSize] = useState('text-sm'); // responses to the project titles
  const [ProjectResponseSpacing, setProjectResponseSpacing] = useState('pt-6'); // spacing between the project titles and the project responses
  const [ProjectDescriptionWidth, setProjectDescriptionWidth] = useState('max-w-[95%]'); // width of the responses. using max-w-[95%] instead of w-[90%] bc w-[90%] does not center the text
  const [PhotoSliderImageSize, setPhotoSliderImageSize] = useState('w-32 h-[100%]'); // for the size of the photoslider images


  useEffect(() => {

    // this section handles the responsiveness of the page. it checks the screen size and updates the variables accordingly
    // example: font size on mac is bigger than iphone, so it needs to change
    // this section does it for all of them (or as may as i was able to capture, there are still some outstanding, but they're minor)

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
        setTagLineSize('text-vvs');
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
        setTagLineSize('text-vs');
        setProjectTitleSize('text-2xl');
        setProjectTitleSpacing('pt-8');
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
        setTagLineSize('text');
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

  // these are the images for each project. they're stored in an array, and the index of the array is stored in the state
  // this is used for the photoslider

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

  // selecting the first image from the photoslider for the selected image display
  const [selectedArtistAnalyticsImage, setSelectedArtistAnalyticsImage] = useState(ArtistAnalyticsImages[0]);
  const [selectedEngineeringandSciencesImage, setSelectedEngineeringandSciencesImage] = useState(EngineeringandSciencesImages[0]);
  const [selectedProgramAffordabilityImage, setSelectedProgramAffordabilityImage] = useState(ProgramAffordabilityImages[0]);
  const [selectedDocktoStockImage, setSelectedDocktoStockImage] = useState(DocktoStockImages[0]);
  const [selectedSpacecraftBusinessDevelopmentImage, setSelectedSpacecraftBusinessDevelopmentImage] = useState(SpacecraftBusinessDevelopmentImages[0]);
  const [selectedElectromechanicalDesignImage, setSelectedElectromechanicalDesignImage] = useState(ElectromechanicalDesignImages[0]);
  const [selectedDisneylandImage, setSelectedDisneylandImage] = useState(DisneylandImages[0]);
  const [selectedTechnologyTransferImage, setSelectedTechnologyTransferImage] = useState(TechnologyTransferImages[0]);


  // each project is broken down in the following manner:
  // header (logo, divider, project name)
  // selected image display (the image that is currently selected from the photoslider)
  // photoslider (the photoslider itself)
  // project description (the project description, what was the challenge, and what was the solution)

  return (

    // this is the main container that holds all of the projects
    <div className="flex flex-col items-center text-white font-inika pt-20">

      {/* Artist Analytics */}
      <div className="w-[1000px] max-w-[90vw]">
        {/* Header */}
        <div className="flex items-center p-1">
          {/* <Image
            src={SymphonyLogo}
            alt="Symphony Logo"
            width={SymphonyLogoSize}
            height={50}
            objectFit="contain"
          /> */}
          <h1 className={`${ProjectDividerSize} ml-4 text-white`}>|</h1>
          {/* {ProjectSpaceVisible && <h1 className={`${ProjectSpaceSize} ml-4 text-white`}></h1>} */}
          <h1 className={`${ProjectNameSize} ml-4 text-white`}>ARTIST ANALYTICS</h1>
        </div>
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Enabling musicians and labels to track royalties simply, eliminating information loss from disparate data sources
          </div>
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
                    Develop a tool that enables record labels and artists to view their metrics (royalties, streams, etc.) and integrate a user authentication/management system into the website.
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
                    Musicians and record labels currently rely on spreadsheets to view their royalties data, leading to important information slipping through the cracks. We solved this by creating a platform to streamline the data. To ensure privacy and tailored access, a user login system was implemented, allowing each user to securely view their own data.
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
                    I developed a dashboard to visualize ingested mechanical royalties data, using Python and SQL on the backend and Tableau and Visx for front-end visualization. After creating unique instances, I embedded the tool into the website with JavaScript and Next.js, and integrated Clerk for user authentication.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Empowering executives to make real-time decisions by removing delays from outdated, manually extracted data
          </div>
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
                    Executives rely on outdated and expensive data to make decisions. The current process is labor-intensive, requiring teams to extract data from databases, filter the important details, format it into slides, coordinate with scheduling, and then wait for management review. By the time the data reaches executives, it is already outdated.
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
                    I delivered a real-time performance dashboard reporting key metrics across the financial, staffing, engineering, and business development pillars. Leading a team of five, I oversaw the design, development, and deployment phases using Jira and Tableau, managed stakeholder requirements and communications via Confluence and SharePoint, and developed the product strategy and roadmap using Miro and PowerPoint.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Solving staffing inefficiencies with real-time visibility into personnel metrics and budget constraints
          </div>
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
                    Develop a program management tool to burn down a $30M staffing risk for a Class A space program.
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
                    Program budgets fluctuate, leading to staffing constraints. This creates issues such as too much capital with insufficient headcount, resulting in underperformance and schedule delays. On the other hand, too little capital with excess staff leads to cost overruns and project timeline impacts. These fluctuations disrupt project efficiency and make it challenging to meet both budget and schedule targets.
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
                    I developed a tool that tracks personnel metrics and spending, enabling program management to test different staffing scenarios. I led a team of one through the design and development process using Tableau and SQL, championed access to the necessary data (MPM/Cobra, Salesforce), and managed stakeholder requirements and expectations.                  </p>
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Reducing program and schedule impacts through supply chain insights
          </div>
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
                    Develop a tool that visualizes the different processes within the Dock to Stock supply chain and shines a spotlight on the areas that need the most operational improvement.
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
                    Management has limited visibility into the workflow, from the time raw materials and parts are delivered at the docks until they are kitted and distributed across the campus. This lack of insight has resulted in significant delays—sometimes over 200 days—causing major cost and schedule impacts for various programs at Space Park.
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
                    I developed a dashboard that tracks key process points within the Dock to Stock supply chain, highlighting impacted programs, process duration, average times, and the current location of materials. I gathered data from sources like Nimbus, SAP HANA, Enovia PLM, and SMEs, performed analysis and pipeline development using SQL and Python, and built the tool in Tableau.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Driving new business capture by developing internal marketing and organizational visibility
          </div>
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
                    Build a tool to help the spacecraft engineering organization cappture new business.
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
                    The challenge was that the organization was forecasting a slowdown in future work. Instead of playing defensively and letting go of valuable employees, we took an offensive approach by seeking new business opportunities for them. We discovered that plenty of work existed within the company, but without proper marketing, no one knew to direct it our way. This made it clear that we needed to promote our capabilities internally.
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
                    I developed an internal marketing tool to support business capture, leading a team of two through the design and development of the website. I managed stakeholder requirements and expectations, facilitated cross-functional communications, and coordinated with the technical leads to ensure the website aligned with their TCAs and messaging.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Bridging the gap between electrical design and assembly through manufacturability and spatial integration
          </div>
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
                    Provide electromechanical component design and development for space programs.
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
                    After the electrical design phase of spacecraft development, components can&apos;t be manufactured or integrated without accounting for their physical form. The challenge is to translate these designs into 3D models that meet system requirements while ensuring the components are manufacturable, fit within the spacecraft&apos;s physical constraints, and integrate seamlessly with other parts. Electromechanical design addresses these critical issues of packaging, manufacturability, and spatial integration, bridging the gap between electrical design and final assembly.
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
                    I designed the electrical and mechanical components using Creo Parametric, performed GD&T and tolerance analysis, managed assets through Enovia PLM, and coordinated requirements across systems, electrical, and manufacturing stakeholders. Notable projects include the James Webb Space Telescope and Archinaut.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Managing projects, repairs, and maintenance while keeping the magic alive 💫
          </div>
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
                    Provide development and maintenance of new and existing infrastructure across Disneyland and California Adventure.
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
                    Disneyland and California Adventure&apos;s park assets endure frequent, high-touch usage, leading to wear and the constant need for maintenance and repair. At the same time, new projects and upgrades are regularly being added to enhance the guest experience. The challenge was finding a way to efficiently balance routine maintenance, unexpected repairs, and ongoing construction, all while ensuring these activities caused minimal disruption to the park&apos;s daily operations and guest experience.
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
                    I managed teams of contractors to complete as much work as possible outside of park hours. For projects that couldn&apos;t avoid guest exposure, I led efforts to implement facades and detours to minimize the impact on the guest experience. Notable projects include the Peter Pan Roofing Facade Replacement, Splash Mountain Corrosion Mitigation, Space Mountain Deep Clean, and Blue Sky Cellar Renovation.
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
        <div className={`${TagLineSize}`}>
          <div className="flex flex-col items-start ml-1 pb-2 p-1 italic">
            Unlocking revenue potential for NASA&apos;s underutilized patents
          </div>
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
                    Determine the commercial viability of technology within NASA&apos;s patent portfolio.
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
                    NASA invests millions annually in research and development, building an extensive patent portfolio. However, only a small portion of these patents are utilized. The challenge was to prevent the majority of these technologies from remaining underutilized. Our goal was to explore their commercial potential and identify ways NASA could generate revenue by licensing or transferring these technologies for commercial use.
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
                    The solution involved gaining a comprehensive understanding of NASA&apos;s patented technologies, then identifying potential industries where these innovations could have commercial applications. I conducted in-depth market research using tools like IBISWorld and Statista, combined with insights from subject matter experts to generate relevant use cases. This approach helped the team to target industries and companies with the greatest potential for commercialization. Ultimately, we facilitated multiple discussions with commercial partners, paving the way for potential licensing opportunities and revenue generation.
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
