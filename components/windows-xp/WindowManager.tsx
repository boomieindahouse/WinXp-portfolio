"use client";

import { useWindows, WindowType } from "./windows-context";
import Window from "./Window";
import FolderView from "./file-views/FolderView";
import ImageView from "./file-views/ImageView";
import PdfView from "./file-views/PdfView";
import ProjectView from "./file-views/ProjectView";
import TextView from "./file-views/TextView";
import RecycleBinView from "./file-views/RecycleBinView";
import InternetExplorerView from "./file-views/InternetExplorerView";

const WindowComponent = ({ window }: { window: WindowType }) => {
  switch (window.component) {
    case "FolderView":
      return <FolderView content={window.content} path={window.path || []} />;
    case "ImageView":
      return <ImageView content={window.content} />;
    case "PdfView":
      return <PdfView content={window.content} />;
    case "ProjectView":
      return <ProjectView content={window.content} />;
    case "TextView":
      return <TextView content={window.content} />;
    case "RecycleBinView":
      return <RecycleBinView />;
    case "InternetExplorerView":
      return <InternetExplorerView />;
    default:
      return <div>Unknown window type</div>;
  }
};

const WindowManager = () => {
  const { windows, activeWindowId } = useWindows();

  // Sort windows by z-index
  const sortedWindows = [...windows].sort((a, b) => a.zIndex - b.zIndex);

  return (
    <>
      {sortedWindows.map((window) => {
        if (window.isMinimized) return null;
        
        return (
          <Window
            key={window.id}
            window={window}
            isActive={window.id === activeWindowId}
          >
            <WindowComponent window={window} />
          </Window>
        );
      })}
    </>
  );
};

export default WindowManager;