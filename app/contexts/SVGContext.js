'use client'
import React, { createContext, useContext, useState } from 'react';

const SVGContext = createContext();

export const SVGProvider = ({ children }) => {
  const [svgString, setSVGString] = useState('');

  return (
    <SVGContext.Provider value={{ svgString, setSVGString }}>
      {children}
    </SVGContext.Provider>
  );
};

export const useSVGContext = () => useContext(SVGContext);
