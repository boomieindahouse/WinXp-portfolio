"use client";

import { useWindows } from "../windows-context";
import Image from "next/image";
import { PortfolioItem } from "@/lib/windows-xp/data";

interface FolderViewProps {
  content: PortfolioItem[];
  path: string[];
}

const FolderView = ({ content, path }: FolderViewProps) => {
  const { openFolder, openFile } = useWindows();

  const handleItemClick = (item: PortfolioItem) => {
    if (item.type === "folder") {
      const newPath = [...path, item.name];
      openFolder(newPath);
    } else {
      openFile(item, path);
    }
  };

  const handlePathClick = (index: number) => {
    if (index === -1) {
      // Click on Computer - open root
      openFolder([]);
    } else {
      // Click on a path segment
      openFolder(path.slice(0, index + 1));
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Address Bar */}
      <div className="h-8 bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center">
        <span className="text-sm mr-2 text-gray-600">Address:</span>
        <div className="flex items-center bg-[#ece9d8] border border-gray-400 p-1 flex-1">
        <span><img className="w-5 mr-1" src="icons/foldersm.png" alt="folder" /></span>
          <span 
            className="text-sm text-blue-800 underline cursor-pointer mr-1"
            onClick={() => handlePathClick(-1)}
          >
            Computer
          </span>
          
          {path.map((segment, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-1">&gt;</span>
              <span 
                className="text-sm text-blue-800 underline cursor-pointer"
                onClick={() => handlePathClick(index)}
              >
                {segment}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Folder Content */}
      <div className="flex-1 bg-white p-3 overflow-auto">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded hover:bg-blue-100 cursor-pointer"
              onDoubleClick={() => handleItemClick(item)}
            >
              <div className="relative w-12 h-12 mb-1">
                <Image
                  src={item.iconPath || `/windows-xp/icons/${item.type}.png`}
                  alt={item.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{content.length} items</span>
      </div>
    </div>
  );
};

export default FolderView;