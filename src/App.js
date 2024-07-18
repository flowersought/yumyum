import React from 'react';
import './App.css';
import './button.css';
import './scrollbar.css';
import HomePage from './pages/homepage.js';
import vegetable from './pages/vegetable.js';
import halal from './pages/halal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import { NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <p>
        <div>
          <Main/>
        </div>
        </p>

          <a
              className="App-link" /*now links to the bot*/
              href="https://t.me/buffetclearerbot"
              target="_blank"
              rel="noopener noreferrer">
              <button class="button"><span>Message the bot!</span></button>
          </a>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}

const Main = () => (
  <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route exact path='/vegetable' component={vegetable}></Route>
    <Route exact path='/halal' component={halal}></Route>
  </Switch>
);

export default App;
