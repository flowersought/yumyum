import React from 'react';
import './App.css';
import './button.css';
import TelegramEmbed from 'react-telegram-embed';
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TelegramWidget /> */}
        <p>
          we eat food
        <div>
          <HomePage />
        </div>
        </p>
        
        <a
          className="App-link" /*placeholder link*/
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D"
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
