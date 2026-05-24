import React from 'react';

/**
 * InfiniteMarquee Component
 * 
 * Renders an endless sliding banner of brand logos or images.
 * Smoothly pauses on hover and utilizes GPU-accelerated Tailwind animation.
 *
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs/paths.
 * @param {string} props.speed - Optional speed class (default is 25s loop time).
 */
export default function InfiniteMarquee({ 
  images = [
    '/Marca1.webp',
    '/Marca2.webp',
    '/Marca3.webp',
    '/Marca4.webp'
  ],
  speed = 'animate-marquee'
}) {
  // To ensure the marquee has absolutely no gaps or jumps on high-resolution displays (like 4K),
  // we dynamically duplicate the original array so that the single track is sufficiently wide.
  const repeatedList = [];
  
  // We want at least 16 items in the single scrolling track to guarantee extreme width
  const multiplier = Math.ceil(16 / images.length);
  for (let i = 0; i < multiplier; i++) {
    repeatedList.push(...images);
  }

  return (
    <div className="marquee-container relative w-full overflow-hidden py-8 bg-slate-50/50 dark:bg-td-dark/30 border-y border-slate-100 dark:border-white/5 backdrop-blur-sm">
      {/* Premium Side Gradients (Fade effects at the edges) */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 dark:from-td-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 dark:from-td-dark to-transparent z-10 pointer-events-none" />

      {/* Main scrolling wrapper */}
      <div className="flex w-max">
        {/* Track 1 */}
        <div className={`flex shrink-0 items-center gap-12 md:gap-20 px-6 md:px-10 ${speed} cursor-pointer`}>
          {repeatedList.map((src, index) => (
            <div 
              key={`track-1-${index}`} 
              className="flex items-center justify-center h-20 w-44 md:w-52 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 px-6 py-4 shadow-sm hover:shadow-md hover:border-td-green/50 dark:hover:border-td-green/50 hover:scale-105 transition-all duration-300 group"
            >
              <img 
                src={src} 
                alt={`Marca ${index + 1}`} 
                className="max-h-full max-w-full object-contain transition-all duration-300"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150"; // Fallback image if error
                }}
              />
            </div>
          ))}
        </div>

        {/* Track 2 - Identical duplicate track for seamless looping */}
        <div className={`flex shrink-0 items-center gap-12 md:gap-20 px-6 md:px-10 ${speed} cursor-pointer`} aria-hidden="true">
          {repeatedList.map((src, index) => (
            <div 
              key={`track-2-${index}`} 
              className="flex items-center justify-center h-20 w-44 md:w-52 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 px-6 py-4 shadow-sm hover:shadow-md hover:border-td-green/50 dark:hover:border-td-green/50 hover:scale-105 transition-all duration-300 group"
            >
              <img 
                src={src} 
                alt={`Marca ${index + 1}`} 
                className="max-h-full max-w-full object-contain transition-all duration-300"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=150"; // Fallback image if error
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
