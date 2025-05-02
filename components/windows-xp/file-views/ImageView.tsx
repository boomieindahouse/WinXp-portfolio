"use client";

import { PortfolioItem } from "@/lib/windows-xp/data";
import Image from "next/image";

interface ImageViewProps {
  content: PortfolioItem;
}

const ImageView = ({ content }: ImageViewProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="h-8 bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center">
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded mr-1 hover:bg-gray-100">
          File
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded mr-1 hover:bg-gray-100">
          Edit
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded hover:bg-gray-100">
          View
        </button>
      </div>
      
      {/* Image Content */}
      <div className="flex-1 bg-gray-800 flex items-center justify-center p-4 overflow-auto">
        <div className="relative max-w-full max-h-full">
          <Image
            src={content.url || "/windows-xp/placeholder-image.jpg"}
            alt={content.name}
            width={800}
            height={600}
            className="object-contain max-h-[calc(100vh-200px)]"
          />
        </div>
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{content.name}</span>
      </div>
    </div>
  );
};

export default ImageView;