// FormDataContext.js
'use client'
import React, { createContext, useState, useContext } from 'react';

const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    walkId: 1,
    jamaat: 'DÜREN',
    place: 'Burgerhaus',
    street: 'Linnicher straße',
    number: '38b',
    postcode: 52428,
    city: 'Düren',
    kidsPrice: 'frie',
    adultPrice: 10,
    kidsTrackLength: 800,
    regularTrackLength: 5,
    date: new Date().toLocaleDateString(),
    time: `${new Date().getHours()}:${new Date().getMinutes()}`
    
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => useContext(FormDataContext);
