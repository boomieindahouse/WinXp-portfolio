"use client";

import { PortfolioItem } from "@/lib/windows-xp/data";

interface TextViewProps {
  content: PortfolioItem;
}

const TextView = ({ content }: TextViewProps) => {
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
          Format
        </button>
      </div>
      
      {/* Text Content */}
      <div className="flex-1 bg-white p-4 overflow-auto font-mono text-sm whitespace-pre-wrap">
        {content.text || "No text content available."}
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{content.name}</span>
      </div>
    </div>
  );
};

export default TextView;