import React, { createContext, useContext, useState } from "react";

export interface ThemeContextType {
    theme : "Light" | "Dark";

    toggleTheme : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export default function ThemePorvider ( {children} : {children : React.ReactNode} ) {
    const [theme , setTheme] = useState<"Light" | "Dark">("Light");

    function toggleTheme (){
        setTheme((prev) => prev === "Light" ? "Dark" : "Light")
    }

    return(
        <ThemeContext.Provider
        value = {{
            theme,
            toggleTheme
        }}
        >

            {children}

        </ThemeContext.Provider>
    )
}


export function useTheme(){
    const context = useContext(ThemeContext)

     if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}
