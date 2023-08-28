import React from 'react';
import * as Sentry from '@sentry/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sentry Error Testing</h1>
        
{/* eslint-disable-next-line */}
<button onClick={() => methodDoesNotExist()}>Break the world</button>

      </header>
    </div>
  );
}

export default App;
