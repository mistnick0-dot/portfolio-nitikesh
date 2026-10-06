import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'play'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (cursorAttr === 'view') {
        setCursorType('view');
      } else if (cursorAttr === 'play') {
        setCursorType('play');
      } else if (target.closest('button, a, input, [role="button"]')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isSpecial = cursorType === 'view' || cursorType === 'play';

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center font-display font-bold text-[10px] tracking-wider transition-all duration-150 ${
          isSpecial
            ? 'h-14 w-14 rounded-full bg-[#171717] text-white shadow-xl shadow-black/15 scale-100'
            : cursorType === 'pointer'
            ? 'h-8 w-8 rounded-full border-2 border-[#3155FF] bg-[#3155FF]/10 scale-100'
            : 'h-3.5 w-3.5 rounded-full bg-[#171717]'
        }`}
      >
        {cursorType === 'view' && 'VIEW →'}
        {cursorType === 'play' && 'PLAY →'}
      </div>
    </div>
  );
}
