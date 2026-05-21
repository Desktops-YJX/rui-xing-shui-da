"use client";

import { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react'; 
import { gsap } from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
 
import './ScrollFloat.css'; 
 
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger); 
}
 
interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  scrub?: boolean;
}

const ScrollFloat = ({ 
  children, 
  scrollContainerRef, 
  containerClassName = '', 
  textClassName = '', 
  animationDuration = 1, 
  ease = 'back.inOut(2)', 
  scrollStart = 'top bottom-=10%', 
  scrollEnd = 'bottom center', 
  stagger = 0.03,
  as: Component = 'h2',
  scrub = false
}: ScrollFloatProps) => { 
  const containerRef = useRef<HTMLElement>(null); 
 
  const splitText = useMemo(() => { 
    const text = typeof children === 'string' ? children : ''; 
    return text.split('').map((char, index) => ( 
      <span className="char" key={index} style={{ display: 'inline-block' }}> 
        {char === ' ' ? '\u00A0' : char} 
      </span> 
    )); 
  }, [children]); 
 
  useEffect(() => { 
    const el = containerRef.current; 
    if (!el) return; 
 
    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window; 
 
    const charElements = el.querySelectorAll('.char'); 
 
    const ctx = gsap.context(() => {
      gsap.fromTo( 
        charElements, 
        { 
          willChange: 'opacity, transform', 
          opacity: 0, 
          yPercent: 120, 
          scaleY: 2.3, 
          scaleX: 0.7, 
          transformOrigin: '50% 0%' 
        }, 
        { 
          duration: animationDuration, 
          ease: ease, 
          opacity: 1, 
          yPercent: 0, 
          scaleY: 1, 
          scaleX: 1, 
          stagger: stagger, 
          scrollTrigger: { 
            trigger: el, 
            scroller, 
            start: scrollStart, 
            end: scrollEnd, 
            scrub: scrub,
            toggleActions: scrub ? undefined : "play none none none"
          } 
        } 
      ); 
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, scrub]); 
 
  return ( 
    <Component ref={containerRef as any} className={`scroll-float ${containerClassName}`}> 
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span> 
    </Component> 
  ); 
}; 
 
export default ScrollFloat; 
