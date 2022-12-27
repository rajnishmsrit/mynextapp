import React, { useEffect, useState } from 'react';
import Content from '../src/components/Content';
import ThemeProvider from '../src/providers/ThemeProvider';

const HomePage:React.FC<{goal:number}> = ({goal}) => {
  return (
    <ThemeProvider>
      <Content goal={2}></Content>
    </ThemeProvider>
     
  )
}

export default HomePage
