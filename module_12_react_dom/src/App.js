import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggling, setAllowToggling] = useState(false);

  console.log('App Running');

  const showParagraphHandler = useCallback(() => {
    if (allowToggling) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggling]);

  const allowToggleHandler = () => {
    setAllowToggling(prevAllowToggle => !prevAllowToggle);
  };

  return (
    <div className="App">
      <h1>Hi There!!!</h1>
      <Demo show={showParagraph} / >
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={showParagraphHandler}>{showParagraph ? 'Hide' : 'Show'} Paragraph</Button>
    </div>
  );
}

export default App;
