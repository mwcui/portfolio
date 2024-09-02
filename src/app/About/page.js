'use client'

import Image from 'next/image';
import profilePic from '/public/About/ProfilePicture.png'; // Replace with your actual image path

const About = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white font-inika pt-16 pb-16 px-4">

      <div className="m-10 w-40 h-36 relative">
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
      <div className="text-center text-5xl max-w-2xl leading-relaxed" style={{ width: '750px', maxWidth: '90vw' }}>
        <p>
        Hi-I’m Matthew. I build software that helps local government streamline operations and solve complex problems.
        </p>

      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 mt-16 relative">
        <a href='mailto:matthew.w.cui@gmail.com' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          Email
        </a>
        <a href='https://www.linkedin.com/in/matthewwcui/' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          LinkedIn
        </a>
        <a href='https://github.com/mwcui' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          GitHub
        </a>
        <a href='https://www.instagram.com/mwcui/' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          Instagram
        </a>
        <a href='https://www.tiktok.com/@mwcui' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          TikTok
        </a>
        <a href='https://x.com/mwcui' target='_blank' rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default About;
