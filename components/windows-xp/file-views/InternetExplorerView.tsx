"use client";

import { useState } from "react";
import Image from "next/image";

const InternetExplorerView = () => {
  const [url, setUrl] = useState("https://www.msn.com");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="h-8 bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center space-x-1">
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded hover:bg-gray-100 flex items-center">
          <div className="relative w-4 h-4 mr-1">
            <Image
              src="/windows-xp/icons/back.png"
              alt="Back"
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>
          Back
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded hover:bg-gray-100 flex items-center">
          <div className="relative w-4 h-4 mr-1">
            <Image
              src="/windows-xp/icons/forward.png"
              alt="Forward"
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>
          Forward
        </button>
        <button className="px-2 py-0.5 text-sm border border-gray-400 rounded hover:bg-gray-100 flex items-center">
          <div className="relative w-4 h-4 mr-1">
            <Image
              src="/windows-xp/icons/refresh.png"
              alt="Refresh"
              fill
              sizes="16px"
              className="object-contain"
            />
          </div>
          Refresh
        </button>
      </div>
      
      {/* Address Bar */}
      <div className="h-8 bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center">
        <span className="text-sm mr-2">Address:</span>
        <form onSubmit={handleSubmit} className="flex-1 flex">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-2 py-0.5 text-sm border border-gray-400 rounded"
          />
        </form>
      </div>
      
      {/* Content */}
      <div className="flex-1 bg-white">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image
                  src="/windows-xp/icons/ie.png"
                  alt="Loading"
                  fill
                  sizes="64px"
                  className="object-contain animate-pulse"
                />
              </div>
              <p className="text-sm text-gray-600">Loading...</p>
            </div>
          </div>
        ) : (
          <div className="p-4">
            <h1 className="text-2xl mb-4">Internet Explorer</h1>
            <p className="text-gray-600 mb-2">Welcome to Internet Explorer 6.0</p>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm">For your security, this version of Internet Explorer is no longer supported.</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{isLoading ? "Loading..." : "Done"}</span>
      </div>
    </div>
  );
};

export default InternetExplorerView;