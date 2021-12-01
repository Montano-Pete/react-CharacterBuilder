import { useState } from 'react';
import Character from './components/character/Character';
import './App.css';

function App() {
  const [head] = useState('duck');
  const [torso] = useState('pink');
  const [pants] = useState('white');

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>Design Your Scuffed Character!</h1>
          <Character head={head} torso={torso} pants={pants} />
        </header>
      </main>
    </div>
  );
}

export default App;
