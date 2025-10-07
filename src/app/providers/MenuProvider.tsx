"use client";

import React from "react";
import { Dispatch, SetStateAction } from "react";

interface MenuBarContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuBarContext = React.createContext<MenuBarContextType>({
  isOpen: false,
  setIsOpen: () => null,
});

const MenuBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <MenuBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuBarContext.Provider>
  );
};

export default MenuBarProvider;
