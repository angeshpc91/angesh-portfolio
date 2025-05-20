
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeType = "brand" | "purple" | "green" | "orange";
type ColorMode = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  colorMode: ColorMode;
  setTheme: (theme: ThemeType) => void;
  setColorMode: (mode: ColorMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("brand");
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    // Check for user preference on initial load
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('color-mode');
      if (savedMode === 'dark' || savedMode === 'light') return savedMode;
      
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // Apply theme classes to document
  useEffect(() => {
    // Remove all theme classes first
    document.documentElement.classList.remove("theme-brand", "theme-purple", "theme-green", "theme-orange");
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply color mode classes
  useEffect(() => {
    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save color mode preference
    localStorage.setItem('color-mode', colorMode);
  }, [colorMode]);

  return (
    <ThemeContext.Provider value={{ theme, colorMode, setTheme, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
