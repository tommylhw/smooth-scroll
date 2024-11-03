"use client";
import React, { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import '../styles/cursor.css';

const Cursor = () => {

  const cursorRef = useRef<any>(null);

  useEffect(() => {
    // if (cursorRef.current == null) return;
    let ctx = gsap.context();
    const watch = (e: any) => {
      const x = e.clientX;
      const y = e.clientY;

      // console.log("x:", x, ", y:", y);

      gsap.to(cursorRef.current, {
        duration: 0.5,
        x,
        y,
        ease: "power4",
        overwrite: "auto",
        stagger: 0.1,
      });
    };

    window.addEventListener("mousemove", watch, { passive: false });

    return () => {
      window.removeEventListener("mousemove", watch);
    };
  }, []);

  return (
    <span
      ref={cursorRef}
      className="custom-cursor"
    ></span>
  );
};

export default Cursor;
