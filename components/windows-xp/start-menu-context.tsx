"use client";

import { createContext, useContext, useState } from "react";

type StartMenuContextType = {
  isOpen: boolean;
  toggleStartMenu: () => void;
  closeStartMenu: () => void;
};

const StartMenuContext = createContext<StartMenuContextType | undefined>(undefined);

export const StartMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStartMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeStartMenu = () => {
    setIsOpen(false);
  };

  return (
    <StartMenuContext.Provider value={{ isOpen, toggleStartMenu, closeStartMenu }}>
      {children}
    </StartMenuContext.Provider>
  );
};

export const useStartMenu = () => {
  const context = useContext(StartMenuContext);
  if (!context) {
    throw new Error("useStartMenu must be used within a StartMenuProvider");
  }
  return context;
};