'use client'
import { Grid, Button } from '@mui/material';
import Flyer from './Flyer';
import FlyerForm from './FlyerForm';
import { useSVGContext } from '../contexts/SVGContext';
import { useFormData } from '../contexts/FormDataContxt';
import { useAuthContext } from '../contexts/AuthenticationContex';
import Login from './Login';


// import { sql } from '@vercel/postgres';
// import { NextResponse } from 'next/server';



export default function App() {
  const {formData, setFormData } = useFormData();
  const {svgString} = useSVGContext();
  const {isAuthenticated, setIsAuthenticated} = useAuthContext()

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
  


  // async function Cart({ params }) {
  //   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
  // }  

  return (

    <>

    {isAuthenticated ? <div>
      <Grid container spacing={2} sx={{padding:5}}>
        <Grid item xs={4}>
        <FlyerForm/>
        </Grid>
        <Grid item xs={7} sx={{ml:1, mt:-19}} >
        <Flyer {...formData} />
        {/* <Button onClick={handleDownloadJPG} variant="contained" color="primary">
            Download JPG
            </Button> */}
        </Grid>

  </Grid>

    </div>
:
<Login/>  
}  
    </>



  );
};
