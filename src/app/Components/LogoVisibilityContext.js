// src/app/Components/LogoVisibilityContext.js

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
