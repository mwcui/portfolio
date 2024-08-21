const Menu = ({ closeMenu, onMenuSelect }) => {
  const handleSelect = (page) => {
    onMenuSelect(page);
    closeMenu(); // Close the menu after selection
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
        <h1 className="font-bold text-4xl font-inika mb-20">MENU</h1>
        <ul className="space-y-6 sm:space-y-8 md:space-y-10 text-xl sm:text-2xl md:text-3xl font-inika">
          <li
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => handleSelect('experience')}
          >
            EXPERIENCE
          </li>
          <li
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => handleSelect('creative')}
          >
            CREATIVE
          </li>
          <li
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => handleSelect('about')}
          >
            ABOUT
          </li>
          <li
            className="hover:text-gray-600 cursor-pointer"
            onClick={() => handleSelect('contact')}
          >
            CONTACT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;




