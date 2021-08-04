import React, { useState , useCallback}from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/DemoOutput/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle,setAllowToggle] = useState(false)
  console.log("App is running");

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle)
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Button</Button>
    </div>
  );
}

export default App;
