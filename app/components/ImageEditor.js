// components/ImageEditor.js
'use client'

import React from 'react';
import { FabricJSCanvas } from 'fabricjs-react';
import DrawingPanel from './DrawingPanel';

const ImageEditor = () => {
  const handleReady = (canvas) => {
    // Your canvas manipulation logic here
  };

  const canvasStyle = {
    border: '2px dashed #aaa', // Adjust border style as needed
    borderRadius: '5px', // Optional: Add border radius for rounded corners
  };

  return (
    <div style={canvasStyle}>
      <FabricJSCanvas onReady={handleReady} width={800} height={600}>
        {/* Any additional components or elements */}
      </FabricJSCanvas>
      <DrawingPanel />
    </div>
  );
};

export default ImageEditor;

