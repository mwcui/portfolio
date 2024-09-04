import React from 'react';
import Image from 'next/image';
import svg1 from '/public/SpacecraftBusinessDevelopment/Business Development Tool.003 outline_test.svg'; // Replace with your actual path
import svg2 from '/public/Tables/image.svg'; // Replace with your actual path

const Experience = () => {
  return (
    <div className="flex flex-col items-center text-white font-inika py-10 px-4">
      {/* Top Text */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Project: Design to Kit</h1>
      </div>

      {/* SVG Files */}
      <div className="w-full max-w-[600px] mx-auto">
        <div className="mb-8">
          <Image
            src={svg1}
            alt="First SVG"
            layout="responsive"
            width={600}
            height={360} // Adjust the height proportionally to the width
            className="object-cover"
          />
        </div>

        <div className="mb-8">
          <Image
            src={svg2}
            alt="Second SVG"
            layout="responsive"
            width={600}
            height={360} // Adjust the height proportionally to the width
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience; 

