"use client";

import { useState } from 'react';

export default function Banner({ children }: { children: React.ReactNode }) {
    
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };


  return (
    <div>
      {isVisible ?<div className="relative">
        <div className="border-b p-1 text-center bg-blue-500 text-white">
        20% off for next 3 days
        <button 
          className=" absolute right-1 text-white" 
          onClick={handleClose}
        >
          &times;
        </button>
       
      </div>
      {children}
      </div>
      : (children) }
    </div>
  );
}
