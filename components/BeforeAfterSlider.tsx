
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after, title }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-xl"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* After Image */}
      <img src={after} alt="Depois" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Before Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden border-r-2 border-white shadow-2xl"
        style={{ width: `${sliderPos}%` }}
      >
        <img src={before} alt="Antes" className="absolute top-0 left-0 w-[100vw] h-full object-cover max-w-none" style={{ width: containerRef.current?.offsetWidth }} />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs rounded uppercase font-bold tracking-wider">Antes</div>
      <div className="absolute top-4 right-4 bg-master-green text-white px-2 py-1 text-xs rounded uppercase font-bold tracking-wider">Depois</div>

      {/* Handle */}
      <div
        className="absolute top-0 h-full w-1 bg-white flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center -ml-0.5">
          <i className="fas fa-arrows-left-right text-master-blue text-xs"></i>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
