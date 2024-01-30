"use client";

import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export type ITheme = "dark" | "light";
export interface ThemeContextProps {
  theme: ITheme;
  toggle: () => void;
}

const defaultContext: ThemeContextProps = {
  theme: "light",
  toggle: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(defaultContext);

const getFromLocalStorage = (): ITheme => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value === null ? "light" : (value as ITheme);
  }
  return "light";
};

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  // Provide the context value with proper types
  const contextValue: ThemeContextProps = { theme, toggle };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
