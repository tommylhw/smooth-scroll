'use client';
import React, { useState, useEffect, useRef } from "react";
import { useSmoothScroller } from "@/providers/ScrollProvider";
import { useMousePosition } from "@/providers/MouseProvider";

const Section = ({ i }: { i: number }) => {

  const scrollerRef = useSmoothScroller();
  const mouseRef = useMousePosition();

  const componentRef = useRef<any>();
  
  let rf: any;
  let targetX = 0;
  let targetY = 0;
  let curX = 0; 
  let curY = 0;
  const lerpFactor = 0.1;
  const movementFactor = 20;
  
  useEffect(() => {
    if (componentRef.current == null) return;

    const raf = () => {
      targetX = mouseRef.current.normalizedX;
      targetY = mouseRef.current.normalizedY;
      let dx = targetX - curX;
      let dy = targetY - curY;

      curX += dx * lerpFactor;
      curY += dy * lerpFactor;
      componentRef.current.style.transform = `translate(${curX * movementFactor}%, ${curY * movementFactor}%)`;

      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rf);
    }
  } , []);

  // useEffect(() => {
  //   scrollerRef?.on("scroll", (e: any) => {
  //     console.log(e);
  //   });
  // }, [scrollerRef]);

  return (
    <div className="flex justify-center items-center w-full h-screen text-white font-[family-name:var(--font-universo-black)]">
      <h1 ref={componentRef} className=" text-7xl">Section {i}</h1>
    </div>
  );
};

export default Section;
