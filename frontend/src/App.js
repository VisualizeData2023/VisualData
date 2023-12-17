import React from 'react';
import ApiCaller from './components/ApiCaller'; // Import the ApiCaller component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <ApiCaller />
      </main>
    </div>
  );
}

export default App;