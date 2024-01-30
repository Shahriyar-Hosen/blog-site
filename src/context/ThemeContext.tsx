"use client";

import { createContext, useEffect, useState } from "react";

// Add types for the context value
interface ThemeContextProps {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Return a default value if window is undefined
};

// Add types for ThemeContextProvider props
interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Provide the context value with proper types
  const contextValue: ThemeContextProps = { theme, toggle };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
