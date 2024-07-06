import React from 'react';
import './iframe.css'

const IframeCatalogue = () => {
  return (
    <div className='bubble'>
      {[3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => (
        <iframe className='bubble-child'  
          key={n}
          src={`https://t.me/yahooboohoo/${1 + n}?embed=1`}
          // frameBorder="0"
          width="0%"
          height="640px" // Adjust the height as needed
        />
      ))}
    </div>
  );
};

export default IframeCatalogue;