"use client";

import { useEffect, useState } from "react";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";
import { WindowsProvider } from "./windows-context";
import { StartMenuProvider } from "./start-menu-context";

export default function WindowsXP() {
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StartMenuProvider>
      <WindowsProvider>
        <div className="fixed inset-0 flex flex-col overflow-hidden select-none">
          <div className="flex-1 relative overflow-hidden">
            <Desktop />
          </div>
          <Taskbar />
        </div>
      </WindowsProvider>
    </StartMenuProvider>
  );
}