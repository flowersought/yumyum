import React from 'react';
import './App.css';
import './button.css';
import './scrollbar.css';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        {/* <TelegramWidget /> */}
        <p>
        <div>
          <HomePage />
        </div>
        </p>
        
        <a
          className="App-link" /*now links to the bot*/
          href="https://t.me/buffetclearerbot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button class="button"><span>Message the bot!</span></button>
        </a>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}

export default App;
