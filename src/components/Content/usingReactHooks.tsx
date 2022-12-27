import React, { useEffect, useId, useState } from 'react';

const Content:React.FC<{goal:number}> = ({goal}) => {

  const [counter, setCounter] = useState(0);

  const handleClick = function() {
    setCounter(counter+1);
  }
  const handleReset = function() {
    setCounter(0);
  }

  const id = useId();

  console.log(id);
  
  return(
    <>
    <div>ID : {id}</div>
    <div>Counter : {counter}</div>
    <button onClick={handleClick}>+ Counter</button>
    <button onClick={handleReset}>Reset counter</button>
    </>
  ); 
}

export default Content