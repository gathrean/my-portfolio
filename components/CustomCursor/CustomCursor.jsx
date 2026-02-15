'use client';

import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor');
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      if (!cursor.classList.contains('visible')) {
        cursor.classList.add('visible');
      }
    };

    const onMouseLeave = () => {
      cursor.classList.remove('visible');
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
