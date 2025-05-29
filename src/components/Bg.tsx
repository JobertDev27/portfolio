import { useEffect, useRef, useState } from "react";

// Might be overkill but shit looks good
export default function Bg() {
  const tileCount = 200;
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const tileSize = 100;
      const gapSize = 5;
      const columns = 20;
      const rows = 10;

      // Stores the location of the mouse so i can track its position
      const x = e.clientX;
      const y = e.clientY;

      // the size of the tile + gap so i can check its position
      const tilePlusGapX = tileSize + gapSize;
      const tilePlusGapY = tileSize + gapSize;

      // Check if mouse is inside gap space horizontally or vertically
      const xInTile = x % tilePlusGapX;
      const yInTile = y % tilePlusGapY;

      // Check if mouse is outside of the tile
      if (xInTile > tileSize || yInTile > tileSize) {
        setActiveIndex(null);
        return;
      }

      // Returns the tile in which the mouse is in
      let col = Math.floor(x / tilePlusGapX);
      let row = Math.floor(y / tilePlusGapY);

      col = Math.min(col, columns - 1);
      row = Math.min(row, rows - 1);

      const index = row * columns + col;
      setActiveIndex(index);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-grid" ref={containerRef}>
      {Array.from({ length: tileCount }).map((_, i) => (
        <div
          key={i}
          className={`bg-tile ${i === activeIndex ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
}
