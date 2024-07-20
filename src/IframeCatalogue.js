// import React, { useEffect, useState } from 'react';
// import './iframe.css';

// const IframeCatalogue = () => {
//   const [filteredPosts, setFilteredPosts] = useState([]);
 
//   //const postRange = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30];
//   const startPostId = 10; // Start of the range
//   const endPostId = 40;  // End of the range

//   // Function to generate an array of post IDs within a specified range
//   const generatePostRange = (start, end) => {
//     return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//   };

//   const postRange = generatePostRange(startPostId, endPostId);
  
//   useEffect(() => {
//     const fetchPostMetadata = async () => {
//       const promises = postRange.map(async n => {
//         try {
//           const response = await fetch(`http://localhost:5000/fetchTelegramContent/${n}`);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const text = await response.text();
//           const parser = new DOMParser();
//           const doc = parser.parseFromString(text, 'text/html');

    
//             return n;
          
//         } catch (error) {
//           console.error('Error fetching content:', error);
//         }
//         return null;
//       });

//       const results = await Promise.all(promises);
//       const filteredPosts = results.filter(n => n !== null);
//     };
 
//       // setFilteredPosts(filteredPosts);
//     });

//     return (
//       <div className='bubble'>
//         {filteredPosts.length > 0 ? (
//           filteredPosts.map(n => (
//             <iframe
//               className='bubble-child'
//               key={n}
//               src={`https://t.me/yahooboohoo/${n}?embed=1`}
//               //style={{ width: '100%', height: '300px', marginBottom: '20px' }}
//             />
//           ))
//         ) : (
//           <p>No matching posts found.</p>
//         )}
//       </div>
//     );
//   };

// export default IframeCatalogue;



import React from 'react';
import './iframe.css';

const IframeCatalogue = () => {
  return (

    <div className='bubble'>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
        <iframe className='bubble-child'  
          key={n}
          src={`https://t.me/yahooboohoo/${26 - n}?embed=1`}
        />
      ))}
    </div>
  );
};

export default IframeCatalogue;