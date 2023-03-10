import React, { 
  useEffect, 
  useId, 
  useState,
  useRef,
  createContext
 } from 'react';
import TitleBar from './TitleBar';

const Content:React.FC<{goal:number}> = ({goal}) => {

  const [counter, setCounter] = useState(0);

  const handleClick = function() {
    setCounter(counter+1);
  }
  const handleReset = function() {
    setCounter(0);
  }

  const id = useId();

  const titleElement = useRef();

  console.log(titleElement.current);
  
  useEffect(() => {
    console.log ("UseEffect :: ", window.location);
  }, []);

  return(
    <>
      <h2>Hello People of world!</h2>

      <input type="text" id="fname" name="fname"></input>
      <div>ID : {id}</div>
      <div>Counter : {counter}</div>
      <button onClick={handleClick}>+ Counter</button>
      <button onClick={handleReset}>Reset counter</button>
      <div >
        <TitleBar ref={titleElement} titleName="New Year 2022"></TitleBar>
      </div>
    </>
  ); 
}

export default Content