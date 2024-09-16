import { useContext } from "react";
import React from "react";
import { useState } from "react";

// 1
const ThemeContext = React.createContext();

export function useDarkTheme() {
    // 3
    return useContext(ThemeContext);
}

function ThemeWrapper({children}) {
    const [isDark, updateTheme] = useState(false);
    const handleToggleTheme = ()=> {
      updateTheme(!isDark);
    }

    return <ThemeContext.Provider value={{ isDark, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeWrapper;