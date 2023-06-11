import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('App Running');

  const showParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  };

  return (
    <div className="App">
      <h1>Hi There!!!</h1>
      {showParagraph && <p>Hello I Am John C. otilla</p>}
      <Button onClick={showParagraphHandler}>{showParagraph ? 'Hide' : 'Show'} Paragraph</Button>
    </div>
  );
}

export default App;
