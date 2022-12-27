import React, {createContext, useState} from 'react';

export const ThemeContext = createContext(null);

const ThemeProvider: React.FC = (props) => {
    const [theme, setTheme] = useState('light');
    const value = {theme, setTheme};
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
