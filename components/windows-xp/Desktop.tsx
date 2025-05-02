"use client";

import { useEffect, useState } from "react";
import { useWindows } from "./windows-context";
import { desktopIcons } from "@/lib/windows-xp/data";
import DesktopIcon from "./DesktopIcon";
import WindowManager from "./WindowManager";
import { useStartMenu } from "./start-menu-context";

interface IconPosition {
  id: string;
  x: number;
  y: number;
}

const Desktop = () => {
  const { openFolder, openFile, addWindow } = useWindows();
  const { closeStartMenu } = useStartMenu();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [iconPositions, setIconPositions] = useState<IconPosition[]>([]);

  // Initialize icon positions
  useEffect(() => {
    const initialPositions = desktopIcons.map((icon, index) => ({
      id: icon.id,
      x: 0,
      y: index * 100, // Stack icons vertically initially
    }));
    setIconPositions(initialPositions);
  }, []);

  // Close start menu when clicking on desktop
  useEffect(() => {
    const handleMouseDown = () => {
      setSelectedIcon(null);
      closeStartMenu();
    };

    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [closeStartMenu]);

  const handleIconOpen = (icon: any) => {
    if (icon.id === "recycle-bin") {
      addWindow({
        title: "Recycle Bin",
        icon: "/windows-xp/icons/recycle-bin.png",
        component: "RecycleBinView",
        width: 600,
        height: 400,
        left: 50 + (Math.random() * 100),
        top: 50 + (Math.random() * 100),
        type: "system",
      });
    } else if (icon.id === "internet-explorer") {
      addWindow({
        title: "Internet Explorer",
        icon: "/windows-xp/icons/ie.png",
        component: "InternetExplorerView",
        width: 800,
        height: 600,
        left: 50 + (Math.random() * 100),
        top: 50 + (Math.random() * 100),
        type: "system",
      });
    } else if (icon.type === "folder") {
      openFolder(icon.path || []);
    } else {
      openFile(icon, icon.path || []);
    }
  };

  const updateIconPosition = (id: string, x: number, y: number) => {
    setIconPositions(prev => 
      prev.map(pos => 
        pos.id === id ? { ...pos, x, y } : pos
      )
    );
  };

  return (
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'url("/img/desktop/xpwallpaper.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'crisp-edges'
      }}
    >
      <div className="absolute inset-0">
        {desktopIcons.map((icon) => {
          const position = iconPositions.find(pos => pos.id === icon.id);
          return (
            <DesktopIcon
              key={icon.id}
              icon={icon}
              position={position || { x: 0, y: 0 }}
              isSelected={selectedIcon === icon.id}
              onSelect={(e) => {
                e.stopPropagation();
                setSelectedIcon(icon.id);
              }}
              onOpen={() => handleIconOpen(icon)}
              onPositionChange={(x, y) => updateIconPosition(icon.id, x, y)}
            />
          );
        })}
      </div>
      
      <WindowManager />
    </div>
  );
};

export default Desktop;