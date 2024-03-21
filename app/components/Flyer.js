'use client'
import React, { useState, useEffect } from 'react';
import { useSVGContext } from '../contexts/SVGContext';

const Flyer = ({ 
  walkId, 
  jamaat,
  date,
  time,
  place,
  street,
  number,
  postcode,
  city,
  kidsPrice,
  adultPrice,
  kidsTrackLength,
  regularTrackLength
}) => {
  const { svgString, setSVGString } = useSVGContext();
  const [svgStringLocal, setSVGStringLocal] = useState('');

  useEffect(() => {
    // Generate the SVG string based on component props
    const generatedSVG = generateSVGString({
      walkId, 
      jamaat,
      date,
      time,
      place,
      street,
      number,
      postcode,
      city,
      kidsPrice,
      adultPrice,
      kidsTrackLength,
      regularTrackLength
    });

    // Update local state and context
    setSVGStringLocal(generatedSVG);
    setSVGString(generatedSVG);
  }, [
    walkId, 
    jamaat,
    date,
    time,
    place,
    street,
    number,
    postcode,
    city,
    kidsPrice,
    adultPrice,
    kidsTrackLength,
    regularTrackLength,
    svgStringLocal
  ]);

  return (
    <div dangerouslySetInnerHTML={{ __html: svgStringLocal }} />
    // <h1>This is svg figure component</h1>
  );
};

// Function to generate SVG string
const generateSVGString = ({
  walkId, 
  jamaat,
  date,
  time,
  place,
  street,
  number,
  postcode,
  city,
  kidsPrice,
  adultPrice,
  kidsTrackLength,
  regularTrackLength
}) => {  
  const svgString = `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

      <image x="0" y="0" width="100" height="100" href='/Charity_Walk_Flyer_Germany.jpg'  />
     
      <rect x="5" y="53" width="40" height="3" fill='#273f63' />
      <text x="5" y="55" width="40" height="3" font-size="2" font-family="Singolare" font-weight="bold" text-anchor="left" fill="white">${walkId}. AHMADIYYA</text>

      <rect x="5" y="62" width="40" height="6" fill='#273f63' />      
      <text x="26" y="66.5" font-size="4" font-family="Singolare" font-weight="bold" text-anchor="middle" fill="white">${jamaat}</text>
      <rect x="5" y="68" width="40" height="4" fill='#273f63' />
      <text x="26" y="70" font-size="2" font-family="Singolare" font-weight="bold" text-anchor="middle" fill="white">am ${date} um ${time} Uhr</text>

      <rect x="5" y="70" width="43" height="7" fill='#273f63' />     
      <text x="5" y="73" width="18" height="1" font-size="1" font-family="Singolare" font-weight="bold" text-anchor="left" fill="white">${place}</text>
      <text x="5" y="74" width="18" height="1" font-size="1" font-family="Singolare" text-anchor="left" fill="white">${street}, ${number}</text>
      <text x="5" y="75" width="18" height="1" font-size="1" font-family="Singolare" text-anchor="left" fill="white">${postcode}, ${city}</text>
      <image x="19" y="70.5" width="5" height="7" href='/runningMan.jpg'  />


      <text x="25" y="73" width="18" height="1" font-size="1" font-family="Singolare" text-anchor="left" fill="white">Startgeld:</text>
      <text x="41" y="72" width="18" height="1" font-size="0.8" font-family="Singolare" text-anchor="left" fill="white">Heir Anmelden</text>
 
      <text x="32" y="73" width="18" height="1" font-size="0.8" font-family="Singolare" text-anchor="left" fill="white"> Kinder: ${kidsPrice}</text>
      <text x="32" y="74" width="18" height="1" font-size="0.8" font-family="Singolare" text-anchor="left" fill="white"> Erwachsene: ${adultPrice}€</text>

      <text x="25" y="75" width="18" height="1" font-size="1" font-family="Singolare" text-anchor="left" fill="white">Laufstrecke:</text>

      <text x="32" y="75" width="18" height="1" font-size="0.8" font-family="Singolare" text-anchor="left" fill="white"> Kinderlauf ca. ${kidsTrackLength}m</text>
      <text x="32" y="76" width="18" height="1" font-size="0.8" font-family="Singolare" text-anchor="left" fill="white"> Hauptlauf ca. ${regularTrackLength}km</text>
    </svg>
  `;

  return svgString;
};

export default Flyer;
