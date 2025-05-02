"use client";

import { useRef, useState, useEffect } from "react";
import { useWindows, WindowType } from "./windows-context";
import Image from "next/image";

interface WindowProps {
  window: WindowType;
  isActive: boolean;
  children: React.ReactNode;
}

const Window = ({ window, isActive, children }: WindowProps) => {
  const {
    activateWindow,
    removeWindow,
    minimizeWindow,
    maximizeWindow,
    updateWindowPosition,
  } = useWindows();

  const windowRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isActive) {
      activateWindow(window.id);
    }
  };

  const handleTitleMouseDown = (e: React.MouseEvent) => {
    if (window.isMaximized) return;
    
    e.preventDefault();
    setDragging(true);
    
    const rect = windowRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (windowRef.current && dragging) {
        const newLeft = e.clientX - dragOffset.x;
        const newTop = e.clientY - dragOffset.y;
        
        // Update the window position
        updateWindowPosition(window.id, newLeft, newTop);
        
        // Apply the position directly for smooth dragging
        windowRef.current.style.left = `${newLeft}px`;
        windowRef.current.style.top = `${newTop}px`;
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, dragOffset, window.id, updateWindowPosition]);

  const windowStyle = {
    width: window.isMaximized ? "100%" : `${window.width}px`,
    height: window.isMaximized ? "calc(100% - 30px)" : `${window.height}px`,
    left: window.isMaximized ? 0 : `${window.left}px`,
    top: window.isMaximized ? 0 : `${window.top}px`,
    zIndex: window.zIndex,
  };

  return (
    <div
      ref={windowRef}
      className={`absolute rounded-t-md flex flex-col shadow-xl transition-shadow ${
        isActive ? "shadow-2xl" : "shadow-md opacity-95"
      }`}
      style={windowStyle}
      onMouseDown={handleMouseDown}
    >
      {/* Window Title Bar */}
      <div
        onMouseDown={handleTitleMouseDown}
        className={`flex items-center h-8 px-2 rounded-t-md ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-blue-500"
            : "bg-gradient-to-r from-gray-400 to-gray-300"
        }`}
      >
        <div className="flex items-center space-x-2 flex-1">
          <div className="w-4 h-4 relative">
            <Image 
              src={window.icon} 
              alt={window.title} 
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>
          <span className={`font-medium text-sm ${isActive ? "text-white" : "text-gray-700"}`}>
            {window.title}
          </span>
        </div>
        
        <div className="flex space-x-1">
          <button
            onClick={() => minimizeWindow(window.id)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
              <path d="M2 6h16v2H2z" />
            </svg>
          </button>
          
          <button
            onClick={() => maximizeWindow(window.id)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-blue-400"
          >
            {window.isMaximized ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                <path fillRule="evenodd" d="M4.5 7.5v-1h1v1h-1zm10 0v-1h1v1h-1zm1 10h-1v-1h1v1zm-11 0h-1v-1h1v1zm-1-11h1v1h-1v-1zm11 0h1v1h-1v-1zm-10 10h10v-8h-10v8z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
                <path fillRule="evenodd" d="M3 4h14v12H3V4zm2 2v8h10V6H5z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => removeWindow(window.id)}
            className="w-5 h-5 flex items-center justify-center rounded hover:bg-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-white">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Window Content */}
      <div className="flex-1 bg-white border-l border-r border-b border-gray-400 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Window;