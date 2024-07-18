// HomePage.js
import React from 'react';
import IframeCatalogue from './IframeCatalogue';

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <h3> welcome to the home page :)</h3>
        <br></br>
      </div>
      <div>
        <IframeCatalogue />
      </div>
    </div>
  );
};

export default HomePage;