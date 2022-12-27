import React, {
    forwardRef, 
    useContext
} from 'react';

import {ThemeContext} from '../../providers/ThemeProvider'

const TitleBar = forwardRef(function TitleBar(props, ref) {

    const { theme, setTheme } = useContext(ThemeContext);
    const className = 'header-' + theme;    
    return (
        <>
            <div className={className}>
                <h2 ref={ref}>Hello {props.titleName}</h2>
            </div>
            <div>
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('light')}>Light</button>
            <div>Current theme: {theme}</div>
        </div>
        </>
        
    )
});

export default TitleBar;