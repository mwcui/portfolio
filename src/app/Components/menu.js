import { useEffect, useState } from 'react'; // Add useEffect and useState imports

// this is the menu that appears when the menu button is clicked

const Menu = ({ closeMenu, onMenuSelect, animationMidpoint }) => {
  const [titleSize, setTitleSize] = useState('text-3xl'); // default to iphone size
  const [titleSpacing, setTitleSpacing] = useState('mb-16'); // default to iphone size
  const [itemSize, setItemSize] = useState('text-2xl'); // default to iphone size
  const [itemSpacing, setItemSpacing] = useState('space-y-8'); // default to iphone size

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width >= 1280) { // Mac
        setTitleSize('text-4xl');
        setTitleSpacing('mb-20');
        setItemSize('text-3xl');
        setItemSpacing('space-y-10');
      } else if (width >= 768) { // iPad
        setTitleSize('text-3xl');
        setTitleSpacing('mb-20');
        setItemSize('text-3xl');
        setItemSpacing('space-y-10');
      } else if (width >= 480) { // iPhone
        setTitleSize('text-3xl');
        setTitleSpacing('mb-16');
        setItemSize('text-2xl');
        setItemSpacing('space-y-8');
      } else if (height < 550) { // Screen height < 550 px
        setTitleSize('text-2xl');
        setTitleSpacing('mb-4');
        setItemSize('text-xl');
        setItemSpacing('space-y-4');
      }
    };

    updateSize(); // Initial size update
    window.addEventListener('resize', updateSize); // Update on resize
    return () => window.removeEventListener('resize', updateSize); // Cleanup
  }, []);

  const handleSelect = (page) => {
    onMenuSelect(page); // selects the page from the menu
    setTimeout(() => { // waits for the animation to complete
      closeMenu(); // closes the menu
    }, animationMidpoint);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center checkered-bg z-50 p-4">
      <div className="bg-white w-full max-w-[calc(100vw-120px)] h-full max-h-[calc(100vh-120px)] text-center relative border-8 border-[#0C3B65] flex flex-col justify-center p-4">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-6 text-3xl font-inika hover:text-gray-600"
        >
          X
        </button>
        <h1 className={`font-bold ${titleSize} font-inika ${titleSpacing}`}>MENU</h1>
        <ul className={` ${itemSpacing} ${itemSize} font-inika`}>
          <li
            className="hover:text-gray-600 hover:italic cursor-pointer"
            onClick={() => handleSelect('menu')}
          >
            HOME
          </li>
          <li
            className="hover:text-gray-600 hover:italic cursor-pointer"
            onClick={() => handleSelect('projects')}
          >
            PROJECTS
          </li>
          {/* <li
            className="hover:text-gray-600 hover:italic cursor-pointer"
            onClick={() => handleSelect('creative')}
          >
            CREATIVE
          </li> */}
          <li
            className="hover:text-gray-600 hover:italic cursor-pointer"
            onClick={() => handleSelect('logo')}
          >
            LOGO
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;




