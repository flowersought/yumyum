import React, { useEffect, useState } from 'react';
import './iframe.css';

const IframeVeg = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const searchString = '#vegetarian';
  //const postRange = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30];
  const startPostId = 10; // Start of the range
  const endPostId = 30;  // End of the range

  // Function to generate an array of post IDs within a specified range
  const generatePostRange = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const postRange = generatePostRange(startPostId, endPostId);

  useEffect(() => {
    const fetchPostMetadata = async () => {
      const promises = postRange.map(async n => {
        try {
          const response = await fetch(`http://localhost:5000/fetchTelegramContent/${n}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const text = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(text, 'text/html');

          const messageDiv = doc.querySelector('div.tgme_widget_message_text.js-message_text');
          console.log(`Message div for post ${n}:`, messageDiv); // Debugging line
          if (messageDiv && messageDiv.textContent.includes(searchString)) {
            console.log(`Post ${n} contains search string`); // Debugging line
            return n;
          }
        } catch (error) {
          console.error('Error fetching content:', error);
        }
        return null;
      });

      const results = await Promise.all(promises);
      const filteredPosts = results.filter(n => n !== null);
      console.log('Filtered posts:', filteredPosts); 
      filteredPosts.sort((a, b) => b - a);
      setFilteredPosts(filteredPosts);
    };

    fetchPostMetadata();
  }, [searchString, postRange]);

  return (
    <div className='bubble'>
      {filteredPosts.length > 0 ? (
        filteredPosts.map(n => (
          <iframe
            className='bubble-child'
            key={n}
            src={`https://t.me/yahooboohoo/${n}?embed=1`}
            //style={{ width: '100%', height: '300px', marginBottom: '20px' }}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IframeVeg;
