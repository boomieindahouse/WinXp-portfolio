"use client";

import { useState, useEffect } from "react";
import { useWindows } from "./windows-context";
import { useStartMenu } from "./start-menu-context";
import StartMenu from "./StartMenu";
import Image from "next/image";

const Taskbar = () => {
  const { windows, activeWindowId, restoreWindow } = useWindows();
  const { isOpen, toggleStartMenu } = useStartMenu();
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {isOpen && <StartMenu />}
      
      <div className="flex items-center h-10 bg-gradient-to-r from-[#245edb] to-[#3a6fe9] border-t-2 border-[#466fbf] shadow-md z-20">
        {/* Start Button */}
        <button shadow-md
          className={`h-10 px-2 flex items-center justify-center rounded-r-xl bg-gradient-to-b from-[#64aa64] to-[#107a10] border-[#466fbf] shadow-md ${
            isOpen 
              ? "bg-[#3a6ecf] shadow-inner" 
              : "hover:bg-[#5a96ee] active:bg-[#3a6ecf] active:shadow-inner"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleStartMenu();
          }}
        >
          <div className="flex items-center">
            <div className="relative w-10 h-10">
              <Image 
                src="/icons/winlogo.png" 
                alt="Start" 
                fill
                sizes="24px"
                className="object-contain"
              />
            </div>
            <span className="text-white font-bold italic text-lg mr-2">start</span>
          </div>
        </button>
        
        {/* Quick Launch */}
        <div className="h-8 ml-1 flex items-center border-r border-gray-500 pr-1">
          <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#5a96ee]">
            <div className="relative w-5 h-5">
              <Image
                src="/icons/iesmall.png"
                alt="Internet Explorer"
                fill
                sizes="20px"
                className="object-contain"
              />
            </div>
          </button>
        </div>
        
        {/* Task Buttons */}
        <div className="flex-1 flex items-center space-x-1 px-1 overflow-x-auto">
          {windows.map((window) => (
            <button
              key={window.id}
              className={`h-7 px-2 flex items-center justify-start min-w-[120px] max-w-[200px] rounded ${
                activeWindowId === window.id && !window.isMinimized
                  ? "bg-[#3a6ecf] text-white"
                  : "bg-[#5182dc] text-white hover:bg-[#5a96ee]"
              }`}
              onClick={() => {
                if (window.isMinimized) {
                  restoreWindow(window.id);
                } else if (activeWindowId === window.id) {
                  restoreWindow(window.id);
                } else {
                  restoreWindow(window.id);
                }
              }}
            >
              <div className="w-4 h-4 relative mr-2 flex-shrink-0">
                <Image 
                  src={window.icon} 
                  alt={window.title} 
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs truncate">{window.title}</span>
            </button>
          ))}
        </div>
        
        {/* System Tray */}
        <div className="h-8 flex items-center justify-end bg-[#0c3382] bg-opacity-20 px-2 mr-0.5 rounded-sm">
          <span className="text-white text-xs">{currentTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;