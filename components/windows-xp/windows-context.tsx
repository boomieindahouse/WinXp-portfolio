"use client";

import React, { createContext, useContext, useState } from "react";
import { PortfolioItem, portfolioData } from "@/lib/windows-xp/data";

export type WindowType = {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  width: number;
  height: number;
  left: number;
  top: number;
  type: "image" | "text" | "folder" | "pdf" | "project" | "system";
  content?: any;
  path?: string[];
};

type WindowsContextType = {
  windows: WindowType[];
  activeWindowId: string | null;
  addWindow: (window: Omit<WindowType, "id" | "zIndex" | "isMinimized" | "isMaximized">) => void;
  removeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  activateWindow: (id: string) => void;
  updateWindowPosition: (id: string, left: number, top: number) => void;
  getWindowById: (id: string) => WindowType | undefined;
  openFolder: (path: string[]) => void;
  openFile: (item: PortfolioItem, path: string[]) => void;
};

const WindowsContext = createContext<WindowsContextType | undefined>(undefined);

export const WindowsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [windows, setWindows] = useState<WindowType[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [nextZIndex, setNextZIndex] = useState(1);

  const addWindow = (windowData: Omit<WindowType, "id" | "zIndex" | "isMinimized" | "isMaximized">) => {
    const id = `window-${Date.now()}`;
    const newWindow: WindowType = {
      ...windowData,
      id,
      zIndex: nextZIndex,
      isMinimized: false,
      isMaximized: false,
    };

    setWindows((prev) => [...prev, newWindow]);
    setActiveWindowId(id);
    setNextZIndex((prev) => prev + 1);
  };

  const removeWindow = (id: string) => {
    setWindows((prev) => prev.filter((window) => window.id !== id));
    if (activeWindowId === id) {
      const remainingWindows = windows.filter((window) => window.id !== id);
      const topWindow = remainingWindows.sort((a, b) => b.zIndex - a.zIndex)[0];
      setActiveWindowId(topWindow ? topWindow.id : null);
    }
  };

  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, isMinimized: true } : window
      )
    );
    const visibleWindows = windows
      .filter((window) => !window.isMinimized && window.id !== id)
      .sort((a, b) => b.zIndex - a.zIndex);
    setActiveWindowId(visibleWindows.length > 0 ? visibleWindows[0].id : null);
  };

  const maximizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, isMaximized: !window.isMaximized } : window
      )
    );
  };

  const restoreWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, isMinimized: false } : window
      )
    );
    activateWindow(id);
  };

  const activateWindow = (id: string) => {
    if (activeWindowId === id) return;
    
    setActiveWindowId(id);
    setWindows((prev) => {
      const newZIndex = nextZIndex;
      setNextZIndex(newZIndex + 1);
      
      return prev.map((window) =>
        window.id === id ? { ...window, zIndex: newZIndex } : window
      );
    });
  };

  const updateWindowPosition = (id: string, left: number, top: number) => {
    setWindows((prev) =>
      prev.map((window) =>
        window.id === id ? { ...window, left, top } : window
      )
    );
  };

  const getWindowById = (id: string) => {
    return windows.find((window) => window.id === id);
  };

  const openFolder = (path: string[]) => {
    // Get folder content based on path
    let folderContent = [...portfolioData];
    const folderName = path.length > 0 ? path[path.length - 1] : "My Portfolio";
    
    for (const segment of path) {
      const folder = folderContent.find(
        (item) => item.type === "folder" && item.name === segment
      );
      if (folder && folder.children) {
        folderContent = folder.children;
      }
    }

    addWindow({
      title: folderName,
      icon: "/icons/foldersm.png",
      component: "FolderView",
      width: 600,
      height: 400,
      left: 50 + (windows.length * 20) % 200,
      top: 50 + (windows.length * 20) % 200,
      type: "folder",
      content: folderContent,
      path: path,
    });
  };

  const openFile = (item: PortfolioItem, path: string[]) => {
    const fileWindows: Record<string, any> = {
      image: {
        title: item.name,
        icon: "/icons/gallery.png",
        component: "ImageView",
        width: 700,
        height: 500,
        left: 60 + (windows.length * 20) % 200,
        top: 60 + (windows.length * 20) % 200,
        type: "image",
        content: item,
        path: path,
      },
      pdf: {
        title: item.name,
        icon: "/icons/iepdf.png",
        component: "PdfView",
        width: 800,
        height: 600,
        left: 40 + (windows.length * 20) % 200,
        top: 40 + (windows.length * 20) % 200,
        type: "pdf",
        content: item,
        path: path,
      },
      project: {
        title: item.name,
        icon: "/icons/projectsmall.png",
        component: "ProjectView",
        width: 800,
        height: 600,
        left: 70 + (windows.length * 20) % 200,
        top: 70 + (windows.length * 20) % 200,
        type: "project",
        content: item,
        path: path,
      },
      text: {
        title: item.name,
        icon: "/icons/notepadsmall.png",
        component: "TextView",
        width: 600,
        height: 400,
        left: 80 + (windows.length * 20) % 200,
        top: 80 + (windows.length * 20) % 200,
        type: "text",
        content: item,
        path: path,
      },
    };

    if (fileWindows[item.type]) {
      addWindow(fileWindows[item.type]);
    }
  };

  return (
    <WindowsContext.Provider
      value={{
        windows,
        activeWindowId,
        addWindow,
        removeWindow,
        minimizeWindow,
        maximizeWindow,
        restoreWindow,
        activateWindow,
        updateWindowPosition,
        getWindowById,
        openFolder,
        openFile,
      }}
    >
      {children}
    </WindowsContext.Provider>
  );
};

export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows must be used within a WindowsProvider");
  }
  return context;
};