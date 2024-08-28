// import Image from 'next/image';
// import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

// const About = () => {
//   return (
//     <div className="flex flex-col items-center text-white font-inika py-10">

//       <div className="m-10 w-44 h-44 relative">
//         <Image
//           src={profilePic}
//           alt="Profile Picture of Matthew"
//           className="object-cover rounded-full"
//           layout="fill"
//           priority // Preload this image to improve loading speed
//           placeholder="blur" // Use a blurred low-res placeholder
//           loading="eager" // Load the image immediately
//           blurDataURL={profilePic.blurDataURL} // Optional: add a custom blur data URL if available
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


// import Image from 'next/image';
// import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

// import emailIcon from '/public/Icons/icons8-email.svg';
// import linkedinIcon from '/public/Icons/icons8-linkedin.svg';
// import githubIcon from '/public/Icons/icons8-github.svg';
// import instagramIcon from '/public/Icons/icons8-instagram.svg';
// import tiktokIcon from '/public/Icons/icons8-tiktok.svg';
// import xIcon from '/public/Icons/icons8-twitterx.svg';

// const About = () => {
//   return (
//     <div className="flex flex-col items-center text-white font-inika py-10">

//       <div className="m-10 w-44 h-44 relative">
//         <Image
//           src={profilePic}
//           alt="Profile Picture of Matthew"
//           className="object-cover rounded-full"
//           layout="fill"
//           priority // Preload this image to improve loading speed
//           placeholder="blur" // Use a blurred low-res placeholder
//           loading="eager" // Load the image immediately
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

//       <div className="flex space-x-6 mt-8">
//         <a href="mailto:matthew.w.cui@gmail.com">
//           <Image src={emailIcon} alt="Email Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//         <a href="https://www.linkedin.com/in/matthewwcui/" target="_blank" rel="noopener noreferrer">
//           <Image src={linkedinIcon} alt="LinkedIn Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//         <a href="https://github.com/mwcui" target="_blank" rel="noopener noreferrer">
//           <Image src={githubIcon} alt="GitHub Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//         <a href="https://www.instagram.com/mwcui/" target="_blank" rel="noopener noreferrer">
//           <Image src={instagramIcon} alt="Instagram Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//         <a href="https://www.tiktok.com/@mwcui" target="_blank" rel="noopener noreferrer">
//           <Image src={tiktokIcon} alt="TikTok Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//         <a href="https://x.com/mwcui" target="_blank" rel="noopener noreferrer">
//           <Image src={xIcon} alt="X Icon" width={48} height={48} className="hover:opacity-75" />
//         </a>
//       </div>

//     </div>
//   );
// };

// export default About;



// import Image from 'next/image';
// import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

// // Import SVG icons
// import emailIcon from '/public/Icons/icons8-email.svg';
// import linkedinIcon from '/public/Icons/icons8-linkedin.svg';
// import githubIcon from '/public/Icons/icons8-github.svg';
// import instagramIcon from '/public/Icons/icons8-instagram.svg';
// import tiktokIcon from '/public/Icons/icons8-tiktok.svg';
// import xIcon from '/public/Icons/icons8-twitterx.svg';

// const About = () => {

//   const handleRedirect = (url) => {
//     window.open(url, '_blank');
//   };

//   return (
//     <div className="flex flex-col items-center text-white font-inika py-10">

//       <div className="m-10 w-44 h-44 relative">
//         <Image
//           src={profilePic}
//           alt="Profile Picture of Matthew"
//           className="object-cover rounded-full"
//           layout="fill"
//           priority // Preload this image to improve loading speed
//           placeholder="blur" // Use a blurred low-res placeholder
//           loading="eager" // Load the image immediately
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

//       {/* Social Icons */}
//       <div className="flex space-x-6 mt-8">
//         <div onClick={() => handleRedirect('mailto:matthew.w.cui@gmail.com')} className="cursor-pointer">
//           <Image src={emailIcon} alt="Email Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//         <div onClick={() => handleRedirect('https://www.linkedin.com/in/matthewwcui/')} className="cursor-pointer">
//           <Image src={linkedinIcon} alt="LinkedIn Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//         <div onClick={() => handleRedirect('https://github.com/mwcui')} className="cursor-pointer">
//           <Image src={githubIcon} alt="GitHub Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//         <div onClick={() => handleRedirect('https://www.instagram.com/mwcui/')} className="cursor-pointer">
//           <Image src={instagramIcon} alt="Instagram Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//         <div onClick={() => handleRedirect('https://www.tiktok.com/@mwcui')} className="cursor-pointer">
//           <Image src={tiktokIcon} alt="TikTok Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//         <div onClick={() => handleRedirect('https://x.com/mwcui')} className="cursor-pointer">
//           <Image src={xIcon} alt="X Icon" width={48} height={48} className="hover:opacity-75" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


'use client'

import Image from 'next/image';
import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

// Import SVG icons
import emailIcon from '/public/Icons/icons8-email.svg';
import linkedinIcon from '/public/Icons/icons8-linkedin.svg';
import githubIcon from '/public/Icons/icons8-github.svg';
import instagramIcon from '/public/Icons/icons8-instagram.svg';
import tiktokIcon from '/public/Icons/icons8-tiktok.svg';
import xIcon from '/public/Icons/icons8-twitterx.svg';

const About = () => {

  const handleRedirect = (url) => {
    console.log(`Redirecting to: ${url}`); // Debugging line
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-inika pt-16 pb-16 px-4">

      <div className="m-10 w-44 h-44 relative">
        <Image
          src={profilePic}
          alt="Profile Picture of Matthew"
          className="object-cover rounded-full"
          layout="fill"
          priority // Preload this image to improve loading speed
          placeholder="blur" // Use a blurred low-res placeholder
          loading="eager" // Load the image immediately
        />
      </div>

      {/* About Text */}
      <div className="text-center text-xl max-w-2xl leading-relaxed" style={{ width: '600px', maxWidth: '90vw' }}>
        <p>
          Matthew is an entrepreneur and engineer based in Los Angeles, California. His work spans many organizations including NASA, The Walt Disney Company, and Northrop Grumman.
        </p>
        <p className="mt-8">
          He is currently building gov-tech products to help local governments across the country better serve their residents.
        </p>
        <p className="mt-8">
          Outside of building, Matthew enjoys dance, music, travel, reading, and spending time with friends and family.
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-8 relative"> {/* relative is what allows me to select the icon and have it redirect. why? don't know. artur helped me test and figured it out randomly*/}
        <a href='mailto:matthew.w.cui@gmail.com' target='_blank'>
          <Image src={emailIcon} alt="Email Icon" width={48} height={48} className="hover:opacity-75" />
        </a>
        <div onClick={() => handleRedirect('https://www.linkedin.com/in/matthewwcui/')} className="cursor-pointer">
          <Image src={linkedinIcon} alt="LinkedIn Icon" width={48} height={48} className="hover:opacity-75" />
        </div>
        <div onClick={() => handleRedirect('https://github.com/mwcui')} className="cursor-pointer">
          <Image src={githubIcon} alt="GitHub Icon" width={48} height={48} className="hover:opacity-75" />
        </div>
        <div onClick={() => handleRedirect('https://www.instagram.com/mwcui/')} className="cursor-pointer">
          <Image src={instagramIcon} alt="Instagram Icon" width={48} height={48} className="hover:opacity-75" />
        </div>
        <div onClick={() => handleRedirect('https://www.tiktok.com/@mwcui')} className="cursor-pointer">
          <Image src={tiktokIcon} alt="TikTok Icon" width={48} height={48} className="hover:opacity-75" />
        </div>
        <div onClick={() => handleRedirect('https://x.com/mwcui')} className="cursor-pointer">
          <Image src={xIcon} alt="X Icon" width={48} height={48} className="hover:opacity-75" />
        </div>
      </div>
    </div>
  );
};

export default About;
