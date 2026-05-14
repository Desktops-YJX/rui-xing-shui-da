"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageLightbox({ src, alt, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <div 
        className="relative w-full h-full cursor-pointer group" 
        onClick={() => setIsOpen(true)}
        title="点击放大查看"
      >
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={className}
        />
        {/* Hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100 shadow-sm">
            <ZoomIn className="w-5 h-5 text-brand-dark" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8" 
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full p-2 transition-all z-[110]"
            onClick={(e) => { 
              e.stopPropagation(); 
              setIsOpen(false); 
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container itself
          >
            <Image 
              src={src} 
              alt={alt} 
              fill 
              className="object-contain" 
              sizes="100vw"
              quality={100}
            />
          </div>
        </div>
      )}
    </>
  );
}
