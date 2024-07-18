// HomePage.js
import React from 'react';
import IframeCatalogue from './IframeCatalogue';
import './App.css';

const HomePage = () => {
  return (
    <div>
      <br></br>
      <h1>buffet clearers</h1>
      <div>
        <text> welcome to the home page :)</text>
        <br></br>
        <br></br>
      </div>
      <div>
        <IframeCatalogue />
      </div>
    </div>
  );
};

export default HomePage;