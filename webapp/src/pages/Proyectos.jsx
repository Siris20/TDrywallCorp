import { useState, useRef, useEffect, useCallback } from "react";

/* ───────────────────────── Video data ───────────────────────── */
const allVideos = [
  "D1.mp4",
  "DF.mp4",
  "DF2.mp4",
  "F1.mp4",
  "F2.mp4",
  "F3.mp4",
  "F4.mp4",
  "F5Amazing.mp4",
  "F6.mp4",
  "F7.mp4",
  "F8.mp4",
  "F9.mp4",
  "M1.mp4",
  "M2.mp4",
  "M3.mp4",
  "M4.mp4",
];

function getServiceInfo(filename) {
  const first = filename.charAt(0).toUpperCase();
  if (first === "D")
    return { label: "Installation", color: "#E87A20", bg: "rgba(232,122,32,0.12)", border: "rgba(232,122,32,0.3)" };
  if (first === "M")
    return { label: "Framing", color: "#1A8FE3", bg: "rgba(26,143,227,0.12)", border: "rgba(26,143,227,0.3)" };
  if (first === "F")
    return { label: "Finishing", color: "#1DB954", bg: "rgba(29,185,84,0.12)", border: "rgba(29,185,84,0.3)" };
  return { label: "Other", color: "#888", bg: "rgba(136,136,136,0.12)", border: "rgba(136,136,136,0.3)" };
}

const videoData = allVideos.map((file) => ({
  file,
  src: `/Videos/${file}`,
  ...getServiceInfo(file),
}));

const FILTERS = [
  { key: "all", label: "All Projects", color: "#006c49" },
  { key: "D", label: "Installation", color: "#E87A20" },
  { key: "M", label: "Framing", color: "#1A8FE3" },
  { key: "F", label: "Finishing", color: "#1DB954" },
];

/* ────────────────────── VideoCard component ─────────────────── */
function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative flex-shrink-0 w-[80vw] sm:w-[42vw] md:w-[300px] aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.5s cubic-bezier(.22,1,.36,1), box-shadow 0.5s ease",
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        boxShadow: isHovered
          ? `0 20px 50px ${video.border}, 0 0 0 2px ${video.color}40`
          : "0 8px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={(e) => {
          // Ensure the first frame is rendered as a poster
          e.target.currentTime = 0.1;
        }}
      >
        <source src={video.src} type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

      {/* Play icon on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: isHovered ? 0 : 0.7,
          transition: "opacity 0.4s ease",
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md"
          style={{ background: `${video.color}30`, border: `2px solid ${video.color}60` }}
        >
          <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
        </div>
      </div>

      {/* Service tag */}
      <div className="absolute top-4 left-4 z-10">
        <span
          className="px-4 py-1.5 rounded-full text-xs font-bold font-headline backdrop-blur-md tracking-wider uppercase"
          style={{
            background: `${video.color}DD`,
            color: "#fff",
            boxShadow: `0 4px 14px ${video.color}40`,
          }}
        >
          {video.label}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <h3 className="text-white font-headline font-bold text-lg leading-tight drop-shadow-lg">
          {video.file.replace(".mp4", "")}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span
            className="w-2 h-2 rounded-full inline-block animate-pulse"
            style={{ background: video.color }}
          />
          <p className="text-white/70 text-xs font-medium tracking-wide">{video.label}</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────── Main Proyectos page ──────────────────── */
export default function Proyectos() {
  const [activeFilter, setActiveFilter] = useState("all");
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const filtered = activeFilter === "all"
    ? videoData
    : videoData.filter((v) => v.file.charAt(0).toUpperCase() === activeFilter);

  /* ── Scroll helpers ─────────────────────────────────────────── */
  const updateScrollButtons = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons, filtered]);

  const scroll = (dir) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 324, behavior: "smooth" });
  };

  /* ── Drag-to-scroll ─────────────────────────────────────────── */
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragState.current.startX = e.pageX - carouselRef.current.offsetLeft;
    dragState.current.scrollLeft = carouselRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <div className="bg-[#f9f9ff] font-body text-[#141b2b] min-h-screen">
      <main className="pt-20">
        {/* ── Header Section ───────────────────────────────────── */}
        <section className="relative py-12 px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f9f9ff] via-[#e8ecff] to-[#f0fff4]" />
            {/* Decorative blobs */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
              style={{ background: "radial-gradient(circle, #E87A20 0%, transparent 70%)" }}
            />
            <div
              className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, #1A8FE3 0%, transparent 70%)" }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-15 blur-3xl"
              style={{ background: "radial-gradient(circle, #1DB954 0%, transparent 70%)" }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <header className="mb-5">
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-[#141b2b] tracking-tighter mb-3">
                Portafolio de <span className="text-[#006c49]">Proyectos</span>
              </h1>
              <p className="text-lg text-[#3c4a42] max-w-2xl leading-relaxed">
                Explora nuestra maestría en acabados estructurales. Cada proyecto refleja nuestra precisión técnica y
                compromiso con la calidad arquitectónica.
              </p>
            </header>

            {/* ── Filter Buttons ────────────────────────────────── */}
            <div className="flex overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-3 bg-white/60 backdrop-blur-md p-2 rounded-full border border-slate-200/50 shadow-sm">
                {FILTERS.map((f) => {
                  const isActive = activeFilter === f.key;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setActiveFilter(f.key)}
                      className="px-6 py-2.5 rounded-full font-headline font-bold text-sm transition-all duration-300 whitespace-nowrap"
                      style={
                        isActive
                          ? {
                              background: f.color,
                              color: "#fff",
                              boxShadow: `0 4px 18px ${f.color}50`,
                            }
                          : { color: "#3c4a42" }
                      }
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = `${f.color}15`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      {f.label}
                      {isActive && (
                        <span className="ml-2 bg-white/25 text-white text-xs px-2 py-0.5 rounded-full">
                          {filtered.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Video Carousel ───────────────────────────────────── */}
        <section className="py-2 px-6 max-w-[100vw] overflow-hidden">
          <div className="max-w-7xl mx-auto relative">
            {/* Navigation arrows */}
            {canScrollLeft && (
              <button
                onClick={() => scroll(-1)}
                className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined text-[#141b2b] text-xl">chevron_left</span>
              </button>
            )}
            {canScrollRight && (
              <button
                onClick={() => scroll(1)}
                className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-slate-200/50 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined text-[#141b2b] text-xl">chevron_right</span>
              </button>
            )}

            {/* Gradient fades on edges */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f9f9ff] to-transparent z-10 pointer-events-none" />
            )}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f9f9ff] to-transparent z-10 pointer-events-none" />
            )}

            {/* Scrollable track */}
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto py-4 px-2 scrollbar-hide"
              style={{
                scrollSnapType: "x mandatory",
                cursor: isDragging ? "grabbing" : "grab",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {filtered.map((video) => (
                <div key={video.file} style={{ scrollSnapAlign: "start" }}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {filtered.map((video, i) => (
                <button
                  key={video.file}
                  onClick={() => {
                    const el = carouselRef.current;
                    if (!el) return;
                    el.scrollTo({ left: i * 340, behavior: "smooth" });
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300 hover:scale-150"
                  style={{ background: video.color, opacity: 0.4 }}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Legend ────────────────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6">
              {FILTERS.slice(1).map((f) => (
                <div
                  key={f.key}
                  className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md border transition-all duration-300 hover:scale-105"
                  style={{
                    background: `${f.color}08`,
                    borderColor: `${f.color}25`,
                  }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: f.color, boxShadow: `0 0 10px ${f.color}60` }} />
                  <span className="font-headline font-bold text-sm text-[#141b2b]">{f.label}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${f.color}15`, color: f.color }}>
                    {f.key}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
