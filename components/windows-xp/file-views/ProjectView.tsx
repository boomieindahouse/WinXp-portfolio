"use client";

import { PortfolioItem } from "@/lib/windows-xp/data";
import Image from "next/image";
import Link from "next/link";

interface ProjectViewProps {
  content: PortfolioItem;
}

const ProjectView = ({ content }: ProjectViewProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Project Content */}
      <div className="flex-1 bg-white p-6 overflow-auto">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">{content.name}</h1>
        
        {content.image && (
          <div className="mb-6 relative">
            <Image
              src={content.image}
              alt={content.name}
              width={800}
              height={450}
              className="object-cover rounded-lg border-2 border-gray-300 shadow-md"
            />
          </div>
        )}
        
        <div className="bg-[#ece9d8] border border-gray-300 rounded p-4 mb-6">
          <h2 className="text-lg font-bold text-blue-800 mb-2">Project Details</h2>
          <p className="text-gray-800 mb-4">{content.description}</p>
          
          {content.technologies && (
            <div className="mb-4">
              <h3 className="text-md font-semibold text-blue-700 mb-1">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {content.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {content.url && (
            <div className="mt-4">
              <Link
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#316ac5] text-white px-4 py-2 rounded hover:bg-[#2155a3] transition-colors"
              >
                Visit Project
              </Link>
            </div>
          )}
        </div>
        
        {content.features && (
          <div className="bg-[#ece9d8] border border-gray-300 rounded p-4 mb-6">
            <h2 className="text-lg font-bold text-blue-800 mb-2">Key Features</h2>
            <ul className="list-disc pl-6">
              {content.features.map((feature, index) => (
                <li key={index} className="text-gray-800 mb-1">{feature}</li>
              ))}
            </ul>
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

export default ProjectView;