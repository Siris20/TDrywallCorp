import React, { useState, useRef, useEffect } from 'react';

/**
 * BeforeAfterSlider Component
 * 
 * Renders an interactive comparison slider between two images.
 * Smoothly follows mouse moves and touch gestures.
 * 
 * @param {Object} props
 * @param {string} props.beforeImage - Path to the "Before" image (shown on the left).
 * @param {string} props.afterImage - Path to the "After" image (shown on the right).
 */
export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  // Reset the divider to the center whenever a new project is loaded
  useEffect(() => {
    setSliderPosition(50);
  }, [beforeImage, afterImage]);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // Calculate the percentage relative to the container width (constrained between 0% and 100%)
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[400px] md:h-full min-h-[350px] overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 select-none shadow-xl cursor-ew-resize group bg-slate-100/80 dark:bg-td-dark/30"
    >
      {/* Base Layer: DESPUÉS (After) - full width at the bottom */}
      <img 
        src={afterImage} 
        alt="Después" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
      />

      {/* Overlay Layer: ANTES (Before) - clipped dynamically based on slider position */}
      <img 
        src={beforeImage} 
        alt="Antes" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      />

      {/* Sliding Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Floating circular handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-td-dark rounded-full border-2 border-td-green shadow-2xl flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-td-dark dark:text-td-green text-2xl font-black">swap_horiz</span>
        </div>
      </div>

      {/* Label Badges */}
      <div className="absolute bottom-4 left-4 bg-td-dark/85 text-white px-4 py-1.5 rounded-xl text-xs font-black tracking-widest backdrop-blur-md z-10 border border-white/10 shadow-lg">
        ANTES
      </div>
      <div className="absolute bottom-4 right-4 bg-td-green text-td-dark px-4 py-1.5 rounded-xl text-xs font-black tracking-widest z-10 shadow-lg">
        DESPUÉS
      </div>
    </div>
  );
}
