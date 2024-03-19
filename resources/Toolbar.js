// components/Toolbar.js
'use client'
import React from 'react';

const Toolbar = ({ onAddShape, onAddText, onAddImage, onSelectionMode, onClearCanvas }) => {
  return (
    <div>
      <button onClick={onAddShape}>Add Shape</button>
      <button onClick={onAddText}>Add Text</button>
      <button onClick={onAddImage}>Add Image</button>
      <button onClick={onSelectionMode}>Selection Mode</button>
      <button onClick={onClearCanvas}>Clear Canvas</button>
    </div>
  );
};

export default Toolbar;
