// import React, { useEffect, useState } from 'react';
// import flyerfront from '/public/Back.svg';

// const Flyer = ({ data }) => {
//   const [svgContent, setSvgContent] = useState(null);

//   useEffect(() => {
//     fetch(flyerfront.src)
//       .then(response => response.text())
//       .then(svgString => {
//         setSvgContent(svgString);
//       })
//       .catch(error => {
//         console.error('Error loading SVG:', error);
//       });
//   }, [data]);

//   const handleDownload = () => {
//     if (!svgContent) return;
  
//     const parser = new DOMParser();
//     const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
//     const svgElement = svgDoc.documentElement;
//     // svgElement.querySelector("#Rectangle_1_copy_2") = "HELLO"
  
//     const svgBlob = new Blob([svgElement.outerHTML], { type: 'image/svg+xml' });
//     const url = URL.createObjectURL(svgBlob);
  
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'flyer.jpg';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
  
//     URL.revokeObjectURL(url);
//   };
  
//   return (
//     <div>
//       {svgContent && <div dangerouslySetInnerHTML={{ __html: svgContent }} />}
//       <button onClick={handleDownload}>Download JPG</button>
//     </div>
//   );
// };

// export default Flyer;


import React, { useEffect, useState } from 'react';
import flyerfront from '/public/Front.svg';

const Flyer = ({ data }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    fetch(flyerfront.src)
      .then(response => response.text())
      .then(svgString => {
        // Manipulate the SVG content here before setting it
        // For example, you can change the color of a specific element
        // Or add new elements using DOM manipulation methods
        const modifiedSvgString = modifySvg(svgString);

        setSvgContent(modifiedSvgString);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, [data]);

  const modifySvg = svgString => {
    // Parse the SVG string into a DOM document
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
    const svgElement = svgDoc.documentElement;

    // Example: Change the color of a specific element
    const textElement = svgElement.querySelector('#charitywalkId');
    if (textElement) {
      textElement.textContent = `${data.walkId}. AHMADIYYA`;
    }
    
    // Example: Add a new rectangle element
    const newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newRect.setAttribute('x', '100');
    newRect.setAttribute('y', '100');
    newRect.setAttribute('width', '50');
    newRect.setAttribute('height', '50');
    newRect.setAttribute('fill', 'blue');
    svgElement.appendChild(newRect);

    // Serialize the modified SVG back to string
    const modifiedSvgString = new XMLSerializer().serializeToString(svgElement);

    return modifiedSvgString;
  };

  const handleDownload = () => {
    if (!svgContent) return;

    // Download logic remains the same
  };

  return (
    <div>
      {svgContent && <div dangerouslySetInnerHTML={{ __html: svgContent }} />}
      <button onClick={handleDownload}>Download JPG</button>
    </div>
  );
};

export default Flyer;
