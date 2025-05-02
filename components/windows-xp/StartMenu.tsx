"use client";

import { useEffect, useRef } from "react";
import { useStartMenu } from "./start-menu-context";
import { useWindows } from "./windows-context";
import Image from "next/image";

const StartMenu = () => {
  const { closeStartMenu } = useStartMenu();
  const { openFolder } = useWindows();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeStartMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeStartMenu]);

  const handleOpenMyPortfolio = () => {
    closeStartMenu();
    openFolder([]);
  };

  const handleOpenProjects = () => {
    closeStartMenu();
    openFolder(["Projects"]);
  };

  const handleOpenAboutMe = () => {
    closeStartMenu();
    openFolder(["About Me"]);
  };

  return (
    <div 
      ref={menuRef}
      className="absolute bottom-10 left-0 w-80 bg-white border-2 border-[#245edb] rounded-tr-md rounded-br-md rounded-bl-md shadow-lg z-30"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#245edb] to-[#3a6fe9] h-12 px-4 flex items-center">
        <div className="relative w-8 h-8 mr-2">
          <Image
            src="/img/user.jpg"
            alt="User"
            fill
            sizes="32px"
            className="object-contain rounded-full"
          />
        </div>
        <span className="text-white font-semibold">EL Boomie Portfolio</span>
      </div>
      
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-10 bg-[#d3e5fa] h-[340px] flex flex-col items-center pt-3">
          <div className="relative w-7 h-7 mb-3">
            <Image
              src="/icons/ie.png"
              alt="Internet"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
          <div className="relative w-7 h-7 mb-3">
            <Image
              src="/windows-xp/icons/email.png"
              alt="Email"
              fill
              sizes="28px"
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Main Menu Items */}
        <div className="flex-1 bg-white">
          {/* Programs Section */}
          <div className="border-b border-gray-300 p-2">
            <div 
              className="flex items-center px-2 py-1 rounded hover:bg-[#316ac5] hover:text-white cursor-pointer"
              onClick={handleOpenMyPortfolio}
            >
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/icons/folder.png"
                  alt="My Portfolio"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-medium">My Portfolio</span>
            </div>
            
            <div 
              className="flex items-center px-2 py-1 rounded hover:bg-[#316ac5] hover:text-white cursor-pointer"
              onClick={handleOpenProjects}
            >
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/icons/project.png"
                  alt="Projects"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-medium">Projects</span>
            </div>
            
            <div 
              className="flex items-center px-2 py-1 rounded hover:bg-[#316ac5] hover:text-white cursor-pointer"
              onClick={handleOpenAboutMe}
            >
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/icons/agent.png"
                  alt="About Me"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-medium">About Me</span>
            </div>
          </div>
          
          {/* Bottom Items */}
          <div className="p-2">
            <div className="flex items-center px-2 py-1 rounded hover:bg-[#316ac5] hover:text-white cursor-pointer">
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/windows-xp/icons/settings.png"
                  alt="Settings"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-medium">Settings</span>
            </div>
            
            <div className="flex items-center px-2 py-1 rounded hover:bg-[#316ac5] hover:text-white cursor-pointer">
              <div className="relative w-8 h-8 mr-2">
                <Image
                  src="/windows-xp/icons/contact.png"
                  alt="Contact"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-medium">Contact</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-[#d3e5fa] p-2 flex items-center justify-between">
        <button className="flex items-center rounded hover:bg-[#316ac5] hover:text-white px-2 py-1">
          <div className="relative w-6 h-6 mr-2">
            <Image
              src="/windows-xp/icons/shutdown.png"
              alt="Shut Down"
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
          <span className="text-sm">Log Off</span>
        </button>
        <button className="flex items-center rounded hover:bg-[#316ac5] hover:text-white px-2 py-1">
          <div className="relative w-6 h-6 mr-2">
            <Image
              src="/windows-xp/icons/shutdown.png"
              alt="Shut Down"
              fill
              sizes="24px"
              className="object-contain"
            />
          </div>
          <span className="text-sm">Shut Down</span>
        </button>
      </div>
    </div>
  );
};

export default StartMenu;