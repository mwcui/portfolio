// import React from 'react'

// const About = () => {
//   return (
//     <div className="text-white text-4xl">
//       this is the about page
//     </div>
//   )
// }

// export default About



// import Image from 'next/image';  // Assuming you're using Next.js Image component for optimization
// import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

// const About = () => {
//   return (
//     <div className="flex flex-col items-center text-white font-inika py-10">

//       <div className="m-10 w-44 h-44 relative">
//         <Image
//           src={profilePic}
//           alt="Profile Picture of Matthew"
//           className="object-cover"
//           layout="fill"
//         />
//       </div>

//       {/* About Text */}
//       <div className="text-center text-2xl max-w-2xl leading-relaxed" style={{ width: '600px', maxWidth: '100vw' }}>
//         <p>
//           Matthew is an entrepreneur and engineer based in Los Angeles, California. His work spans many organizations including NASA, The Walt Disney Company, and Northrop Grumman.
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



import Image from 'next/image';
import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

const About = () => {
  return (
    <div className="flex flex-col items-center text-white font-inika py-10">

      <div className="m-10 w-44 h-44 relative">
        <Image
          src={profilePic}
          alt="Profile Picture of Matthew"
          className="object-cover rounded-full"
          layout="fill"
          priority // Preload this image to improve loading speed
          placeholder="blur" // Use a blurred low-res placeholder
          loading="eager" // Load the image immediately
          blurDataURL={profilePic.blurDataURL} // Optional: add a custom blur data URL if available
        />
      </div>

      {/* About Text */}
      <div className="text-center text-2xl max-w-2xl leading-relaxed" style={{ width: '600px', maxWidth: '100vw' }}>
        <p>
          Matthew is an entrepreneur and engineer based in Los Angeles, California. His work spans many organizations including NASA, The Walt Disney Company, and Northrop Grumman.
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


