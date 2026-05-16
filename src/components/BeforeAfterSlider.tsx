import { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) handleMove(e.clientX);
    };
    const onPointerUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-2xl cursor-ew-resize group select-none touch-none shadow-2xl"
      onPointerDown={onPointerDown}
    >
      {/* Imagem de Fundo (Depois) */}
      <img 
        src={afterImage} 
        alt="Depois do procedimento" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <span className="absolute top-4 right-4 bg-primary/80 text-on-primary px-4 py-1 text-[10px] uppercase tracking-widest font-bold z-10 pointer-events-none rounded-sm">Depois</span>

      {/* Imagem Sobreposta (Antes) com Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt="Antes do procedimento" 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        <span className="absolute top-4 left-4 bg-black/60 text-white px-4 py-1 text-[10px] uppercase tracking-widest font-bold z-10 pointer-events-none rounded-sm">Antes</span>
      </div>

      {/* Slider Line & Button */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-primary/80 cursor-ew-resize pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 transition-transform group-hover:scale-110">
          <ArrowLeftRight className="text-on-primary w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
