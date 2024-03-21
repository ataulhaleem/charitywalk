"use client";

import App from "./components/App";
import { FormDataProvider } from "./contexts/FormDataContxt";
import { SVGProvider } from "./contexts/SVGContext";
import { AuthProvider } from "./contexts/AuthenticationContex";

export default function Home() {
  return (
    <AuthProvider>

    <FormDataProvider>
      <SVGProvider>
        <App />
      </SVGProvider>
    </FormDataProvider>
    </AuthProvider>

  );
}

// pages/index.js
// 'use client'
// import React, { useRef, useState } from 'react';
// import { FabricJSCanvas } from 'fabricjs-react';
// import Toolbar from './components/Toolbar';
// import { fabric } from 'fabric';
// import ImageEditor from './components/ImageEditor';
// import SVGComponent from './components/SVG';
// import SVGForm from './components/SVGform';

// const Home = () => {
//   const canvasRef = useRef(null);
//   const [selectedTool, setSelectedTool] = useState(null);

//   const [svgData, setSVGData] = useState(null);

// const handleSubmit = (data) => {
//   setSVGData(data);
// };

//   const handleAddShape = () => {
//     setSelectedTool('shape');
//   };

//   const handleAddText = () => {
//     setSelectedTool('text');
//   };

//   const handleAddImage = () => {
//     setSelectedTool('image');
//   };

//   const handleSelectionMode = () => {
//     setSelectedTool('selection');
//   };

//   const handleClearCanvas = () => {
//     const canvas = canvasRef.current;
//     const fabricCanvas = canvas.getFabricCanvas();
//     fabricCanvas.clear();
//   };

//   const handleCanvasClick = (e) => {
//     if (!selectedTool) return;

//     const canvas = canvasRef.current;
//     const fabricCanvas = canvas.getFabricCanvas();

//     if (selectedTool === 'text') {
//       const text = new fabric.Textbox('Your Text Here', {
//         left: e.clientX - canvas.getBoundingClientRect().left,
//         top: e.clientY - canvas.getBoundingClientRect().top,
//         fontSize: 20,
//         fill: 'black',
//       });
//       fabricCanvas.add(text);
//       setSelectedTool(null); // Reset selected tool after adding text
//     }
//   };

//   return (
//     <div>
//       {/* <Toolbar
//         onAddShape={handleAddShape}
//         onAddText={handleAddText}
//         onAddImage={handleAddImage}
//         onSelectionMode={handleSelectionMode}
//         onClearCanvas={handleClearCanvas}
//       />
//       <FabricJSCanvas
//         ref={canvasRef}
//         width={800}
//         height={600}
//         onClick={handleCanvasClick}
//       />
//       <ImageEditor /> */}
//     </div>
//   );
// };

// export default Home;
