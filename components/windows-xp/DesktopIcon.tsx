"use client";

import { PortfolioItem } from "@/lib/windows-xp/data";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface DesktopIconProps {
  icon: PortfolioItem;
  position: { x: number; y: number };
  isSelected: boolean;
  onSelect: (e: React.MouseEvent) => void;
  onOpen: () => void;
  onPositionChange: (x: number, y: number) => void;
}

const DesktopIcon = ({ 
  icon, 
  position,
  isSelected, 
  onSelect, 
  onOpen,
  onPositionChange 
}: DesktopIconProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep icon within window bounds
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));

      if (iconRef.current) {
        iconRef.current.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      setIsDragging(false);
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep icon within bounds
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 100;
      const boundedX = Math.max(0, Math.min(newX, maxX));
      const boundedY = Math.max(0, Math.min(newY, maxY));
      
      onPositionChange(boundedX, boundedY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, onPositionChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only handle left click
    
    const rect = iconRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={iconRef}
      className={`absolute flex flex-col items-center justify-center p-2 cursor-pointer text-center w-20 h-24 ${
        isSelected ? "bg-blue-600/40 text-white" : "hover:bg-blue-500/20"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}
      onClick={onSelect}
      onDoubleClick={onOpen}
      onMouseDown={handleMouseDown}
    >
      <div className="w-10 h-10 relative mb-1">
        <Image
          src={icon.iconPath || "/windows-xp/icons/folder.png"}
          alt={icon.name}
          fill
          sizes="(max-width: 32px)"
          priority
          className="object-contain"
          draggable={false}
        />
      </div>
      <span className={`text-[0.8rem] px-1 leading-tight font-sans ${
        isSelected ? "text-white" : "text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.8)]"
      }`}>
        {icon.name}
      </span>
    </div>
  );
};

export default DesktopIcon;