import React from 'react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [textSize, setTextSize] = useState('text');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTextSize('text-xs'); // iPhone
      } else if (window.innerWidth < 1024) {
        setTextSize('text-sm'); // iPad
      } else {
        setTextSize('text'); // Laptop and larger
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className="text-white py-3 fixed bottom-0 left-0 right-0 font-inika">
      <div className="flex justify-center">
        <div className="bg-gray-600 bg-opacity-70 rounded-lg px-2 py-2 flex items-center">
          <p className={`${textSize} pr-4 whitespace-nowrap`}>
            Facing a challenge? Let&apos;s explore it together
          </p>
          <button
            className={`bg-white text-[#0C3B65] ${textSize} hover:bg-slate-200 transition-colors duration-200 font-bold py-1 px-3 rounded whitespace-nowrap`}
            onClick={() => window.open('https://cal.com/mwcui', '_blank')}
          >
            Book a Call
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;