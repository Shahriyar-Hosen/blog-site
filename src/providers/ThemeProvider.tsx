"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { FC, PropsWithChildren, useContext, useEffect, useState } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
