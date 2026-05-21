"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  as?: 'div' | 'ul';
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  scrollStart?: string;
  once?: boolean;
}

const ScrollReveal = ({
  children,
  as = 'div',
  className = '',
  direction = 'up',
  distance = 40,
  duration = 1,
  delay = 0,
  stagger = 0,
  scrollStart = 'top bottom-=10%',
  once = true,
}: ScrollRevealProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Determine initial transform based on direction
    let x = 0;
    let y = 0;
    if (direction === 'up') y = distance;
    else if (direction === 'down') y = -distance;
    else if (direction === 'left') x = distance;
    else if (direction === 'right') x = -distance;

    const ctx = gsap.context(() => {
      // Find all immediate children if we want to stagger them, or animate the container itself
      const targets = stagger > 0 ? el.children : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          x: x,
          y: y,
          scale: direction === 'none' ? 0.95 : 1,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            toggleActions: once ? 'play none none none' : 'play none none reverse',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [direction, distance, duration, delay, stagger, scrollStart, once]);

  if (as === 'ul') {
    return (
      <ul ref={containerRef as RefObject<HTMLUListElement>} className={className}>
        {children}
      </ul>
    );
  }

  return (
    <div ref={containerRef as RefObject<HTMLDivElement>} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
