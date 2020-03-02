import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState<string>('');
  useEffect(() => {
    (async function () {
      const { data } = await axios.get('http://localhost:7000/fish_service/');
      console.log(data, '-------------data');
      setGreeting(data);
    })()
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{greeting}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
