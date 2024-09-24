// this is the menu that appears when the menu button is clicked

const Menu = ({ closeMenu, onMenuSelect, animationMidpoint }) => {
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
        <h1 className="font-bold text-3xl font-inika mb-20">MENU</h1>
        <ul className="space-y-10 text-2xl font-inika">
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




