'use client';
import Cursor from '@/components/Cursor';
import React, { useState, useEffect, useContext, createContext, useRef, ReactNode } from 'react';

const MouseContext = createContext<any>(null);
export const useMousePosition = () => useContext(MouseContext);

const MouseProvider = ({ children }: { children: ReactNode }) => {

  const mouseRef = useRef<any>();

  useEffect(() => {
    const onMouseMove = (e: any) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      };
      // console.log(mouseRef.current);
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }
  , []);

  return (
    <MouseContext.Provider value={mouseRef}>
      <Cursor />
      {children}
    </MouseContext.Provider>
  )
}

export default MouseProvider