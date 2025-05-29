import { useEffect, useRef, useState } from "react";

// Might be overkill but shit looks good
export default function Bg() {
  const tileCount = 200;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const handlePointer = (x: number, y: number) => {
      const tileSize = 100;
      const gapSize = 5;
      const columns = 20;
      const rows = 10;

      const tilePlusGapX = tileSize + gapSize;
      const tilePlusGapY = tileSize + gapSize;

      const xInTile = x % tilePlusGapX;
      const yInTile = y % tilePlusGapY;

      if (xInTile > tileSize || yInTile > tileSize) return;

      let col = Math.floor(x / tilePlusGapX);
      let row = Math.floor(y / tilePlusGapY);

      col = Math.min(col, columns - 1);
      row = Math.min(row, rows - 1);

      const index = row * columns + col;

      setActiveIndices((prev) => {
        if (prev.includes(index)) return prev;
        return [...prev, index];
      });

      setTimeout(() => {
        setActiveIndices((prev) => prev.filter((i) => i !== index));
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointer(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handlePointer(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="bg-grid" ref={containerRef}>
      {Array.from({ length: tileCount }).map((_, i) => (
        <div
          key={i}
          className={`bg-tile ${activeIndices.includes(i) ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
}
