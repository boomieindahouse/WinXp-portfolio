"use client";

import { ThemeProvider } from "@/components/windows-xp/theme-provider";
import WindowsXP from "@/components/windows-xp/WindowsXP";

export default function Home() {
  return (
    <ThemeProvider>
      <WindowsXP />
    </ThemeProvider>
  );
}