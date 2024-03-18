// components/DrawingPanel.js
'use client'

// components/DrawingPanel.js

import React, { useRef, useState } from 'react';
import { FabricJSCanvas } from 'fabricjs-react';
import { fabric } from 'fabric';

const DrawingPanel = () => {
  const canvasRef = useRef(null);
  const [selectedTool, setSelectedTool] = useState(null);

  const handleAddText = () => {
    setSelectedTool('text');
  };

  const handleCanvasClick = (e) => {
    if (!selectedTool) return;

    const canvas = canvasRef.current;
    const fabricCanvas = canvas.getFabricCanvas();

    if (selectedTool === 'text') {
      const text = new fabric.Textbox('Your Text Here', {
        left: e.clientX - canvas.getBoundingClientRect().left,
        top: e.clientY - canvas.getBoundingClientRect().top,
        fontSize: 20,
        fill: 'black',
      });
      fabricCanvas.add(text);
      setSelectedTool(null); // Reset selected tool after adding text
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleAddText}>Add Text</button>
      </div>
      <FabricJSCanvas
        ref={canvasRef}
        width={800}
        height={600}
        onClick={handleCanvasClick}
      />
    </div>
  );
};

export default DrawingPanel;

