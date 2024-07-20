// import React, { useEffect, useState } from 'react';

// const MetaTagFilter = () => {
//   const [matchingMeta, setMatchingMeta] = useState(null);
//   const searchString = '#halal';

//   useEffect(() => {
//     // Get all meta tags
//     const metaTags = document.getElementsByTagName('meta');

//     // Iterate through meta tags to find the one with the specific string in the content
//     for (let i = 0; i < metaTags.length; i++) {
//       const metaTag = metaTags[i];
//       if (metaTag.getAttribute('property') === 'og:description') {
//         const content = metaTag.getAttribute('content');
//         if (content && content.includes(searchString)) {
//           setMatchingMeta(content);
//           break;
//         }
//       }
//     }
//   }, [searchString]);

//   return (
//     <div>
//       {matchingMeta ? (
//         <p>Found matching meta description: {matchingMeta}</p>
//       ) : (
//         <p>No matching meta description found.</p>
//       )}
//     </div>
//   );
// };

// export default MetaTagFilter;
