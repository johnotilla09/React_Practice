import React, { useState, useCallback } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App Running');

  const showParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  }, []);

  const vars = {
    name: 'John C. Otilla',
    address: 'Inascan, Guinobatan, Albay'
  };

  return (
    <div className="App">
      <h1>Hi There!!!</h1>
      <Demo show={false} / >
      <Button onClick={showParagraphHandler}>{showParagraph ? 'Hide' : 'Show'} Paragraph</Button>
    </div>
  );
}

export default App;
