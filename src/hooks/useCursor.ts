import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target instanceof Element && target.closest('button, a, [role="button"]')) {
        if (cursorRef.current && cursorRingRef.current) {
          cursorRef.current.style.transform = 'scale(2.5)';
          cursorRingRef.current.style.opacity = '0.3';
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current && cursorRingRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
        cursorRingRef.current.style.opacity = '0';
      }
    };

    const animateCursor = () => {
      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      cursorPos.current.x = lerp(cursorPos.current.x, mousePos.current.x, 0.15);
      cursorPos.current.y = lerp(cursorPos.current.y, mousePos.current.y, 0.15);

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRingRef.current.style.top = `${cursorPos.current.y}px`;
      }

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return { cursorRef, cursorRingRef };
};
