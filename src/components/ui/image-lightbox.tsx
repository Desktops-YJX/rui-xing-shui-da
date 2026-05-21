"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

export function ImageLightbox({ src, alt, className, fill = true }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

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

  const modalContent = isOpen && (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-12" 
      onClick={() => setIsOpen(false)}
    >
      <button 
        className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-[10000] border border-white/20"
        onClick={(e) => { 
          e.stopPropagation(); 
          setIsOpen(false); 
        }}
        aria-label="Close"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div 
        className="relative w-full h-full flex items-center justify-center animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative w-full h-full max-w-[90vw] max-h-[90vh]">
          <Image 
            src={src} 
            alt={alt} 
            fill 
            className="object-contain" 
            sizes="95vw"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );

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
          fill={fill}
          className={className}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-300 flex items-center justify-center z-10">
          <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-lg border border-brand-border">
            <ZoomIn className="w-6 h-6 text-brand-red" />
          </div>
        </div>
      </div>

      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
