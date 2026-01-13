import { useCursor } from '../hooks/useCursor';

export const Cursor = () => {
  const { cursorRef, cursorRingRef } = useCursor();

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/30 rounded-full pointer-events-none z-[9998] opacity-0 transition-opacity duration-200"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};
