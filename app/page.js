'use client'
import React, { useEffect, useState } from 'react';
import SVGComponent from './components/SVG';
import SVGForm from './components/SVGform';
import { Grid, Button } from '@mui/material';
import { useFormData } from './contexts/FormDataContxt';
import { FormDataProvider } from './contexts/FormDataContxt';
import { useSVGContext } from './contexts/SVGContext';

export default function Home() {
  const {formData, setFormData } = useFormData();
  const {svgString} = useSVGContext();


  const svgToJpg = (svgString) => {

    console.log(svgString)
    return new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
  
        const svgImage = new Blob([svgString], { type: 'image/svg+xml' });
  
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
  
          canvas.toBlob((blob) => {
            URL.revokeObjectURL(img.src); // Revoke the object URL generated from the image blob
            resolve(blob);
          }, 'image/jpeg');
        };
        img.onerror = reject;
        img.src = URL.createObjectURL(svgImage);
      } catch (error) {
        reject(error);
      }
    });
  };
  

  const handleDownloadJPG = async () => {
    try {
      const jpgBlob = await svgToJpg(svgString);
      const url = URL.createObjectURL(jpgBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Flyer.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error converting SVG to JPG:', error);
    }
  };
  


  return (

    <Grid container spacing={2} sx={{padding:5}}>
    <Grid item xs={4}>
      <SVGForm/>
    </Grid>
    <Grid item xs={7} sx={{ml:1, mt:-13}} >
      <SVGComponent {...formData} />
      {/* <Button onClick={handleDownloadJPG} variant="contained" color="primary">
          Download JPG
        </Button> */}
    </Grid>

  </Grid>



  );
};

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


