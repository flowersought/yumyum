// HomePage.js
import React from 'react';
import IframeCatalogue from './IframeCatalogue';

<html>
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    </style>
    </head>
</html>

const HomePage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <div>
        <h3> welcome to the home page :)</h3>
        <br></br>
      </div>
      <IframeCatalogue />
    </div>
  );
};

export default HomePage;