'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export default function NavigationProvider({ children }) {
  const [loadedSections, setLoadedSections] = useState(new Set());
  const [shouldLoadAll, setShouldLoadAll] = useState(false);

  const forceLoadSection = useCallback((sectionId) => {
    setLoadedSections((prev) => new Set([...prev, sectionId]));
  }, []);

  const forceLoadAllSections = useCallback(() => {
    setShouldLoadAll(true);
  }, []);

  const isSectionForceLoaded = useCallback(
    (sectionId) => {
      return shouldLoadAll || loadedSections.has(sectionId);
    },
    [shouldLoadAll, loadedSections],
  );

  return (
    <NavigationContext.Provider
      value={{
        forceLoadSection,
        forceLoadAllSections,
        isSectionForceLoaded,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
