// import React from 'react'

// const About = () => {
//   return (
//     <div className="text-white text-4xl">
//       this is the about page
//     </div>
//   )
// }

// export default About



import Image from 'next/image';  // Assuming you're using Next.js Image component for optimization
import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

const About = () => {
  return (
    <div className="flex flex-col items-center text-white font-inika py-10 px-4">

      <div className="mb-8 w-60 h-60 relative">
        <Image
          src={profilePic}
          alt="Profile Picture of Matthew"
          className="object-cover"
          layout="fill"
        />
      </div>

      {/* About Text */}
      <div className="text-center text-2xl max-w-2xl leading-relaxed">
        <p>
          Matthew is an engineer based in Los Angeles, California. His work spans many companies including Symphony Markets, Northrop Grumman, The Walt Disney Company, and NASA.
        </p>
        <p className="mt-4">
          He is currently building gov-tech products to help local governments across the country better serve their residents.
        </p>
        <p className="mt-4">
          Outside of building, Matthew enjoys dance, music, travel, reading, and spending time with friends and family.
        </p>
      </div>
    </div>
  );
};

export default About;


// import Image from 'next/image';
// import profilePic from '/public/About/ProfilePicture.JPG'; // Replace with your actual image path

// const About = () => {
//   return (
//     <div className="flex flex-col items-center text-white font-inika py-10 px-4">
//       {/* Profile Image */}
//       <div className="mb-8 w-40 h-40">
//         <Image
//           src={profilePic}
//           alt="Profile Picture of Matthew"
//           className="rounded-full object-cover"
//           width={160}
//           height={160}
//         />
//       </div>

//       {/* About Text */}
//       <div className="text-center text-2xl max-w-2xl leading-relaxed">
//         <p>
//           Matthew is an entrepreneur and engineer based in Los Angeles, California. His work spans many companies including Symphony Markets, Northrop Grumman, The Walt Disney Company, and NASA.
//         </p>
//         <p className="mt-4">
//           He is currently building gov-tech products to help local governments across the country better serve their residents.
//         </p>
//         <p className="mt-4">
//           Outside of building, Matthew enjoys dance, music, travel, reading, and spending time with friends and family.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default About;

