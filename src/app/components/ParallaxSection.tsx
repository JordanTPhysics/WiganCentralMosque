"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import "../styles/globals.css";

type ParallaxSectionProps = {
    backgroundImage: string;
    children: React.ReactNode;
    };

const ParallaxSection = ({ backgroundImage, children }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${offsetY * 0.5}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
