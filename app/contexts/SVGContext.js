'use client'
import React, { createContext, useContext, useState } from 'react';

const SVGContext = createContext();

export const SVGProvider = ({ children }) => {
  const [svgString, setSVGString] = useState('');

  var value = {
    svgString, setSVGString
  }

  return (
    <SVGContext.Provider value={value}>
      {children}
    </SVGContext.Provider>
  );
};

export const useSVGContext = () => useContext(SVGContext);
