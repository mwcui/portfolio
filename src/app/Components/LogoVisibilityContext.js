// this toggles whether the logo in the navbar shows up or not
// ive set it so that when the logo is in the center of the screen, to make the logo in the navbar invisible
// there are pieces of code that have been implement on other pages that tie to this one

// not currently in use

import { createContext, useContext, useState } from 'react';

const LogoVisibilityContext = createContext();

export const useLogoVisibility = () => useContext(LogoVisibilityContext);

export const LogoVisibilityProvider = ({ children }) => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  return (
    <LogoVisibilityContext.Provider value={{ isLogoVisible, setIsLogoVisible }}>
      {children}
    </LogoVisibilityContext.Provider>
  );
};
