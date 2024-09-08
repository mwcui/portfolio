import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-4 fixed bottom-0 left-0 right-0 font-inika ">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-lg pr-4">
          Facing a challenge? Let&apos;s explore it together
        </p>
        <button
          className="bg-white text-[#0C3B65] hover:bg-slate-400 transition-colors duration-200 font-bold py-1 px-3 rounded"
          onClick={() => window.open('https://cal.com/mwcui', '_blank')}
        >
          Book a Call
        </button>
      </div>
    </footer>
  );
};

export default Footer;
