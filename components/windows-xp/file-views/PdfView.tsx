"use client";

import { PortfolioItem } from "@/lib/windows-xp/data";

interface PdfViewProps {
  content: PortfolioItem;
}

const PdfView = ({ content }: PdfViewProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="h-8 bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center">
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded mr-1 hover:bg-gray-100">
          File
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded mr-1 hover:bg-gray-100">
          View
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded hover:bg-gray-100">
          Tools
        </button>
      </div>
      
      {/* PDF Content */}
      <div className="flex-1 bg-gray-100 p-2 overflow-auto">
        {content.url ? (
          <iframe
            src={content.url}
            className="w-full h-full border-0"
            title={content.name}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="bg-white p-4 rounded shadow">
              <p>No PDF content available</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{content.name}</span>
      </div>
    </div>
  );
};

export default PdfView;