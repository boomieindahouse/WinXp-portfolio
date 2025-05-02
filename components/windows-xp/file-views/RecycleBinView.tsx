"use client";

import { useState } from "react";
import Image from "next/image";

const RecycleBinView = () => {
  const [items] = useState([
    { name: "deleted_file.txt", dateDeleted: "2024-03-20", size: "45 KB" },
    { name: "old_project.zip", dateDeleted: "2024-03-19", size: "2.3 MB" },
    { name: "backup.bak", dateDeleted: "2024-03-18", size: "156 KB" },
  ]);

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
      
      {/* Content */}
      <div className="flex-1 bg-white p-2">
        <table className="w-full text-sm">
          <thead className="bg-[#ece9d8]">
            <tr>
              <th className="text-left p-1">Name</th>
              <th className="text-left p-1">Date Deleted</th>
              <th className="text-left p-1">Size</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-[#e8e8e8] cursor-pointer">
                <td className="p-1 flex items-center">
                  <div className="relative w-4 h-4 mr-2">
                    <Image
                      src="/windows-xp/icons/text.png"
                      alt={item.name}
                      fill
                      sizes="16px"
                      className="object-contain"
                    />
                  </div>
                  {item.name}
                </td>
                <td className="p-1">{item.dateDeleted}</td>
                <td className="p-1">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Status Bar */}
      <div className="h-5 bg-[#ece9d8] border-t border-gray-300 p-1 flex items-center">
        <span className="text-xs">{items.length} items</span>
      </div>
    </div>
  );
};

export default RecycleBinView;